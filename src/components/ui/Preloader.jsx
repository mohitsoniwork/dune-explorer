import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="preloader-logo-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/logo.png" alt="Dune Explorer" className="preloader-logo-img" />
          </motion.div>
          <motion.span
            className="preloader-text"
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, letterSpacing: '0.22em' }}
            transition={{ duration: 1 }}
          >
            Dune Explorer
          </motion.span>
          <div className="preloader-bar">
            <motion.div
              className="preloader-bar-fill"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
