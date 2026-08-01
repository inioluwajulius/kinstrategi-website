import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Playbook from './Pages/Playbook';
import Manifesto from './Pages/Manifesto';
// import SignalStation from './Pages/SignalStation';
import KinNetwork from './Pages/KinNetwork';
import FitHub from './Pages/FitHub';
import Leire from './Pages/Leire';
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
          {/* <Route path="/signal-station" element={<SignalStation />} /> */}
          <Route path="/kin-network" element={<KinNetwork />} />
          <Route path="/fit-hub" element={<FitHub />} />
          <Route path="/leire" element={<Leire />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/sign-station" element={<SignStation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
