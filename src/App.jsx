import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Playbook from './Pages/Playbook';
import Manifesto from './Pages/Manifesto';
import KinNetwork from './Pages/KinNetwork';
import OurWork from './Pages/OurWork';
import Contact from './Pages/Contact';

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/playbook" element={<Playbook />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/kin-network" element={<KinNetwork />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy route alias */}
          <Route path="/sign-station" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
