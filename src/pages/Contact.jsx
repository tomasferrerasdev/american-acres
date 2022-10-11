import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
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
        <div className="contact-section container">
          <Fade cascade damping={0.1} direction="up" triggerOnce>
            <div className="contact-row">
              <h1>Understanding</h1>
            </div>
            <div className="contact-row-bottom">
              <Fade cascade direction="up" damping={0.3} triggerOnce>
                <h1>every</h1>
                <img className="contact-img" src="/images/talking.jpg" alt="" />
                <h1>voice</h1>
              </Fade>
            </div>
          </Fade>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Contact;
