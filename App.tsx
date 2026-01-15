import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MarinePage from './src/pages/MarinePage';
import RomainPage from './src/pages/RomainPage';
import YounesPage from './src/pages/YounesPage';
import ExperienceMapPage from './src/pages/ExperienceMap';

const App = () => {
  return (
    <Router>
      {/* Barre de navigation simple pour basculer entre les personas */}
      <nav className="no-print bg-slate-900 text-white p-4 flex justify-center gap-8 text-sm font-bold uppercase tracking-widest shadow-lg mb-8">
        <Link to="/marine" className="hover:text-blue-400 transition-colors">Marine</Link>
        <Link to="/romain" className="hover:text-blue-400 transition-colors">Romain</Link>
        <Link to="/younes" className="hover:text-blue-400 transition-colors">Younes</Link>
        <Link to="/experience-map">Experience Map</Link>
      </nav>

      <Routes>
        {/* Route par défaut redirigeant vers Marine */}
        <Route path="/" element={<MarinePage />} />
        
        {/* Routes spécifiques pour chaque persona */}
        <Route path="/marine" element={<MarinePage />} />
        <Route path="/romain" element={<RomainPage />} />
        <Route path="/younes" element={<YounesPage />} />
        <Route path="/experience-map" element={<ExperienceMapPage />} />

        {/* Optionnel : Redirection en cas de page inconnue */}
        <Route path="*" element={<MarinePage />} />
      </Routes>
    </Router>
  );
};

export default App;