import React from 'react';
import { 
  MessageSquare, 
  Search, 
  FileText, 
  Smile, 
  Brain, 
  Zap, 
  AlertCircle,
  ArrowRight,
  MousePointer2,
  Database
} from 'lucide-react';

const ExperienceMapPage: React.FC = () => {
  const steps = [
    {
      title: "Étape 1 : Interview & Métier",
      actions: ["Préparer l'entretien", "Animer l'interview", "Prendre des notes structurées"],
      thoughts: [
        "Quels sont les vrais objectifs métier ?",
        "Comment ce besoin impacte les processus ?",
        "Est-ce que j’ai bien compris le besoin ?",
        "Ais-je posé toutes les bonnes questions ?"
      ],
      feelings: [
        { t: "Peur d'oublier", e: "😟" },
        { t: "Confiant (expérience)", e: "😎" },
        { t: "Méfiant (imprécisions)", e: "🤨" },
        { t: "Satisfait (réponses)", e: "😊" }
      ],
      experience: [
        "Interrompre le flux pour recentrer",
        "Le métier mélange besoins et solutions",
        "Difficile de structurer les infos collectées"
      ],
      opportunities: ["Aide à la reformulation", "Formalisation de l'interview", "Alertes infos manquantes"]
    },
    {
      title: "Étape 2 : Périmètre du SI",
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
      experience: [
        "Transmission non précisée (interprétation)",
        "Automatisme de découpage parfois faux",
        "Oublis par fatigue ou pression"
      ],
      opportunities: ["Rigueur Flux Physique vs Info", "Distinction nette acteur externe/interne"]
    },
    {
      title: "Étape 3 : Besoins & Fonctions",
      actions: ["Analyser matrices SWOT/PESTEL", "Vérifier cohérence MCD/BPMN", "Analyse audio/texte"],
      thoughts: [
        "Réponse au besoin ou tactique ?",
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
      experience: [
        "Données formulées différemment",
        "Données omises (fatigue)",
        "Erreurs ralentissant le projet"
      ],
      opportunities: ["Gain de temps/énergie", "Gain d'assurance", "Moins d'erreurs d'inattention"]
    },
    {
      title: "Étape 4 : Formalisation Processus",
      actions: ["Définir événements/acteurs", "Structurer couloirs BPMN", "Associer activités aux US", "Vérifier cohérence"],
      thoughts: [
        "Toutes les US sont couvertes ?",
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
      experience: [
        "Vérifications manuelles longues",
        "Outils cloisonnés (Bizagi, JMerise)",
        "Fragmentation de la vision",
        "Liens US/Exigences non automatisés"
      ],
      opportunities: ["Gain de temps contrôle", "Vision 360° du cadre de travail", "Fiabilité pré-développement"]
    },
    {
      title: "Étape 5 : Formaliser les données",
      actions: ["Identification données métier", "Dictionnaire des données", "Structuration entités", "Modélisation MCD"],
      thoughts: [
        "Données identifiées correctement ?",
        "Entités pertinentes et organisées ?",
        "Concordance Dico vs MCD ?",
        "MCD respecte-t-il le BPMN ?",
        "MCD simple et compréhensible ?"
      ],
      feelings: [
        { t: "Peur (oubli données)", e: "😰" },
        { t: "Stress (réalisation MCD)", e: "😰" },
        { t: "Lassitude (outils non opti)", e: "😴" },
        { t: "Plaisir (reflète BPMN)", e: "🥰" }
      ],
      experience: [
        "Données omises (fatigue/temps)",
        "MCD chronophage si gros volume",
        "Complexité inutile du modèle"
      ],
      opportunities: [
        "Concordance Acteurs/Entités/BPMN",
        "Alerte oublis (attributs faibles)",
        "Unicité Dictionnaire et MCD"
      ]
    }
  ];

  return (
    <div className="p-8 bg-slate-100 min-h-screen font-['Inter']">
      <div className="max-w-[1800px] mx-auto bg-white shadow-2xl border border-slate-300">
        
        {/* HEADER */}
        <div className="p-10 border-b-4 border-slate-900 flex justify-between items-center bg-white">
          <div>
            <h1 className="text-6xl font-black tracking-tighter uppercase text-slate-900">
              Experience Map <span className="text-blue-600">Analyste SI</span>
            </h1>
            <p className="text-xl font-light text-slate-500 tracking-[0.4em] uppercase mt-2">Parcours de Conception de Système d'Information</p>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-sm text-right">
            <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">Type de document</p>
            <p className="font-bold text-lg">Diagnostic de Flux & Données</p>
          </div>
        </div>

        {/* GRID TABLE */}
        <div className="flex flex-col overflow-x-auto">
          {/* HEADER STEPS */}
          <div className="grid grid-cols-6 bg-slate-900 text-white sticky top-0 z-10">
            <div className="p-6 border-r border-slate-700 flex items-center justify-center italic text-[10px] text-slate-400 uppercase tracking-widest">Étapes du cycle</div>
            {steps.map((step, i) => (
              <div key={i} className="p-6 text-center border-r border-slate-700">
                <p className="text-[10px] font-black uppercase text-blue-400 tracking-widest mb-1">Phase 0{i+1}</p>
                <p className="text-xs font-bold uppercase">{step.title}</p>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="grid grid-cols-6 border-b border-slate-200">
            <div className="p-6 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-2">
              <MousePointer2 className="w-6 h-6 text-blue-600" />
              <span className="text-[9px] font-black uppercase tracking-widest">Actions</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-5 border-r border-slate-100">
                <ul className="space-y-2">
                  {step.actions.map((a, j) => (
                    <li key={j} className="text-[10px] text-slate-700 flex items-start gap-2 leading-tight">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mt-1 shrink-0"></div> {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* THOUGHTS */}
          <div className="grid grid-cols-6 border-b border-slate-200">
            <div className="p-6 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-2">
              <Brain className="w-6 h-6 text-blue-600" />
              <span className="text-[9px] font-black uppercase tracking-widest">Pensées</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-5 border-r border-slate-100">
                <ul className="space-y-2">
                  {step.thoughts.map((t, j) => (
                    <li key={j} className="text-[10px] text-slate-500 italic bg-slate-50 p-2 border-l-2 border-slate-200 leading-tight">"{t}"</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FEELINGS */}
          <div className="grid grid-cols-6 border-b border-slate-200">
            <div className="p-6 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-2">
              <Smile className="w-6 h-6 text-blue-600" />
              <span className="text-[9px] font-black uppercase tracking-widest">Sentiments</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-5 border-r border-slate-100 flex flex-wrap gap-2 content-start">
                {step.feelings.map((f, j) => (
                  <div key={j} className="flex items-center gap-1.5 bg-white border border-slate-200 px-2 py-1 rounded-full text-[9px] font-bold text-slate-600 shadow-sm">
                    <span className="text-sm">{f.e}</span> {f.t}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div className="grid grid-cols-6 border-b border-slate-200">
            <div className="p-6 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-2">
              <AlertCircle className="w-6 h-6 text-rose-600" />
              <span className="text-[9px] font-black uppercase tracking-widest text-rose-600">Douleurs</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-5 border-r border-slate-100">
                <ul className="space-y-2">
                  {step.experience.map((e, j) => (
                    <li key={j} className="text-[10px] text-slate-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1 shrink-0"></div> {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* OPPORTUNITIES */}
          <div className="grid grid-cols-6 bg-blue-50/30">
            <div className="p-6 bg-blue-600 text-white border-r border-blue-800 flex flex-col items-center justify-center gap-2">
              <Zap className="w-6 h-6 fill-white" />
              <span className="text-[9px] font-black uppercase tracking-widest">Opportunités</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-5 border-r border-blue-100">
                <ul className="space-y-2">
                  {step.opportunities.map((o, j) => (
                    <li key={j} className="text-[10px] font-bold text-blue-900 flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-blue-500" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="p-8 bg-slate-900 text-white flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em]">
          <div>Diagnostic Expert — Référentiel SI</div>
          <div className="flex gap-8">
            <span className="text-blue-400">Qualité Données</span>
            <span className="text-blue-400">Standardisation MCD</span>
            <span className="text-blue-400">Alignement BPMN</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ExperienceMapPage;