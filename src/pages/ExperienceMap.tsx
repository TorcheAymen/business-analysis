import React from 'react';
import { 
  Smile, 
  Brain, 
  Zap, 
  AlertCircle,
  ArrowRight,
  MousePointer2
} from 'lucide-react';

const ExperienceMapPage: React.FC = () => {
  const steps = [
    {
      title: "1. Interview & Métier",
      actions: ["Préparer l'entretien", "Animer l'interview", "Notes structurées"],
      thoughts: [
        "Quels sont les vrais objectifs métier ?",
        "Impact sur les processus ?",
        "Est-ce que j’ai bien compris le besoin ?",
        "Ais-je posé les bonnes questions ?"
      ],
      feelings: [
        { t: "Peur d'oublier", e: "😟" },
        { t: "Confiant (expérience)", e: "😎" },
        { t: "Méfiant (imprécisions)", e: "🤨" },
        { t: "Satisfait (réponses)", e: "😊" }
      ],
      experience: ["Interrompre pour recentrer", "Mélange besoins/solutions", "Difficulté de structuration"],
      opportunities: ["Aide à la reformulation", "Formalisation interview", "Alertes infos manquantes"]
    },
    {
      title: "2. Périmètre du SI",
      actions: ["Délimiter le domaine", "Recenser les acteurs", "Identifier les flux", "Construire le MFC"],
      thoughts: [
        "Oubli d'un acteur caché ?",
        "L'info rentre ou sort ?",
        "Canal : mail, téléphone ?",
        "Acteur interne ou externe ?",
        "Confusion utilisateur vs partenaire"
      ],
      feelings: [
        { t: "Peur (oubli flux)", e: "😰" },
        { t: "Doute (interne/externe)", e: "🤔" },
        { t: "Frustré (incomplet)", e: "😤" }
      ],
      experience: ["Transmission non précisée", "Découpage 'par habitude'", "Oublis par fatigue"],
      opportunities: ["Rigueur Flux Physique vs Info", "Distinction nette acteur ext/int"]
    },
    {
      title: "3. Besoins & Fonctions",
      actions: ["Matrices SWOT/PESTEL", "Vérifier cohérence MCD/BPMN", "Analyse audio/texte"],
      thoughts: [
        "Besoin utilisateur vs tactique ?",
        "Présence dans les flux ?",
        "Actionnable dans un processus ?",
        "Valeur ajoutée (KPI/OKR) ?"
      ],
      feelings: [
        { t: "Stress (Phase clé)", e: "😰" },
        { t: "Fatigue (tâches lourdes)", e: "😩" },
        { t: "Plaisir (cohérence)", e: "☺️" },
        { t: "Frustration (incohérence)", e: "🤬" }
      ],
      experience: ["Données formulées différemment", "Données omises (pression)", "Erreurs ralentissant le projet"],
      opportunities: ["Gain de temps/énergie", "Gain d'assurance", "Zéro erreur d'inattention"]
    },
    {
      title: "4. Formaliser les processus",
      actions: ["Définir événements/acteurs", "Couloirs BPMN", "Lien US / Exigences", "Vérifier cohérence"],
      thoughts: [
        "Toutes les US couvertes ?",
        "Activités inutiles ?",
        "Incohérence non détectée ?",
        "Comment fiabiliser sans manuel ?"
      ],
      feelings: [
        { t: "Exigent (précision)", e: "🧐" },
        { t: "Frustré (cloisonnement)", e: "😤" },
        { t: "Soulagé", e: "😌" },
        { t: "Espoir (couverture)", e: "🤞" }
      ],
      experience: ["Vérifications manuelles longues", "Outils cloisonnés", "Vision fragmentée", "Liens US non automatisés"],
      opportunities: ["Gain de temps contrôle", "Vision 360° du cadre", "Fiabilité pré-développement"]
    },
    {
      title: "5. Formaliser les données",
      actions: ["Identification données métier", "Dictionnaire des données", "Structuration entités", "Modélisation MCD"],
      thoughts: [
        "Données identifiées correctly ?",
        "Entités pertinentes ?",
        "Concordance Dico vs MCD ?",
        "MCD respecte le BPMN ?",
        "MCD simple et clair ?"
      ],
      feelings: [
        { t: "Peur (oubli données)", e: "😰" },
        { t: "Stress (réalisation MCD)", e: "😰" },
        { t: "Lassitude (outils non opti)", e: "😴" },
        { t: "Plaisir (reflète BPMN)", e: "🥰" }
      ],
      experience: ["Données omises", "MCD chronophage", "Complexité inutile"],
      opportunities: ["Concordance Acteurs/BPMN", "Alerte oublis (attributs)", "Unicité Dico et MCD"]
    }
  ];

  return (
    <div className="p-4 bg-slate-100 min-h-screen font-['Inter']">
      <div className="max-w-[1920px] mx-auto bg-white shadow-2xl border border-slate-300">
        
        {/* HEADER SIMPLE */}
        <div className="p-8 border-b-4 border-slate-900 bg-white">
          <h1 className="text-5xl font-black tracking-tighter uppercase text-slate-900">
            Experience Map <span className="text-blue-600">Analyste SI</span>
          </h1>
          <p className="text-lg font-light text-slate-500 tracking-[0.4em] uppercase mt-1">Conception de Système d'Information</p>
        </div>

        {/* GRID TABLE */}
        <div className="flex flex-col overflow-x-hidden">
          {/* HEADER STEPS - Grid 14 cols (2 pour légende, 12 pour étapes / 5) */}
          <div className="flex bg-slate-900 text-white sticky top-0 z-10">
            <div className="w-[8%] p-4 border-r border-slate-700 flex items-center justify-center italic text-[9px] text-slate-500 uppercase">Étapes</div>
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
          <div className="flex border-b border-slate-200 bg-white">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <Brain className="w-5 h-5 text-blue-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none">Pensées</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0">
                <ul className="space-y-3">
                  {step.thoughts.map((t, j) => (
                    <li key={j} className="text-[11px] text-slate-600 italic bg-slate-50 p-2.5 border-l-2 border-slate-300 leading-normal">"{t}"</li>
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
                  <div key={j} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-[11px] font-bold text-slate-700 shadow-sm">
                    <span className="text-base">{f.e}</span> {f.t}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div className="flex border-b border-slate-200 bg-white">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none text-rose-600">Douleurs</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0">
                <ul className="space-y-3">
                  {step.experience.map((e, j) => (
                    <li key={j} className="text-[12px] text-slate-700 font-medium flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0"></div> {e}
                    </li>
                  ))}
                </ul>
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
                      <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="p-6 bg-slate-900 text-white flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <div>Diagnostic Expert — Référentiel Analyste SI</div>
          <div className="flex gap-10">
            <span className="text-blue-400">Cohérence Métier</span>
            <span className="text-blue-400">Intégrité Données</span>
            <span className="text-blue-400">Optimisation Flux</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ExperienceMapPage;