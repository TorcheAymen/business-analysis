import React from 'react';
import { 
  Smile, 
  Brain, 
  Zap, 
  AlertCircle,
  ArrowRight,
  MousePointer2,
  History,
  Gauge
} from 'lucide-react';

const ExperienceMapPage: React.FC = () => {
  const steps = [
    {
      title: "1. Interviewer le Métier",
      actions: ["Préparer l'entretien", "Animer l'interview", "Prendre des notes structurées"],
      thoughts: [
        "Quels sont les vrais objectifs métier derrière cette demande ?",
        "Comment ce besoin va impacter les processus et les données ?",
        "Est-ce que j’ai bien compris le besoin ?",
        "Est-ce que j’ai posé toutes les bonnes questions ?"
      ],
      frustrationScore: 4,
      frustrationLevel: "Modérée",
      experience: [
        "Recentrer le flux sur les objectifs réels",
        "Mélange besoins/solutions du métier",
        "Difficulté à structurer à chaud"
      ],
      painPoints: [
        "Manque d'outils pour guider l'entretien",
        "Difficulté de structuration",
        "Oublis possible (liés aux 2 points précédents)"
      ],
      opportunities: [
        "Guidage dynamique de l'entretien avec rappels de points à couvrir",
        "Système de reformulation automatique pour valider la compréhension",
        "Détection automatique d'infos manquantes dans les notes"
      ]
    },
    {
      title: "2. Cerner le Périmètre du SI",
      actions: ["Délimiter le domaine d'étude", "Identifier les Acteurs", "Cartographier le flux d'informations (MFC)"],
      thoughts: [
        "Est-ce qu'on a oublié un acteur caché ?",
        "L'info, elle rentre ou elle sort ?",
        "Canal utilisé (mail, téléphone ou autre) ?",
        "Est-ce que cet acteur est interne ou externe à mon SI ?",
        "Est-ce que je ne confonds pas un utilisateur avec un partenaire externe ?"
      ],
      frustrationScore: 6,
      frustrationLevel: "Significative",
      experience: [
        "Mode de transmission imprécis",
        "Automatisme de découpage erroné",
        "Oublis par fatigue ou pression"
      ],
      painPoints: [
        "Confusion entre flux physique/informationnel",
        "Erreurs d'interprétation de l'Interview",
        "Manque de vision transverse",
        "Oublis par fatigue"
      ],
      opportunities: [
        "Suggestions d'acteurs et de flux selon contexte projet",
        "Aide à la distinction entre acteur interne/externe et flux info/physique",
        "Validation automatique de la couverture du périmètre SI"
      ]
    },
    {
      title: "3. Formaliser les besoins et vérifier leur cohérence fonctionnelle",
      actions: ["Etudier l'interview, extraire les besoins.", "aligner les fonctionnalités sur les exigences", "Vérifier la cohérence MFC/MCD/BPMN existants"],
      thoughts: [
        "Est-ce que les fonctionnalités répondent à un besoin utilisateur ou tactique ?",
        "Mes fonctionnalités sont-elles présentes dans les flux et porteuses de données ?",
        "Sont-elles actionnables dans un processus métier ?",
        "Est-ce que cette fonction apporte de la valeur ajoutée réelle (KPI/OKR) ?"
      ],
      frustrationScore: 9,
      frustrationLevel: "Critique",
      experience: [
        "Données formulées différemment",
        "Omissions par fatigue/pression",
        "Erreurs d'expérience (ralentissement)"
      ],
      painPoints: [
        "Manque de vision globale",
        "Incohérences non-détectées",
        "Données omises (pression ou mauvaise formulation)",
        "Etape clé : Stress, fatigue, charge mentale",
        "Erreurs ralentissant le projet"
      ],
      opportunities: [
        "Vérification automatique de la couverture des besoins dans les modèles",
        "Alertes sur les fonctions orphelines ou mal reliées",
        "Aide à la formalisation structurée des exigences et cas d'usage"
      ]
    },
    {
      title: "4. Cartographier les processus BPMN",
      actions: ["Identifier le contexte (Evenement, Acteurs) ", "Considérer les US et les exigences", "Formaliser le BPMN", ],
      thoughts: [
        "Est-ce que toutes les User Stories sont réellement couvertes par les processus ?",
        "Certaines activités sont-elles inutiles ou non justifiées ?",
        "Existe-t-il une incohérence que je n’ai pas encore détectée ?",
        "Comment fiabiliser mon analyse sans multiplier les contrôles manuels ?"
      ],
      frustrationScore: 8,
      frustrationLevel: "Élevée",
      experience: [
        "Vérifications manuelles longues",
        "Outils cloisonnés (Bizagi/Merise)",
        "Manque de vision consolidée",
        "Liens US/Exigences non automatisés"
      ],
      painPoints: [
        "Vérifications manuelles longues",
        "Outils cloisonnés",
        "Vision fragmentée",
        "Liens US non automatisés"
      ],
      opportunities: [
        "Contrôle automatique de la couverture des user stories par les activités BPMN",
        "Détection des processus incomplets ou mal reliés aux exigences",
        "Visualisation consolidée BPMN + exigences + US"
      ]
    },
    {
      title: "5. Formaliser les données",
      actions: ["Dictionnaire données", "Structuration entités", "Modélisation MCD"],
      thoughts: [
        "Toutes les données ont-elles été correctement identifiées ?",
        "Sont-elles bien organisées dans des entités pertinentes ?",
        "Les données du dictionnaire sont-elles en concordance avec le MCD ?",
        "Mon MCD respecte-t-il la logique du BPMN ?",
        "Mon MCD est-il simple, clair et facilement compréhensible ?"
      ],
      frustrationScore: 7,
      frustrationLevel: "Élevée",
      experience: [
        "Données omises (temps)",
        "Chronophagie du MCD complexe",
        "Complexité inutile"
      ],
      painPoints: [
        "Données omises",
        "MCD chronophage",
        "Complexité inutile"
      ],
      opportunities: [
        "Lien automatique entre dictionnaire de données et MCD",
        "Alerte sur entités isolées, attributs faibles ou mal définis",
        "Vérification de cohérence MCD ↔ BPMN ↔ Exigences"
      ]
    }
  ];

  return (
    <div className="p-4 bg-slate-100 min-h-screen font-['Inter']">
      <div className="max-w-[1920px] mx-auto bg-white shadow-2xl border border-slate-300">
        
        <div className="p-8 border-b-4 border-slate-900 bg-white">
          <h1 className="text-5xl font-black tracking-tighter uppercase text-slate-900">
            Experience Map <span className="text-blue-600">Analyste SI</span>
          </h1>
          <p className="text-lg font-light text-slate-500 tracking-[0.4em] uppercase mt-1">Le parcours du Business Analyste</p>
        </div>

        <div className="flex flex-col">
          {/* HEADER */}
          <div className="flex bg-slate-900 text-white sticky top-0 z-10">
            <div className="w-[8%] p-4 border-r border-slate-700 flex items-center justify-center italic text-[9px] text-slate-500 uppercase tracking-widest text-center">Étapes</div>
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

          {/* FRUSTRATION GAUGE */}
          <div className="flex border-b border-slate-200">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <Gauge className="w-5 h-5 text-rose-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none text-rose-600">Niveau de Frustration</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0 flex flex-col justify-center gap-2">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter">
                  <span className={step.frustrationScore >= 8 ? "text-rose-600" : "text-slate-600"}>
                    {step.frustrationLevel}
                  </span>
                  <span className="text-slate-400">{step.frustrationScore}/10</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      step.frustrationScore >= 8 ? "bg-rose-500" : 
                      step.frustrationScore >= 6 ? "bg-orange-500" : "bg-blue-500"
                    }`}
                    style={{ width: `${step.frustrationScore * 10}%` }}
                  ></div>
                </div>
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
              <span className="text-[8px] font-black uppercase text-center leading-none text-rose-600">Douleurs</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0">
                <ul className="space-y-2">
                  {step.painPoints.map((p, j) => (
                    <li key={j} className="text-[12px] text-slate-700 font-medium flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></div> {p}
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