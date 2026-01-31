import React, { useState, useEffect } from 'react';
import { Upload, Download, Trash2, ArrowUp, ArrowDown, Plus } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface UserStory {
  id: string;
  title: string;
  description: string;
  priority: number;
}

const BacklogPage: React.FC = () => {
  const [stories, setStories] = useState<UserStory[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  // Fetch stories from Supabase
  const fetchStories = async () => {
    const { data, error } = await supabase
      .from('backlog')
      .select('*')
      .order('priority', { ascending: true });

    if (error) console.error('Error fetching stories:', error);
    else setStories(data || []);
  };

  useEffect(() => {
    fetchStories();

    // Enable Realtime subscription
    const subscription = supabase
      .channel('public:backlog')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'backlog' }, () => {
        fetchStories();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const addStory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    // Calculate max priority safely
    const maxPriority = stories.length > 0
      ? Math.max(...stories.map(s => s.priority))
      : 0;

    const { error } = await supabase
      .from('backlog')
      .insert([
        {
          title: newTitle,
          description: newDesc,
          priority: maxPriority + 1
        }
      ]);

    if (error) {
      console.error('Error adding story:', error);
    } else {
      setNewTitle('');
      setNewDesc('');
    }
  };

  const deleteStory = async (id: string) => {
    const { error } = await supabase
      .from('backlog')
      .delete()
      .eq('id', id);

    if (error) console.error('Error deleting story:', error);
  };

  const moveStory = async (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === stories.length - 1)) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const currentStory = stories[index];
    const targetStory = stories[targetIndex];

    // Optimistic update to prevent UI flicker/lag perception
    const newStories = [...stories];
    newStories[index] = { ...currentStory, priority: targetStory.priority };
    newStories[targetIndex] = { ...targetStory, priority: currentStory.priority };
    // Sort immediately to reflect visual change (though Realtime will confirm it)
    newStories.sort((a, b) => a.priority - b.priority);
    setStories(newStories);

    // If priorities are somehow identical, we need to force a difference
    let p1 = targetStory.priority;
    let p2 = currentStory.priority;

    if (p1 === p2) {
      // Collision detected. Re-normalize or just bump one.
      // Simple fix: direction up means current should be smaller than target.
      if (direction === 'up') {
        p1 = p2 - 1; // target (upper) becomes smaller? No.
        // We want Current to go Up (smaller index, smaller priority).
        // Current is at `index`. Target is at `index-1`.
        // We want Current to take Target's priority.
        // If they were equal, they are visibly indistinguishable sort-wise.
        // Let's just swap the VALUES.
        // If values are equal, we need to differentiate.
        // Current moving UP: needs LOWER priority than neighbor.
        p1 = p2 - 1;
      } else {
        p1 = p2 + 1;
      }
    }

    // Perform two updates instead of upsert to avoid constraint issues with partial data
    await supabase.from('backlog').update({ priority: p1 }).eq('id', currentStory.id);
    await supabase.from('backlog').update({ priority: p2 }).eq('id', targetStory.id);
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(stories));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "backlog.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Import kept as helper (overwrites DB or appends? Simple append for now or alert)
  // For this prototype, let's keep it simple: Import appends or just logs (since ID collision might happen if full overwrite)
  // User asked to replace state. For Supabase, importing to overwrite implies deleting all and inserting.
  // We will disable import to keep it safe or just append. Let's make it append new ones to avoid destruction.
  const importJSON = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      fileReader.readAsText(event.target.files[0], "UTF-8");
      fileReader.onload = async (e) => {
        if (e.target?.result) {
          try {
            const parsed = JSON.parse(e.target.result as string);
            // Insert all imported stories
            // Strip IDs to allow new autogeneration or upsert if taking over? 
            // Let's create new entries for them to be safe.
            const toInsert = parsed.map((s: any, i: number) => ({
              title: s.title,
              description: s.description,
              priority: stories.length + i + 1
            }));

            const { error } = await supabase.from('backlog').insert(toInsert);
            if (error) console.error("Error importing:", error);

          } catch (error) {
            alert("Fichier JSON invalide");
          }
        }
      };
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-['Inter'] p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl border border-slate-300 rounded-lg overflow-hidden">

        {/* Header */}
        <div className="bg-slate-900 p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-white uppercase tracking-wider">Product Backlog</h1>
            <p className="text-slate-400 text-sm">Gestion des User Stories (Synchronisé)</p>
          </div>
          <div className="flex gap-3">
            <button onClick={exportJSON} className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase rounded transition-colors">
              <Download size={14} /> Exporter
            </button>
            <label className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold uppercase rounded cursor-pointer transition-colors">
              <Upload size={14} /> Importer
              <input type="file" accept=".json" onChange={importJSON} className="hidden" />
            </label>
          </div>
        </div>

        <div className="p-6">
          {/* Form */}
          <form onSubmit={addStory} className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="flex gap-4 mb-3">
              <input
                type="text"
                placeholder="Titre de la User Story"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="flex-1 p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Description (En tant que... je veux... afin de...)"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="flex-1 p-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500"
              />
              <button type="submit" className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded text-sm font-bold flex items-center gap-2 transition-colors">
                <Plus size={16} /> Ajouter
              </button>
            </div>
          </form>

          {/* List */}
          <div className="space-y-3">
            {stories.length === 0 ? (
              <p className="text-center text-slate-400 italic">Aucune User Story dans le backlog.</p>
            ) : (
              stories.map((story, index) => (
                <div key={story.id} className="flex items-center p-4 bg-white border border-slate-200 hover:border-blue-300 rounded shadow-sm transition-all group">
                  <div className="mr-4 text-slate-300 font-bold text-lg w-6 text-center">{index + 1}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800">{story.title}</h3>
                    <p className="text-sm text-slate-600">{story.description}</p>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => moveStory(index, 'up')}
                      disabled={index === 0}
                      className="p-1.5 text-slate-400 hover:text-blue-600 disabled:opacity-30"
                    >
                      <ArrowUp size={16} />
                    </button>
                    <button
                      onClick={() => moveStory(index, 'down')}
                      disabled={index === stories.length - 1}
                      className="p-1.5 text-slate-400 hover:text-blue-600 disabled:opacity-30"
                    >
                      <ArrowDown size={16} />
                    </button>
                    <button
                      onClick={() => deleteStory(story.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 ml-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklogPage;
