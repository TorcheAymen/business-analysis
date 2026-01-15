import React from 'react';
import {
  CheckCircle,
  XCircle,
  Hammer,
  Ban,
} from 'lucide-react';

const MatrixSection = ({ icon: Icon, title, items, color }: any) => (
  <div className="flex border-b border-slate-200">
    <div
      className={`w-[15%] p-4 border-r flex flex-col items-center justify-center gap-1 shrink-0 text-white ${color}`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-[9px] font-black uppercase text-center leading-none">
        {title}
      </span>
    </div>
    <div className="flex-1 p-6">
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li
            key={i}
            className="text-[13px] text-slate-800 font-medium flex items-start gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MatriceSolutionPage: React.FC = () => {
  const matrix = {
    is: [
      "Application web (ou déployable en local, pas mobile)",
      "Utilisée par des personnes ayant un minimum de connaissances en analyse fonctionnelle",
      "Architecture front-end + back-end",
      "Outil de contrôle de cohérence entre modèles d'analyse",
      "Assistance à la simplification et structuration d’interviews",
      "Aide à cerner le périmètre du SI à partir de données d’interview"
    ],
    isNot: [
      "Application mobile",
      "Destinée à des utilisateurs sans connaissance en analyse fonctionnelle",
      "Éditeur ou logiciel de modélisation manuelle",
      "Outil qui fait l’analyse à la place du métier",
      "Ne remplace pas les interactions humaines (ex. interviews)"
    ],
    does: [
      "Vérifie la cohérence entre BPMN, MCD et MFC",
      "Détecte incohérences, oublis ou éléments manquants",
      "Propose des alertes ou suggestions via assistant IA",
      "Authentifie les utilisateurs via LDAP",
      "Utilise des API tierces (IA, traitement, etc.)",
      "Importe des fichiers (XML, JSON, contenus d’interview...)",
      "Identifie les acteurs, flux, types de données (physique/numérique)",
      "Uniformise les noms/id des données entre les modèles (MCD, flux, dictionnaire)"
    ],
    doesNot: [
      "Ne permet pas la modélisation manuelle (MCD, UML, BPMN, etc.)",
      "Ne modifie pas les fichiers source importés",
      "N’apporte pas une analyse parfaite mais améliore la qualité fonctionnelle",
      "Ne prend pas en charge tous les types de modèles (sélection à définir)",
      "Ne crée pas automatiquement de nouvelles entités non présentes explicitement"
    ]
  };

  return (
    <div className="p-4 bg-slate-100 min-h-screen font-['Inter']">
      <div className="max-w-[1000px] mx-auto bg-white shadow-2xl border border-slate-300">
        <div className="p-8 border-b-4 border-slate-900 bg-white">
          <h1 className="text-4xl font-black tracking-tighter uppercase text-slate-900">
            Matrice <span className="text-blue-600">Solution</span>
          </h1>
          <p className="text-sm font-light text-slate-500 tracking-[0.2em] uppercase mt-1">
            Ce que la solution est, fait, n'est pas, ne fait pas.
          </p>
        </div>

        <MatrixSection
          icon={CheckCircle}
          title="IS"
          items={matrix.is}
          color="bg-green-600"
        />

        <MatrixSection
          icon={XCircle}
          title="IS NOT"
          items={matrix.isNot}
          color="bg-rose-600"
        />

        <MatrixSection
          icon={Hammer}
          title="DOES"
          items={matrix.does}
          color="bg-blue-600"
        />

        <MatrixSection
          icon={Ban}
          title="DOES NOT"
          items={matrix.doesNot}
          color="bg-slate-600"
        />
      </div>
    </div>
  );
};

export default MatriceSolutionPage;
