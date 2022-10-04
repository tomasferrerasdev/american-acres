import './sass/main.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <AnimatePresence layoutId>
        <Navbar />
        <Banner />
      </AnimatePresence>
    </>
  );
}

export default App;
