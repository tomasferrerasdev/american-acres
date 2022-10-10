import { motion } from 'framer-motion';
import { ScrollButton } from '../ScrollButton';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = ({ title1, title2, rowMessage }) => {
  return (
    <motion.div className="banner about-banner" variants={banner}>
      <BannerRowTop title={title1} />
      <BannerRowBottom title={title2} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        className="row-letter"
        variants={letterAnimation}
        key={index}
      >
        {letter === ' ' ? '\u00a0\u00a0' : letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title, rowMessage }) => {
  return (
    <div className={'banner-row max-width about-row'}>
      <div className="row-col about-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        className="row-col"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
      >
        <span className="row-message">{rowMessage ? { rowMessage } : ' '}</span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={'banner-row right-about max-width '}>
      <ScrollButton />
      <AnimatedLetters title={title} />
    </div>
  );
};

export default Banner;
