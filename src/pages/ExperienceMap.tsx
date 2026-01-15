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
  Layout,
  Target
} from 'lucide-react';

const ExperienceMapPage: React.FC = () => {
  const steps = [
    {
      title: "Étape 1 : Interview & Métier",
      actions: ["Préparer l'entretien", "Animer l'interview", "Prendre des notes structurées"],
      thoughts: [
        "Quels sont les vrais objectifs métier derrière cette demande ?",
        "Comment ce besoin va impacter les processus et les données ?",
        "Est-ce que j’ai bien compris le besoin ?",
        "Est-ce que j’ai posé toutes les bonnes questions ?"
      ],
      feelings: [
        { t: "Peur d'oublier", e: "😟" },
        { t: "Confiant (expérience)", e: "😎" },
        { t: "Méfiant (imprécisions)", e: "🤨" },
        { t: "Satisfait (réponses claires)", e: "😊" }
      ],
      experience: [
        "Doit interrompre le flux pour recentrer sur les objectifs réels",
        "Le métier mélange besoins, solutions et contraintes",
        "Difficile de structurer les informations collectées"
      ],
      opportunities: [
        "Aide à la reformulation et validation des besoins",
        "Outil pour formaliser l'interview",
        "Alertes sur les informations manquantes",
        "Guidage étape par étape"
      ]
    },
    {
      title: "Étape 2 : Périmètre du SI",
      actions: ["Délimiter le domaine d'étude", "Recenser les acteurs externes", "Identifier les flux d'informations", "Construire le MFC", "Valider la nature des échanges"],
      thoughts: [
        "Est-ce qu'on a oublié un acteur caché ?",
        "L'info, elle rentre ou elle sort ?",
        "Canal : mail, téléphone ou autre ?",
        "Acteur interne ou externe au SI ?",
        "Confusion utilisateur vs partenaire externe"
      ],
      feelings: [
        { t: "Peur (oubli acteur/flux)", e: "😰" },
        { t: "Doute (interne vs externe)", e: "🤔" },
        { t: "Frustré (interview incomplète)", e: "😤" }
      ],
      experience: [
        "Transmission des données non précisée (interprétation risquée)",
        "Automatisme de découpage par habitude parfois faux",
        "Oublis d'éléments par fatigue ou pression"
      ],
      opportunities: [
        "Gain de rigueur (Flux Physique vs Information)",
        "Distinction nette acteur externe / interne"
      ]
    },
    {
      title: "Étape 3 : Besoins & Fonctions",
      actions: ["Consulter le rendu interview (audio/texte)", "Analyser matrices SWOT et PESTEL", "Vérifier cohérence MCD, BPMN, Fonctions"],
      thoughts: [
        "Réponse au besoin utilisateur ou objectif tactique ?",
        "Présence dans les flux et porteuses de données ?",
        "Actionnable dans un processus ?",
        "Respect des contraintes et valeur ajoutée (KPI/OKR) ?"
      ],
      feelings: [
        { t: "Stress & Pression (Phase clé)", e: "😰" },
        { t: "Fatigue (tâches lourdes)", e: "😩" },
        { t: "Plaisir (cohérence)", e: "☺️" },
        { t: "Frustration (incohérence)", e: "🤬" }
      ],
      experience: [
        "Données formulées différemment selon les modèles",
        "Données omises lors de la lecture (fatigue/pression)",
        "Erreurs d'expérience ralentissant le projet plus tard"
      ],
      opportunities: [
        "Gain de temps et d'énergie",
        "Gain d'assurance",
        "Moins d'erreurs d'inattention"
      ]
    },
    {
      title: "Étape 4 : Formalisation Processus",
      actions: ["Définir événements, activités et acteurs", "Structurer couloirs BPMN (rôles SI)", "Associer activités aux US et exigences", "Vérifier cohérence globale"],
      thoughts: [
        "Toutes les US sont-elles réellement couvertes ?",
        "Activités inutiles ou non justifiées ?",
        "Incohérence non détectée ?",
        "Comment fiabiliser sans contrôles manuels ?"
      ],
      feelings: [
        { t: "Exigent (précision)", e: "🧐" },
        { t: "Frustré (outils cloisonnés)", e: "😤" },
        { t: "Soulagé", e: "😌" },
        { t: "Espoir (couverture)", e: "🤞" },
        { t: "Inquiet (vigilance)", e: "😟" }
      ],
      experience: [
        "Vérifications manuelles longues et risquées",
        "Outils performants mais cloisonnés (Bizagi, JMerise...)",
        "Manque de vision consolidée (fragmentation)",
        "Liens US/Exigences non automatisés"
      ],
      opportunities: [
        "Gain de temps (contrôle/vérification)",
        "Structuration du cadre de travail (vision 360°)",
        "Meilleure fiabilité avant développement"
      ]
    }
  ];

  return (
    <div className="p-8 bg-slate-100 min-h-screen font-['Inter']">
      <div className="max-w-[1600px] mx-auto bg-white shadow-2xl border border-slate-300">
        
        {/* HEADER */}
        <div className="p-10 border-b-4 border-slate-900 flex justify-between items-center">
          <div>
            <h1 className="text-6xl font-black tracking-tighter uppercase text-slate-900">
              Experience Map <span className="text-blue-600">Analyste SI</span>
            </h1>
            <p className="text-xl font-light text-slate-500 tracking-[0.4em] uppercase mt-2">Cycle de conception fonctionnelle</p>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-sm">
            <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">Format</p>
            <p className="font-bold text-lg">Canevas de Diagnostic</p>
          </div>
        </div>

        {/* GRID TABLE */}
        <div className="flex flex-col">
          {/* HEADER STEPS */}
          <div className="grid grid-cols-5 bg-slate-900 text-white sticky top-0 z-10">
            <div className="p-6 border-r border-slate-700 flex items-center justify-center italic text-xs text-slate-400">Parcours Analyste</div>
            {steps.map((step, i) => (
              <div key={i} className="p-6 text-center border-r border-slate-700">
                <p className="text-[10px] font-black uppercase text-blue-400 tracking-widest">Phase 0{i+1}</p>
                <p className="text-sm font-bold uppercase tracking-tight">{step.title}</p>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="grid grid-cols-5 border-b border-slate-200">
            <div className="p-6 bg-slate-50 border-r border-slate-300 flex items-center gap-3">
              <MousePointer2 className="w-5 h-5 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest">Actions</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-6 border-r border-slate-100">
                <ul className="space-y-2">
                  {step.actions.map((a, j) => (
                    <li key={j} className="text-[11px] text-slate-700 flex items-center gap-2 font-medium">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div> {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* THOUGHTS */}
          <div className="grid grid-cols-5 border-b border-slate-200">
            <div className="p-6 bg-slate-50 border-r border-slate-300 flex items-center gap-3">
              <Brain className="w-5 h-5 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest">Pensées</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-6 border-r border-slate-100">
                <ul className="space-y-3">
                  {step.thoughts.map((t, j) => (
                    <li key={j} className="text-[10px] text-slate-500 italic bg-slate-50 p-2 border-l border-slate-200 leading-tight">"{t}"</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FEELINGS */}
          <div className="grid grid-cols-5 border-b border-slate-200">
            <div className="p-6 bg-slate-50 border-r border-slate-300 flex items-center gap-3">
              <Smile className="w-5 h-5 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest">Sentiments</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-6 border-r border-slate-100 flex flex-wrap gap-2">
                {step.feelings.map((f, j) => (
                  <div key={j} className="flex items-center gap-1.5 bg-white border border-slate-200 px-2 py-1 rounded-full text-[9px] font-bold text-slate-600 shadow-sm uppercase tracking-tighter">
                    <span className="text-xs">{f.e}</span> {f.t}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <div className="grid grid-cols-5 border-b border-slate-200">
            <div className="p-6 bg-slate-50 border-r border-slate-300 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Points de douleur</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-6 border-r border-slate-100">
                <ul className="space-y-3">
                  {step.experience.map((e, j) => (
                    <li key={j} className="text-[11px] text-slate-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1 shrink-0"></div> {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* OPPORTUNITIES */}
          <div className="grid grid-cols-5 bg-blue-50/30">
            <div className="p-6 bg-blue-600 text-white border-r border-blue-800 flex items-center gap-3">
              <Zap className="w-5 h-5 fill-white" />
              <span className="text-[10px] font-black uppercase tracking-widest">Opportunités</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="p-6 border-r border-blue-100">
                <ul className="space-y-2">
                  {step.opportunities.map((o, j) => (
                    <li key={j} className="text-[10px] font-black text-blue-900 flex items-center gap-2 uppercase tracking-tight">
                      <ArrowRight className="w-3 h-3" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="p-8 bg-slate-900 text-white flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em]">
          <div>Méthodologie MIAGE — Diagnostic SI</div>
          <div className="flex gap-8">
            <span className="text-blue-400">Fiabilité</span>
            <span className="text-blue-400">Cohérence</span>
            <span className="text-blue-400">Performance</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ExperienceMapPage;