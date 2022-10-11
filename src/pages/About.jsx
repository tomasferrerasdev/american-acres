import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import AboutBanner from '../components/About/AboutBanner';
import { Heritage } from '../components/About/Heritage';
import { AboutList } from '../components/About/AboutList';

import { useScroll, useSpring, motion } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="about__section">
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
        <AboutBanner title1={"Let's get"} title2={'familiar'} />
        <Heritage />
        <AboutList />
        <Footer />
      </motion.div>
    </div>
  );
};

export default About;
