import { motion } from 'framer-motion';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      className="loader"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="loader-inner">
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            src={`https://ik.imagekit.io/txdk54zsu/image-2?ik-sdk-version=javascript-1.4.3&updatedAt=1664985678714`}
            alt="harvester image"
            layoutId="main-image-1"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </div>
    </motion.div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div className={`image-block ${id}`} variants={variants}>
      <img
        src={`https://ik.imagekit.io/txdk54zsu/tr:w-600/${id}?ik-sdk-version=javascript-1.4.3&updatedAt=1664985711209`}
        alt="harvest and crops pic"
      />
    </motion.div>
  );
};
export default Loader;
