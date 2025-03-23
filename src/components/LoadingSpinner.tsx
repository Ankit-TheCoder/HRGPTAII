import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner = ({ size = 40, color = 'currentColor' }: LoadingSpinnerProps) => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="rounded-full border-2 border-t-transparent"
        style={{
          width: size,
          height: size,
          borderColor: color,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default LoadingSpinner; 