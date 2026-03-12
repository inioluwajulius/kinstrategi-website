import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Playbook from './Pages/Playbook';
import Manifesto from './Pages/Manifesto';
import SignalStation from './Pages/SignalStation';
import KinFeed from './Pages/KinFeed';
import FitHub from './Pages/FitHub';
import FitFinder from './Pages/FitFinder';
import Leire from './Pages/Leire';
import Citadel from './Pages/Citadel';
import OurWork from './Pages/OurWork';
import SignStation from './Pages/SignStation';

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playbook" element={<Playbook />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/signal-station" element={<SignalStation />} />
          <Route path="/kin-feed" element={<KinFeed />} />
          <Route path="/fit-hub" element={<FitHub />} />
          <Route path="/fit-finder" element={<FitFinder />} />
          <Route path="/citadel" element={<Citadel />} />
          <Route path="/leire" element={<Leire />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/sign-station" element={<SignStation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
