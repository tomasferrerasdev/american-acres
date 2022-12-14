import { useState, useEffect } from 'react';
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

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 1500);
  }, []);

  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={'American'} />
      <BannerRowCenter title={'experienced'} playMarquee={playMarquee} />
      <BannerRowBottom title={'insurance'} />
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
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={'banner-row max-width'}>
      <div className="row-col">
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
        <span className="row-message">
          For 150 years, Great American Insurance Group has committed to helping
          individuals and businesses secure a healthy financial future.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={'banner-row right max-width'}>
      <ScrollButton />
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && 'animate'}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  );
};

export default Banner;
