import React, { useState } from 'react';
import { 
  Smile, 
  Brain, 
  Zap, 
  AlertCircle,
  ArrowRight,
  MousePointer2,
  History,
  Gauge,
  Plus,
  X
} from 'lucide-react';

const ExperienceMapPage: React.FC = () => {
  const [steps, setSteps] = useState([
    {
      title: "1. Interviewer le Métier",
      actions: ["Préparer l'entretien", "Animer l'interview", "Prendre des notes structurées"],
      thoughts: ["Quels sont les vrais objectifs métier ?", "Est-ce que j’ai bien compris le besoin ?"],
      frustrationScore: 4,
      frustrationLevel: "Modérée",
      experience: ["Recentrer le flux sur les objectifs réels", "Difficulté à structurer à chaud"],
      painPoints: ["Manque d'outils pour guider l'entretien", "Oublis possibles"],
      opportunities: ["Guidage dynamique de l'entretien", "Reformulation automatique"]
    },
    {
      title: "2. Cerner le Périmètre du SI",
      actions: ["Délimiter le domaine d'étude", "Identifier les Acteurs", "Cartographier le flux (MFC)"],
      thoughts: ["Est-ce qu'on a oublié un acteur caché ?", "L'info, elle rentre ou elle sort ?"],
      frustrationScore: 6,
      frustrationLevel: "Significative",
      experience: ["Mode de transmission imprécis", "Oublis par fatigue"],
      painPoints: ["Confusion flux physique/info", "Manque de vision transverse"],
      opportunities: ["Suggestions d'acteurs", "Validation automatique"]
    },
    {
      title: "3. Elicitation",
      actions: ["Préparer les ateliers", "Identifier les parties prenantes", "Conduire les entretiens", "Analyser les propos"],
      thoughts: ["Discuter directement avec le métier", "Expérimenter par soi-même les processus"],
      frustrationScore: 6.5,
      frustrationLevel: "Significative",
      experience: ["Agréable à exécuter", "Préparation et prise de note lourde"],
      painPoints: ["Double travail de ré-étude", "Risque invisible (oubli)"],
      opportunities: ["Outil de retranscription", "Classement automatique"]
    },
    {
      title: "4. Formalisation des besoins",
      actions: ["Reprendre les éléments élicités", "Formaliser les US (3C)", "Vérifier INVEST"],
      thoughts: ["Formaliser de manière structurée", "Vérifier le rattachement à un acteur"],
      frustrationScore: 5,
      frustrationLevel: "Modérée",
      experience: ["Plus légère que l’élicitation", "Responsabilité forte"],
      painPoints: ["Besoin sans processus métier", "Erreurs de vérification manuelle"],
      opportunities: ["Cadre de structuration US", "Détection des doublons"]
    },
    {
      title: "5. Traduction en exigences",
      actions: ["Identification des fonctions", "Distinction Interne/Externe", "Matrice de couverture"],
      thoughts: ["Transformer en fonctions neutres", "Vérifier présence dans flux ou MCD"],
      frustrationScore: 7.6,
      frustrationLevel: "Élevée",
      experience: ["Fatigue cognitive", "Stimulante intellectuellement"],
      painPoints: ["Manque de visualisation globale", "Activités redondantes"],
      opportunities: ["Vérification qualité automatique", "Premier jet matrice couverture"]
    },
    {
      title: "6. Processus BPMN",
      actions: ["Identifier contexte/acteurs", "Formaliser le BPMN"],
      thoughts: ["Couverture réelle des US ?", "Activités inutiles ?"],
      frustrationScore: 8,
      frustrationLevel: "Élevée",
      experience: ["Vérifications manuelles longues", "Outils cloisonnés"],
      painPoints: ["Vision fragmentée", "Liens US non automatisés"],
      opportunities: ["Contrôle auto couverture US", "Visualisation consolidée"]
    },
    {
      title: "7. Formalisation données",
      actions: ["Dictionnaire données", "Modélisation MCD"],
      thoughts: ["Données bien organisées ?", "Respect de la logique BPMN ?"],
      frustrationScore: 7,
      frustrationLevel: "Élevée",
      experience: ["Données omises", "MCD chronophage"],
      painPoints: ["Complexité inutile", "Incohérences MCD/BPMN"],
      opportunities: ["Lien auto Dict/MCD", "Alerte sur entités isolées"]
    }
  ]);

  const updateItem = (stepIndex, category, itemIndex, newValue) => {
    const newSteps = [...steps];
    newSteps[stepIndex][category][itemIndex] = newValue;
    setSteps(newSteps);
  };

  const addItem = (stepIndex, category) => {
    const newSteps = [...steps];
    newSteps[stepIndex][category].push("Nouvel élément...");
    setSteps(newSteps);
  };

  const removeItem = (stepIndex, category, itemIndex) => {
    const newSteps = [...steps];
    newSteps[stepIndex][category].splice(itemIndex, 1);
    setSteps(newSteps);
  };

  const handleScoreChange = (index, newScore) => {
    const updatedSteps = [...steps];
    updatedSteps[index].frustrationScore = newScore;
    if (newScore >= 8) updatedSteps[index].frustrationLevel = "Critique";
    else if (newScore >= 6) updatedSteps[index].frustrationLevel = "Significative";
    else if (newScore >= 4) updatedSteps[index].frustrationLevel = "Modérée";
    else updatedSteps[index].frustrationLevel = "Faible";
    setSteps(updatedSteps);
  };

  const EditableList = ({ stepIndex, category, items, icon: Icon, colorClass, bulletColor }) => (
    <div className="flex-1 p-4 border-r border-slate-100 last:border-r-0 group/col">
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="relative group/item flex items-start gap-2">
            <div className={`w-1.5 h-1.5 ${bulletColor} rounded-full mt-1.5 shrink-0`}></div>
            <textarea
              className={`w-full bg-transparent resize-none focus:outline-none focus:bg-white border-b border-transparent focus:border-slate-200 text-[11px] ${colorClass}`}
              value={item}
              rows={2}
              onChange={(e) => updateItem(stepIndex, category, idx, e.target.value)}
            />
            <button 
              onClick={() => removeItem(stepIndex, category, idx)}
              className="opacity-0 group-hover/item:opacity-100 p-1 text-rose-400 hover:text-rose-600 transition-opacity"
            >
              <X size={12} />
            </button>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => addItem(stepIndex, category)}
        className="mt-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 opacity-0 group-hover/col:opacity-100 transition-opacity uppercase tracking-wider"
      >
        <Plus size={12} /> Ajouter
      </button>
    </div>
  );

  return (
    <div className="p-4 bg-slate-100 min-h-screen font-['Inter']">
      <div className="max-w-[1920px] mx-auto bg-white shadow-2xl border border-slate-300">
        
        <div className="p-8 border-b-4 border-slate-900 bg-white flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-black tracking-tighter uppercase text-slate-900">
              Experience Map <span className="text-blue-600">Analyste SI</span>
            </h1>
            <p className="text-lg font-light text-slate-500 tracking-[0.4em] uppercase mt-1">Le parcours du Business Analyste</p>
          </div>
          <div className="text-right text-[10px] text-slate-400 uppercase font-bold tracking-widest">
            Mode Édition Actif <br/> Cliquez sur un texte pour modifier
          </div>
        </div>

        <div className="flex flex-col">
          {/* HEADER */}
          <div className="flex bg-slate-900 text-white sticky top-0 z-10">
            <div className="w-[60px] border-r border-slate-700 shrink-0"></div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-4 text-center border-r border-slate-700 last:border-r-0">
                <p className="text-[9px] font-black uppercase text-blue-400 mb-1">Phase 0{i+1}</p>
                <input 
                  className="bg-transparent text-center text-xs font-black uppercase tracking-tight w-full focus:outline-none focus:bg-slate-800 rounded"
                  value={step.title}
                  onChange={(e) => {
                    const s = [...steps];
                    s[i].title = e.target.value;
                    setSteps(s);
                  }}
                />
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex border-b border-slate-200 min-h-[150px]">
            <div className="w-[60px] bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <MousePointer2 className="w-4 h-4 text-blue-600" />
              <span className="text-[7px] font-black uppercase text-center">Actions</span>
            </div>
            {steps.map((step, i) => (
              <EditableList 
                key={i} stepIndex={i} category="actions" items={step.actions} 
                bulletColor="bg-blue-500" colorClass="text-slate-800 font-semibold"
              />
            ))}
          </div>

          {/* THOUGHTS */}
          <div className="flex border-b border-slate-200 min-h-[120px]">
            <div className="w-[60px] bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-[7px] font-black uppercase text-center">Pensées</span>
            </div>
            {steps.map((step, i) => (
              <EditableList 
                key={i} stepIndex={i} category="thoughts" items={step.thoughts} 
                bulletColor="bg-slate-300" colorClass="text-slate-500 italic"
              />
            ))}
          </div>

          {/* FRUSTRATION */}
          <div className="flex border-b border-slate-200">
            <div className="w-[60px] bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <Gauge className="w-4 h-4 text-rose-600" />
              <span className="text-[7px] font-black uppercase text-center text-rose-600">Stress</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0 flex flex-col justify-center gap-2 group">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter">
                  <span className={step.frustrationScore >= 7 ? "text-rose-600" : "text-slate-600"}>{step.frustrationLevel}</span>
                  <span className="text-slate-400">{step.frustrationScore}/10</span>
                </div>
                <div className="relative w-full h-4 flex items-center">
                  <div className="absolute w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-300 ${step.frustrationScore >= 7.5 ? "bg-rose-500" : step.frustrationScore >= 6 ? "bg-orange-500" : "bg-blue-500"}`}
                         style={{ width: `${step.frustrationScore * 10}%` }}></div>
                  </div>
                  <input type="range" min="0" max="10" step="0.1" value={step.frustrationScore}
                         onChange={(e) => handleScoreChange(i, parseFloat(e.target.value))}
                         className="absolute w-full h-2 opacity-0 group-hover:opacity-100 cursor-pointer accent-slate-900"/>
                </div>
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div className="flex border-b border-slate-200">
            <div className="w-[60px] bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <History className="w-4 h-4 text-blue-600" />
              <span className="text-[7px] font-black uppercase text-center">Vécu</span>
            </div>
            {steps.map((step, i) => (
              <EditableList 
                key={i} stepIndex={i} category="experience" items={step.experience} 
                bulletColor="bg-blue-300" colorClass="text-slate-700 font-medium"
              />
            ))}
          </div>

          {/* PAIN POINTS */}
          <div className="flex border-b border-slate-200">
            <div className="w-[60px] bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span className="text-[7px] font-black uppercase text-center text-rose-600">Points Noirs</span>
            </div>
            {steps.map((step, i) => (
              <EditableList 
                key={i} stepIndex={i} category="painPoints" items={step.painPoints} 
                bulletColor="bg-rose-400" colorClass="text-slate-700 font-medium"
              />
            ))}
          </div>

          {/* OPPORTUNITIES */}
          <div className="flex bg-blue-50/40">
            <div className="w-[60px] bg-blue-600 text-white border-r border-blue-800 flex flex-col items-center justify-center gap-1 shrink-0">
              <Zap className="w-4 h-4 fill-white" />
              <span className="text-[7px] font-black uppercase text-center">Pistes</span>
            </div>
            {steps.map((step, i) => (
              <EditableList 
                key={i} stepIndex={i} category="opportunities" items={step.opportunities} 
                bulletColor="bg-blue-600" colorClass="text-blue-900 font-bold"
              />
            ))}
          </div>
        </div>

        <div className="p-4 bg-slate-900 text-white text-center italic text-xs">
          "L’échange avec le métier n’est pas difficile, mais c’est tout le travail de structuration des données qui l’est."
        </div>
      </div>
    </div>
  );
};

export default ExperienceMapPage;