import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import NotFound from './pages/404';
import SpecialProperty from './pages/SpecialProperty';

import './sass/main.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="location" element={<Location />} />
          <Route path="about">
            <Route index={true} element={<About />} />
            <Route path="special" element={<SpecialProperty />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
