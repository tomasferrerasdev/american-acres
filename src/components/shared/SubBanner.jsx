import { useScroll, useSpring, motion } from 'framer-motion';
import { Navbar } from './Navbar';
import AboutBanner from '../About/AboutBanner';

export const SubBanner = ({ pageData }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
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

      <motion.div
        initial={{ opacity: 0, y: 180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.6,
        }}
      >
        <AboutBanner title1={pageData.title} title2={pageData.title2} />
        <div className="special container">
          <div className="banner-image">
            <img src={pageData.image} alt="man pointing" />
          </div>
        </div>
      </motion.div>
    </>
  );
};
