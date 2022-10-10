import { Navbar } from '../components/Navbar';
import { useScroll, useSpring, motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import AboutBanner from '../components/About/AboutBanner';

const SpecialProperty = () => {
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
        <AboutBanner title1={'Housing'} title2={'Insurance'} />
        <div className="special container">
          <div className="banner-image">
            <img
              src="https://ik.imagekit.io/txdk54zsu/about/house-1?ik-sdk-version=javascript-1.4.3&updatedAt=1665373402207"
              alt="man pointing"
            />
          </div>
        </div>
      </motion.div>

      <div className="care care-container">
        <div className="care-data">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <p>
              Even the most detailed construction plans can go awry.
              Construction companies can look to Great American to build custom
              coverage to protect workers and projects from the ground up.
            </p>
            <h2>
              What should construction companies consider when choosing
              construction insurance protection?
            </h2>
            <p>
              Your employees, equipment, materials and finances are just a few
              areas of your business that require special coverage. Our
              specialized construction and contractors’ insurance can help
              protect businesses from property damage lawsuits, equipment
              damage, theft, injuries, loss of business due to delays and more.
            </p>

            <div className="care-list">
              <ul>
                <li>General contractors</li>
                <li>HVAC companies</li>
                <li>Electricians</li>
                <li>Concrete work</li>
                <li>Carpentry and floor work</li>
                <li>Roofing, siding and sheet metal work</li>
              </ul>
            </div>

            <p className="care-bold">
              Even the most detailed construction plans can go awry.
              Construction companies can look to Great American to build custom
              coverage to protect workers and projects from the ground up.
            </p>

            <p>
              Your employees, equipment, materials and finances are just a few
              areas of your business that require special coverage. Our
              specialized construction and contractors’ insurance can help
              protect businesses from property damage lawsuits, equipment
              damage, theft, injuries, loss of business due to delays and more.
              Your employees, equipment, materials and finances are just a few
              areas of your business that require special coverage. Our
              specialized construction and contractors’ insurance can help
              protect businesses from property damage lawsuits, equipment
              damage, theft, injuries, loss of business due to delays and more.
              Your employees, equipment, materials and finances are just a few
              areas of your business that require special coverage. Our
              specialized construction and contractors’ insurance can help
              protect businesses from property damage lawsuits, equipment
              damage, theft, injuries, loss of business due to delays and more.
            </p>

            <div className="back-link">
              <Fade direction="up" delay={1}>
                <h3>Go back</h3>
              </Fade>
              <Fade direction="up" delay={1}>
                <div className="arrow">
                  <Fade direction="up" delay={0.2}>
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      stroke-line-join="round"
                      stroke-miter-limit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Fade>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default SpecialProperty;
