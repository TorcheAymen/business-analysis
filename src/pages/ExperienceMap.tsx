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

    /* ===================================================== */
    /* 1 — Interview métier (INCHANGÉ) */
    /* ===================================================== */
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

    /* ===================================================== */
    /* 2 — Périmètre SI (INCHANGÉ) */
    /* ===================================================== */
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

    /* ===================================================== */
    /* 3 — ELICITATION (NOUVELLE ÉTAPE) */
    /* ===================================================== */
    {
      title: "3. Elicitation",
      actions: [
        "Préparer les ateliers (entretiens, workshop, enquêtes)",
        "Identifier les parties prenantes concernées",
        "Définir les objectifs",
        "Elaborer un guide structuré",
        "Conduire les entretiens",
        "Poser des questions ciblées sur les processus.",
        "Reformuler les propos pour validation en direct.",
        "Identifier les verbes d’actions liés au Système Informatisé vs. au système opérant",
        "Noter / Enregistrer les échanges",
        "Analyser les propos recueillis",
        "Extraire et classer les éléments exprimant un besoin, une contrainte, une règle métier, un ressenti.",
        "Détecter les doublons, contradictions et éléments flous",
        "Vérifier la pertinence vis à vis du périmètre du SI."
      ],
      thoughts: [
        "Est-ce que j’ai bien couvert tous les sujets ?",
        "Ai-je oublié une règle métier importante ?",
        "Est-ce que j’interprète correctement ce que le métier veut dire ?"
      ],
      frustrationScore: 6.5,
      frustrationLevel: "Significative",
      experience: [
        "Agréable à exécuter",
        "Préparation et prise de note lourde (Risque d’oubli)",
        "Pression car étape importante, tout ce qui sera implémenté en dépend."
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
        "Un outil de retranscription et d’analyse (pré-remplissage du livrable)",
        "éliminer la prise de note manuelle (se concentrer sur l’échange)",
        "classer automatiquement les propos par catégorie",
        "vérifier que le propos reste dans le cadre du SI",
        "Un outil de structure de l’interview"
      ]
    },

    /* ===================================================== */
    /* 4 — FORMALISATION DES BESOINS */
    /* ===================================================== */
    {
      title: "4. Formalisation des besoins",
      actions: [
        "Reprendre les éléments issus de l’élicitation (trié au préalable)",
        "Regrouper les besoins similaires en groupe de besoin",
        "Regrouper les règles métiers, les contraintes, les ressentis",
        "Identifier pour chaque besoin/groupe de besoin le ou les acteurs concernés",
        "Formaliser les users stories ( Méthode des 3 C )",
        "Vérifier les critères INVEST sur les US",
        "S’assurer de la cohérence du besoin au sein du Système d’Information"
      ],
      thoughts: [
        "Est-ce que ce besoin a un acteur ?",
        "Est-ce que ce besoin manipule une donnée ?",
        "Est-ce que ce besoin a une place dans un flux ou un processus ?"
      ],
      frustrationScore: 5,
      frustrationLevel: "Modérée",
      experience: [
        "Plus légère que l’élicitation",
        "Responsabilité forte : livrable implémenté sous peu"
      ],
      painPoints: [
        "Manque de vision globale et transverse du projet",
        "vérifications manuelles portent un haut pourcentage d’erreur"
      ],
      opportunities: [
        "Un outil qui structure la formalisation des User Stories",
        "Un outil qui regroupe les User Stories fortement similaires",
        "Un outil qui vérifie la modélisabilité d’un besoin",
        "Un outil qui alerte sur les incohérences fonctionnelles",
        "Un outil qui assure la traçabilité"
      ]
    },

    /* ===================================================== */
    /* 5 — TRADUCTION EN EXIGENCES / FONCTIONS */
    /* ===================================================== */
    {
      title: "5. Traduction en exigences / fonctions",
      actions: [
        "lecture attentive des users stories",
        "Identification des fonctions",
        "Distinction des fonctions externes et internes",
        "Formalisation des traitements (verbe à l’infinitif + complément)",
        "Extraction des flux d’informations",
        "Vérification de la traçabilité avec une matrice de couverture"
      ],
      thoughts: [
        "Est-ce que mes fonctions sont cohérentes globalement ?",
        "Est-ce que je couvre tout le processus métier ?"
      ],
      frustrationScore: 7.6,
      frustrationLevel: "Élevée",
      experience: [
        "Fatigue cognitive",
        "Stimulante intellectuellement",
        "Responsabilité forte",
        "Sentiment de restructuration"
      ],
      painPoints: [
        "Manque de visualisation globale",
        "Activité redondantes et fatiguantes"
      ],
      opportunities: [
        "Une vérification automatique de la qualité des fonctions dégagées",
        "Premier jet automatique d’une matrice de couverture"
      ]
    }

  ];

  return <div />;
};

export default ExperienceMapPage;
