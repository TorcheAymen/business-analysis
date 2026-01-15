import React from 'react';
import { 
  User, 
  Target, 
  AlertCircle, 
  CheckCircle2, 
  Wrench, 
  FileText,
  Quote,
  Activity,
  ArrowRight,
  Clock,
  Eye,
  Link,
  Layers,
  GraduationCap
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Main A4 Document */}
      <div className="a4-page overflow-hidden font-['Inter'] flex flex-col">
        
        {/* Header Section */}
        <header className="flex justify-between items-end border-b-2 border-slate-900 pb-6 mb-8 relative">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none mb-2">
              Romain Prevost
            </h1>
            <p className="text-xl font-light text-blue-600 tracking-widest uppercase">
              Étudiant en L3 MIAGE
            </p>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-8 flex-1">
          
          {/* Column Left: Identity & Methods */}
          <div className="col-span-5 space-y-8 flex flex-col">
            
            {/* Identity Photo & Bio */}
            <section className="relative">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-32 h-40 bg-slate-100 shrink-0 grayscale border border-slate-200 relative">
                   <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=500&auto=format&fit=crop" 
                    alt="Romain Prevost" 
                    className="object-cover w-full h-full" 
                   />
                   <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xs p-2 text-center leading-none">
                     20 ans
                   </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-900">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Profil Étudiant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Débutant en analyse fonctionnelle. Travaille sur la conception d'un SI dans un cadre académique.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 border-l-4 border-slate-900 relative dot-grid">
                <Quote className="absolute top-2 right-2 w-8 h-8 text-slate-200" />
                <p className="text-sm font-['Playfair_Display'] italic text-slate-800 leading-relaxed">
                  "Je veux progresser sans y passer des heures, mais j'ai du mal à identifier ce que j'oublie ou ce que je fais mal."
                </p>
              </div>
            </section>

            {/* Caractéristiques de l'analyse */}
            <section className="border-t border-slate-100 pt-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-blue-600 flex items-center gap-2">
                <Activity className="w-3 h-3" /> Analyse académique
              </h3>
              <div className="space-y-3">
                {[
                  { t: "Méthode scolaire", d: "Applique MFC, BPMN, MCD et exigences vus en cours." },
                  { t: "Approche Instinctive", d: "Travaille souvent en recopiant les structures de TD." },
                  { t: "Focus Esthétique", d: "Se concentre sur la propreté visuelle plus que sur le fond." },
                  { t: "Essai-Erreur", d: "Utilise des outils simples avec une guidance limitée." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <ArrowRight className="w-2.5 h-2.5 text-blue-400" /> {item.t}
                    </h4>
                    <p className="text-[11px] text-slate-500 ml-4">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Outils Section */}
            <section className="bg-slate-900 p-6 text-white rounded-sm mt-auto">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <Wrench className="w-3 h-3" /> Outils utilisés
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  {n: 'JMerise', d: 'MCD'},
                  {n: 'Bizagi', d: 'BPMN'},
                  {n: 'Sheets', d: 'Exigences'},
                  {n: 'Word', d: 'Docs'},
                  {n: 'LMS', d: 'Consignes'},
                  {n: 'Drive', d: 'Partage'}
                ].map((tool, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] py-1 border-b border-slate-700">
                    <span className="font-bold">{tool.n}</span>
                    <span className="text-slate-400 uppercase text-[8px]">{tool.d}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Column Right: Goals, Frustrations & Values */}
          <div className="col-span-7 flex flex-col border-l border-slate-100 pl-8">
            
            <div className="space-y-8">
              {/* Biographie & Impact */}
              <section>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-slate-400 flex items-center gap-2">
                  <FileText className="w-3 h-3" /> Biographie
                </h3>
                <div className="text-sm text-slate-700 leading-relaxed text-justify space-y-4">
                  <p>
                    Étudiant motivé et curieux, Romain découvre l’analyse fonctionnelle à travers ses projets pédagogiques. S'il fait preuve de sérieux dans ses révisions, il manque encore de méthode et de confiance pour valider la solidité de ses travaux.
                  </p>
                  <p>
                    Son défi majeur est de jongler entre une vie étudiante active et la rigueur demandée par les SI. Il cherche une solution capable de lui donner un feedback immédiat pour éviter les erreurs classiques sans y passer ses nuits.
                  </p>
                </div>
              </section>

              {/* Objectifs & Frustrations */}
              <div className="grid grid-cols-2 gap-6">
                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-emerald-600 flex items-center gap-2">
                    <Target className="w-3 h-3" /> Objectifs
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Validation des bases : comprendre l'analyse pour réussir ses projets",
                      "Zéro oubli : éviter les erreurs fréquentes qui nuisent à ses notes",
                      "Gain de temps : automatiser les vérifications de cohérence",
                      "Autonomie : progresser avec un minimum de guidance externe",
                      "Apprentissage : monter en compétence de façon pédagogique"
                    ].map((goal, i) => (
                      <li key={i} className="flex items-start gap-2 text-[10px] text-slate-600 leading-tight">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-rose-600 flex items-center gap-2">
                    <AlertCircle className="w-3 h-3" /> Frustrations
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Doute constant sur l'exhaustivité du travail",
                      "Incohérences indétectables seul entre les diagrammes",
                      "Manque d'outils d'apprentissage interactifs",
                      "Perte de temps sur des incompréhensions non assistées",
                      "Sentiment d'isolement face à la complexité de la matière"
                    ].map((frust, i) => (
                      <li key={i} className="flex items-start gap-2 text-[10px] text-slate-600 leading-tight">
                        <div className="w-3 h-3 flex items-center justify-center shrink-0 text-rose-500 font-bold mt-0.5 text-[8px]">❌</div>
                        {frust}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Attentes vis-à-vis d'un outil */}
            <div className="mt-auto pt-8">
              <section className="bg-slate-50 border border-slate-200 p-6 flex flex-col gap-4 relative">
                <div className="absolute top-0 right-0 h-full w-2 bg-blue-600"></div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-2">
                  Attentes de Romain
                </h3>
                <p className="text-[11px] font-medium text-slate-700 italic border-b border-slate-200 pb-2 mb-2">
                  Romain adhérera à une solution si elle lui permet de :
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { h: "Guidage pas à pas", d: "Être accompagné dans la formalisation des modèles.", i: <Layers className="w-4 h-4 text-blue-600" /> },
                    { h: "Alertes Intelligentes", d: "Recevoir des conseils en cas d'élément incohérent.", i: <AlertCircle className="w-4 h-4 text-blue-600" /> },
                    { h: "Feedback Pédagogique", d: "Comprendre ses erreurs pour s'améliorer immédiatement.", i: <Eye className="w-4 h-4 text-blue-600" /> },
                    { h: "Traçabilité Simple", d: "Visualiser les liens entre MCD, BPMN et exigences.", i: <Link className="w-4 h-4 text-blue-600" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="mt-0.5">{item.i}</div>
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-900">{item.h}</h4>
                        <p className="text-[9px] text-slate-500 leading-tight">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] text-slate-400 uppercase tracking-widest">
          <div>Romain Prevost — Étudiant L3 MIAGE</div>
          <div>Projet Académique SI</div>
        </footer>
      </div>
    </div>
  );
};

export default App;