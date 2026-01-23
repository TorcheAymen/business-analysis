import React, { useState } from 'react';
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
  // Initialisation du state avec tes données structurées
  const [steps, setSteps] = useState([
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
      title: "3. Identification des besoins | Elicitation",
      actions: ["Préparer les ateliers (entretiens, workshop, enquêtes)", "Identifier les parties prenantes concernées (vérifiable)", "Définir les objectifs", "Elaborer un guide structuré (implémentable)", "Conduire les entretiens", "Poser des questions ciblées sur les processus", "Reformuler les propos pour validation en direct", "Identifier les verbes d’actions liés au Système Informatisé vs. au système opérant", "Noter / Enregistrer les échanges", "Analyser les propos recueillis"],
      thoughts: [
        "Je dois discuter directement avec les parties prenantes du projet",
        "Je recherche tous sujets pouvant faire partie directement ou indirectement du périmètre",
        "Je dois expérimenter par moi-même les processus, tâches, métiers pour mieux en percevoir les enjeux"
      ],
      frustrationScore: 6.5,
      frustrationLevel: "Significative",
      experience: [
        "Agréable à exécuter",
        "Préparation et prise de note lourde (Risque d’oubli)",
        "Pression car étape importante, tout ce qui sera implémenté en dépend"
      ],
      painPoints: [
        "communication et interprétation",
        "lourdeur : les notes prises doivent être ré-étudiées (Double travail)",
        "structure : bien aborder les besoins, règles, habitudes, ressenti",
        "risque invisible (oubli, erreurs, mauvaise interprétation)",
        "manque de visibilité sur l’impact des infos collectés sur les modèles futurs"
      ],
      opportunities: [
        "Un outil de structuration des données (modèle de livrable)",
        "Un outil de retranscription et d’analyse (pré-remplissage du livrable) : éliminer la prise de note manuelle, classer automatiquement les propos, vérifier le cadre du SI",
        "Un outil de structure de l’interview (s’assurer au moins que l’interview couvre certains points)"
      ]
    },
    {
      title: "4. Formalisation des besoins",
      actions: ["Reprendre les éléments issus de l’élicitation", "Regrouper les besoins similaires en groupe de besoin", "Identifier pour chaque besoin/groupe de besoin l’acteur concerné", "Formaliser les users stories (Méthode des 3 C)", "Vérifier les critères INVEST sur les US", "S’assurer de la cohérence du besoin au sein du SI"],
      thoughts: [
        "Formaliser le besoin de manière claire, structurée et compréhensible par les autres",
        "Est-ce que ce besoin correspond bien à un processus métier ?",
        "Est-ce qu'il est rattaché à au moins un acteur ?"
      ],
      frustrationScore: 5,
      frustrationLevel: "Modérée",
      experience: [
        "Plus légère que l’élicitation",
        "Responsabilité forte : livrable implémenté sous peu"
      ],
      painPoints: [
        "Le besoin pourrait ne correspondre à aucun processus métier",
        "Le besoin pourrait n’être lié à aucun acteur",
        "Le besoin pourrait ne manipuler, stocker, transformer aucune donnée",
        "Manque de vision globale et transverse",
        "Les vérifications manuelles portent un haut pourcentage d’erreur"
      ],
      opportunities: [
        "Outil qui structure la formalisation des User Stories (acteur, action, flux, donnée, règles)",
        "Outil qui regroupe les User Stories fortement similaires (réduire les doublons)",
        "Outil qui vérifie la “modélisabilité” d’un besoin",
        "Outil qui alerte sur les incohérences fonctionnelles et assure la traçabilité"
      ]
    },
    {
      title: "5. Traduction du besoin en exigences",
      actions: ["Lecture attentive des users stories", "Identification des fonctions", "Distinction des fonctions externes et internes", "Vérification que les fonctions ne brident pas la solution", "Formalisation (verbe + complément)", "Vérification de la traçabilité (matrice de couverture)"],
      thoughts: [
        "Transformer les besoins formalisés en fonctions attendues du système, neutres, complètes et traçables",
        "Si une information est nécessaire pour valider une US, elle doit exister soit dans un flux, soit dans le MCD"
      ],
      frustrationScore: 7.6,
      frustrationLevel: "Élevée",
      experience: [
        "Fatigue cognitive",
        "Stimulante intellectuellement"
      ],
      painPoints: [
        "Manque de visualisation globale (garantir la cohérence)",
        "Activité redondantes et fatiguantes",
        "Responsabilité forte",
        "Sentiment de restructuration"
      ],
      opportunities: [
        "Vérification automatique de la qualité des fonctions (liens acteur/US, non-contradiction)",
        "Premier jet automatique d’une matrice de couverture"
      ]
    },
    {
      title: "6. Cartographier les processus BPMN",
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
      title: "7. Formaliser les données",
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
  ]);

  // Fonction pour mettre à jour le score et le label dynamiquement
  const handleScoreChange = (index: number, newScore: number) => {
    const updatedSteps = [...steps];
    updatedSteps[index].frustrationScore = newScore;
    
    // Mise à jour automatique du label selon le score
    if (newScore >= 8) updatedSteps[index].frustrationLevel = "Critique";
    else if (newScore >= 6) updatedSteps[index].frustrationLevel = "Significative";
    else if (newScore >= 4) updatedSteps[index].frustrationLevel = "Modérée";
    else updatedSteps[index].frustrationLevel = "Faible";

    setSteps(updatedSteps);
  };

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
                <p className="text-sm font-black uppercase tracking-tight leading-tight">{step.title}</p>
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
                    <li key={j} className="text-[11px] font-semibold text-slate-800 flex items-start gap-2 leading-snug">
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
                    <li key={j} className="text-[10px] text-slate-600 italic bg-slate-50 p-2 border-l-2 border-slate-300">"{t}"</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FRUSTRATION GAUGE INTERACTIVE */}
          <div className="flex border-b border-slate-200">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <Gauge className="w-5 h-5 text-rose-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none text-rose-600">Frustration</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0 flex flex-col justify-center gap-2 group">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-tighter">
                  <span className={step.frustrationScore >= 7 ? "text-rose-600" : "text-slate-600"}>
                    {step.frustrationLevel}
                  </span>
                  <span className="text-slate-400">{step.frustrationScore}/10</span>
                </div>
                <div className="relative w-full h-4 flex items-center">
                  {/* Background Track */}
                  <div className="absolute w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        step.frustrationScore >= 7.5 ? "bg-rose-500" : 
                        step.frustrationScore >= 6 ? "bg-orange-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${step.frustrationScore * 10}%` }}
                    ></div>
                  </div>
                  {/* Hidden range input that appears on hover */}
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="0.1"
                    value={step.frustrationScore}
                    onChange={(e) => handleScoreChange(i, parseFloat(e.target.value))}
                    className="absolute w-full h-2 opacity-0 group-hover:opacity-100 cursor-pointer accent-slate-900 transition-opacity"
                  />
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
                    <li key={j} className="text-[11px] text-slate-700 font-medium flex items-start gap-2 bg-blue-50/20 p-2 rounded">
                      <ArrowRight className="w-3 h-3 text-blue-400 mt-1 shrink-0" /> {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* PAIN POINTS */}
          <div className="flex border-b border-slate-200">
            <div className="w-[8%] p-4 bg-slate-50 border-r border-slate-300 flex flex-col items-center justify-center gap-1 shrink-0">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              <span className="text-[8px] font-black uppercase text-center leading-none text-rose-600">Douleurs</span>
            </div>
            {steps.map((step, i) => (
              <div key={i} className="flex-1 p-6 border-r border-slate-100 last:border-r-0">
                <ul className="space-y-2">
                  {step.painPoints.map((p, j) => (
                    <li key={j} className="text-[11px] text-slate-700 font-medium flex items-start gap-2">
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
                    <li key={j} className="text-[11px] font-black text-blue-900 flex items-start gap-3">
                      <Zap className="w-3 h-3 text-blue-600 mt-1 shrink-0" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* PHRASE DE CONCLUSION */}
        <div className="p-6 bg-slate-900 text-white text-center italic text-sm">
          "L’échange avec le métier n’est pas difficile, mais c’est tout le travail de structuration des données qui l’est."
        </div>
      </div>
    </div>
  );
};

export default ExperienceMapPage;