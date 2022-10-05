import { useEffect, useState } from 'react';
import './sass/main.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import Banner from './components/Banner';
import Loader from './components/Loader';
import { People } from './components/People';
import { News } from './components/News';
import { Faq } from './components/Faq';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);
  return (
    <>
      <AnimatePresence layoutId>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Navbar />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/images/image-2.webp`}
                  layoutId="main-image-1"
                  alt="harvester"
                />
              </div>
            )}
            <People />
            <News />
            <Faq />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
