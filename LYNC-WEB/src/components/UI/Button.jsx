import { motion } from 'framer-motion';

export default function Button({ children, onClick, className = '' }) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center justify-center gap-[0.625rem] w-[10.25rem] h-[2.625rem] rounded-[1.5rem] bg-lightBlue text-white font-sans font-[590] text-16px cursor-pointer ${className}`}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        type: 'spring',
        mass: 1,
        stiffness: 96,
        damping: 6,
      }}
    >
      {children}
    </motion.button>
  );
}
