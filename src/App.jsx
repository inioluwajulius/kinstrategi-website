import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Playbook from './Pages/Playbook';
import HarmonyMatch from './Pages/HarmonyMatch';
import Manifesto from './Pages/Manifesto';
import SignalStation from './Pages/SignalStation';
import KinFeed from './Pages/KinFeed';
import FitHub from './Pages/FitHub';
import FitFinder from './Pages/FitFinder';
import Leire from './Pages/Leire';

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playbook" element={<Playbook />} />
          <Route path="/harmony" element={<HarmonyMatch />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/signals" element={<SignalStation />} />
          <Route path="/kin-feed" element={<KinFeed />} />
          <Route path="/fit-hub" element={<FitHub />} />
          <Route path="/fit-finder" element={<FitFinder />} />
          <Route path="/leire" element={<Leire />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
