import { useEffect, useState } from 'react';
import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';

import Loader from '../components/Loader';
import Banner from '../components/Home/Banner';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

import { Care } from '../components/Home/Care';
import { CareList } from '../components/Home/CareList';

import { Precene } from '../components/Home/Precene';

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
            <motion.div
              initial={{ opacity: 0, y: -180 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.6,
              }}
            >
              <Navbar />
            </motion.div>
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{
                    ease: [0.6, 0.01, -0.05, 0.9],
                    duration: 1.6,
                  }}
                  src={`https://ik.imagekit.io/txdk54zsu/image-2?ik-sdk-version=javascript-1.4.3&updatedAt=1664985678714`}
                  layoutId="main-image-1"
                  alt="harvester"
                />
              </div>
            )}
            <div className="container">
              <Care />
              <CareList />
              <Precene />
            </div>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
