import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Location from './pages/Location';
import NotFound from './pages/404';

import './sass/main.scss';
import Housing from './pages/About/Housing';
import Equine from './pages/About/Equine';
import Transportation from './pages/About/Transportation';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />

          <Route path="about">
            <Route path="housing" element={<Housing />} />
            <Route path="equine" element={<Equine />} />
            <Route path="transportation" element={<Transportation />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
