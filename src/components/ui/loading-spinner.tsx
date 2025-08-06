import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingSpinner = ({ className, size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <motion.div
        className="absolute inset-0 border-4 border-primary/20 rounded-full"
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
        animate={{
          rotateY: 360,
          rotateX: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute inset-2 border-2 border-transparent border-r-accent rounded-full"
        animate={{
          rotateY: -360,
          rotateZ: 180,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      />
    </div>
  );
};

export const ParticleSpinner = ({ className, size = "md" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{
            left: "50%",
            top: "50%",
            transformOrigin: `0 ${size === 'sm' ? '20px' : size === 'md' ? '30px' : '40px'}`,
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateZ: 360,
            rotateY: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
          initial={{
            rotateZ: i * 60,
          }}
        />
      ))}
    </div>
  );
};