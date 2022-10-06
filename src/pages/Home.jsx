import { useEffect, useState } from 'react';

import Loader from '../components/Loader';
import Banner from '../components/Banner';
import { Navbar } from '../components/Navbar';
import { People } from '../components/People';
import { News } from '../components/News';

import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Navbar />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={`https://ik.imagekit.io/txdk54zsu/image-2?ik-sdk-version=javascript-1.4.3&updatedAt=1664985678714`}
                  layoutId="main-image-1"
                  alt="harvester"
                />
              </div>
            )}
            <People />
            <News />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;