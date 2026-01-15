import React from 'react';
import { 
  Smile, 
  Brain, 
  Zap, 
  AlertCircle,
  ArrowRight,
  MousePointer2,
  History
} from 'lucide-react';

const ExperienceMapPage: React.FC = () => {
  const steps = [
    {
      title: "1. Interview Métier",
      actions: ["Préparer l'entretien", "Animer l'interview", "Notes structurées"],
      thoughts: [
        "Vrais objectifs métier ?",
        "Impact processus & données ?",
        "Bien compris le besoin ?",
        "Bonnes questions posées ?"
      ],
      feelings: [
        { t: "Peur d'oublier", e: "😟" },
        { t: "Confiant", e: "😎" },
        { t: "Méfiant", e: "🤨" },
        { t: "Satisfait", e: "😊" }
      ],
      experience: [
        "Recentrer le flux sur les objectifs réels",
        "Mélange besoins/solutions du métier",
        "Difficulté à structurer à chaud"
      ],
      opportunities: ["Reformulation & Validation", "Formalisation interview", "Alertes infos manquantes"]
    },
    {
      title: "2. Périmètre du SI",
      actions: ["Domaine d'étude", "Acteurs externes", "Flux d'infos", "MFC", "Nature des échanges"],
      thoughts: [
        "Acteur caché ?",
        "Info rentre ou sort ?",
        "Canal utilisé ?",
        "Interne ou externe ?",
        "Confusion utilisateur vs partenaire"
      ],
      feelings: [
        { t: "Peur (oublis)", e: "😰" },
        { t: "Doute (ext/int)", e: "🤔" },
        { t: "Frustré", e: "😤" }
      ],
      experience: [
        "Mode de transmission imprécis",
        "Automatisme de découpage erroné",
        "Oublis par fatigue ou pression"
      ],
      opportunities: ["Rigueur Flux Physique vs Info", "Distinction Acteur Ext/Int"]
    },
    {
      title: "3. Besoins & Fonctions",
      actions: ["Audio/Texte interview", "Matrices SWOT/PESTEL", "Cohérence MCD/BPMN"],
      thoughts: [
        "Besoin ou tactique ?",
        "Présent dans les flux ?",
        "Actionnable processus ?",
        "Valeur ajoutée (KPI) ?"
      ],
      feelings: [
        { t: "Stress (Phase clé)", e: "😰" },
        { t: "Fatigue (manuel)", e: "😩" },
        { t: "Plaisir", e: "☺️" },
        { t: "Frustration", e: "🤬" }
      ],
      experience: [
        "Données formulées différemment",
        "Omissions par fatigue/pression",
        "Erreurs d'expérience (ralentissement)"
      ],
      opportunities: ["Gain de temps & énergie", "Assurance augmentée", "Zéro inattention"]
    },
    {
      title: "4. Processus BPMN",
      actions: ["Événements/Acteurs", "Couloirs BPMN", "Liens US/Exigences", "Modélisation"],
      thoughts: [
        "Toutes les US couvertes ?",
        "Activités injustifiées ?",
        "Incohérence non détectée ?",
        "Fiabilisation auto ?"
      ],
      feelings: [
        { t: "Exigent", e: "🧐" },
        { t: "Frustré (cloisonnement)", e: "😤" },
        { t: "Soulagé", e: "😌" },
        { t: "Espoir", e: "🤞" }
      ],
      experience: [
        "Vérifications manuelles longues",
        "Outils cloisonnés (Bizagi/Merise)",
        "Manque de vision consolidée",
        "Liens US/Exigences non automatisés"
      ],
      opportunities: ["Gain de temps contrôle", "Cadre de travail structuré", "Fiabilité pré-dev"]
    },
    {
      title: "5. Formalisation Données",
      actions: ["Dictionnaire données", "Structuration entités", "Modélisation MCD"],
      thoughts: [
        "Données identifiées ?",
        "Entités pertinentes ?",
        "Dico vs MCD ?",
        "MCD respecte BPMN ?",
        "MCD simple ?"
      ],
      feelings: [
        { t: "Peur (oublis)", e: "😰" },
        { t: "Stress (MCD)", e: "😰" },
        { t: "Lassitude", e: "😴" },
        { t: "Plaisir", e: "🥰" }
      ],
      experience: [
        "Données omises (temps)",
        "Chronophagie du MCD complexe",
        "Complexité inutile"
      ],
      opportunities: ["Concordance Acteurs/BPMN", "Alertes attributs faibles", "Unicité Dico/MCD"]
    }
  ];

  return (
    <div className="p-4 bg-slate-100 min-h-screen font-['Inter']">
      <div className="max-w-[1920px] mx-auto bg-white shadow-2xl border border-slate-300">
        
        <div className="p-8 border-b-4 border-slate-900 bg-white">
          <h1 className="text-5xl font-black tracking-tighter uppercase text-slate-900">
            Experience Map <span className="text-blue-600">Analyste SI</span>
          </h1>
          <p className="text-lg font-light text-slate-500 tracking-[0.4em] uppercase mt-1">Diagnostic du Workflow de Conception</p>
        </div>

        <div className="flex flex-col">
          {/* HEADER */}
          <div className="flex bg-slate-900 text-white sticky top-0 z-10">
            <div className="w-[8%] p-4 border-r border-slate-700 flex items-center justify-center italic text-[9px] text-slate-500 uppercase tracking-widest">Étapes</div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-5 text-center border-r border-slate-700 last:border-r-0">
                <p className="text-[10px] font-black uppercase text-blue-400 mb-1">Phase 0{i+1}</p>
                <p className="text-sm font-black uppercase tracking-tight">{step.title}</p>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex border-b border-slate-200">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <MousePointer2 className="w-5 h-5 text-blue-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none">Actions</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0">
                <ul className="space-y-2">
                  {step.actions.map((a, j) => (
                    <li key={j} className="text-[12px] font-semibold text-slate-800 flex items-start gap-2 leading-snug">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div> {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* THOUGHTS */}
          <div className="flex border-b border-slate-200">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <Brain className="w-5 h-5 text-blue-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none">Pensées</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0">
                <ul className="space-y-3">
                  {step.thoughts.map((t, j) => (
                    <li key={j} className="text-[11px] text-slate-600 italic bg-slate-50 p-2.5 border-l-2 border-slate-300">"{t}"</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FEELINGS */}
          <div className="flex border-b border-slate-200">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <Smile className="w-5 h-5 text-blue-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none">Ressenti</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0 flex flex-wrap gap-2 content-start">
                {step.feelings.map((f, j) => (
                  <div key={j} className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full text-[11px] font-bold text-slate-700 shadow-sm">
                    <span className="text-base">{f.e}</span> {f.t}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div className="flex border-b border-slate-200 bg-white">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <History className="w-5 h-5 text-blue-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none">Expérience</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0">
                <ul className="space-y-3">
                  {step.experience.map((e, j) => (
                    <li key={j} className="text-[12px] text-slate-700 font-medium flex items-start gap-2 bg-blue-50/20 p-2 rounded">
                      <ArrowRight className="w-3 h-3 text-blue-400 mt-1 shrink-0" /> {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* PAIN POINTS (DOULEURS) */}
          <div className="flex border-b border-slate-200">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none text-rose-600">Freins</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0 italic text-[11px] text-slate-400">
                Risque d'incohérence élevé sur cette phase.
              </div>
            ))}
          </div>

          {/* OPPORTUNITIES */}
          <div className="flex bg-blue-50/40">
            <div className="w-[8%] p-4 bg-blue-600 text-white border-r border-blue-800 flex flex-col items-center justify-center gap-1 shrink-0">
              <Zap className="w-5 h-5 fill-white" />
              <span className="text-[8px] font-black uppercase text-center leading-none">Opportunités</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-blue-100 last:border-r-0">
                <ul className="space-y-3">
                  {step.opportunities.map((o, j) => (
                    <li key={j} className="text-[12px] font-black text-blue-900 flex items-center gap-3">
                      <Zap className="w-4 h-4 text-blue-600 shrink-0" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceMapPage;