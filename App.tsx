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
  Layers
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Main A4 Document */}
      <div className="a4-page overflow-hidden font-['Inter'] flex flex-col">
        
        {/* Header Section - Marine Arnauld sur une seule ligne */}
        <header className="flex justify-between items-end border-b-2 border-slate-900 pb-6 mb-8 relative">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none mb-2">
              Marine Arnauld
            </h1>
            <p className="text-xl font-light text-blue-600 tracking-widest uppercase">
              Senior Business Analyst
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
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop" 
                    alt="Marine Arnauld" 
                    className="object-cover w-full h-full" 
                   />
                   <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xs p-2 text-center leading-none">
                     34 ans
                   </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-900">
                    <User className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Profil Senior</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    10 ans d’expérience en Retail. Responsable de la formalisation des besoins et pivot entre équipes métier et techniques.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 border-l-4 border-slate-900 relative dot-grid">
                <Quote className="absolute top-2 right-2 w-8 h-8 text-slate-200" />
                <p className="text-sm font-['Playfair_Display'] italic text-slate-800 leading-relaxed">
                  "Ma rigueur est au service de la cohérence globale : chaque flux et chaque donnée doit raconter la même histoire métier."
                </p>
              </div>
            </section>

            {/* Méthode & Approche */}
            <section className="border-t border-slate-100 pt-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-blue-600 flex items-center gap-2">
                <Activity className="w-3 h-3" /> Méthode d’analyse
              </h3>
              <div className="space-y-3">
                {[
                  { t: "Objectifs Stratégiques", d: "Identification des enjeux tactiques du SI." },
                  { t: "Cartographie BPMN / MCD", d: "Modélisation rigoureuse des processus et données." },
                  { t: "Exigences & US", d: "Structuration et analyse en lien avec l'UX." },
                  { t: "Traçabilité", d: "Vérification de la cohérence inter-modèles." }
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

            {/* Outils Section - Placée en bas via flex-1 sur le contenu au-dessus ou mt-auto ici */}
            <section className="bg-slate-900 p-6 text-white rounded-sm mt-auto">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <Wrench className="w-3 h-3" /> Outils Métier
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  {n: 'Bizagi', d: 'BPMN'},
                  {n: 'JMerise', d: 'MCD'},
                  {n: 'Taiga', d: 'Stories'},
                  {n: 'Excel', d: 'Règles'},
                  {n: 'PPT', d: 'Supports'},
                  {n: 'Trello', d: 'Suivi'}
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
              {/* Parcours & Impact Synthétisé */}
              <section>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-slate-400 flex items-center gap-2">
                  <FileText className="w-3 h-3" /> Parcours & Impact
                </h3>
                <div className="text-sm text-slate-700 leading-relaxed text-justify">
                  <p>
                    Forte de 10 ans d'expérience dans le Retail, Marine agit comme un pivot stratégique entre les équipes métier et techniques pour sécuriser l'amont des projets. Elle traduit des besoins complexes en modèles fonctionnels robustes tout en garantissant une vision systémique du SI, où processus, données et règles métier s'alignent parfaitement pour assurer la cohérence globale de la conception.
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
                      "Qualité des livrables : garantir la cohérence entre exigences, processus métier et données",
                      "Réduction des erreurs : limiter les retours en développement et les coûts de refactoring",
                      "Décision éclairée : appuyer les choix projet sur des modèles fiables et traçables",
                      "Gain de temps : réduire le temps de validation sans sacrifier la rigueur",
                      "Collaboration : faciliter l’alignement entre équipes métier, produit et techniques"
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
                      "Aucun lien automatique entre les modèles",
                      "Incohérences invisibles tant que les livrables ne sont pas croisés",
                      "Outils cloisonnés, obligeant à des vérifications manuelles répétées",
                      "Contrôles longs, fragiles et stressants en phase de validation",
                      "Absence de vision globale sur la traçabilité et la couverture des exigences"
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

            {/* Critères de Valeur - Poussé vers le bas pour s'aligner avec Outils Métier */}
            <div className="mt-auto pt-8">
              <section className="bg-slate-50 border border-slate-200 p-6 flex flex-col gap-4 relative">
                <div className="absolute top-0 right-0 h-full w-2 bg-blue-600"></div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-2">
                  Critères de valeur
                </h3>
                <p className="text-[11px] font-medium text-slate-700 italic border-b border-slate-200 pb-2 mb-2">
                  Marine adhérera à une solution si elle lui permet de :
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { h: "Gagner du temps", d: "Gagner du temps sur les vérifications fonctionnelles.", i: <Clock className="w-4 h-4 text-blue-600" /> },
                    { h: "Vue Consolidée", d: "Avoir une vue consolidée et transverse des modèles.", i: <Eye className="w-4 h-4 text-blue-600" /> },
                    { h: "Traçabilité", d: "Assurer une traçabilité claire entre exigences, processus et données.", i: <Link className="w-4 h-4 text-blue-600" /> },
                    { h: "Intégration", d: "S’intégrer à ses outils existants, sans bouleverser ses habitudes.", i: <Layers className="w-4 h-4 text-blue-600" /> }
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
          <div>Marine Arnauld — Senior Business Analyst</div>
          <div>Retail Transformation SI</div>
        </footer>
      </div>
    </div>
  );
};
//test 3
export default App;