import { motion } from "framer-motion";

export const LoadingSpinner = ({ size = "medium", color = "primaryColor" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8", 
    large: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const colorClasses = {
    primaryColor: "border-primaryColor",
    secondaryColor: "border-secondaryColor",
    white: "border-white",
    green: "border-green-400",
    red: "border-red-400"
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-opacity-20 border-t-opacity-100 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-bgDark1 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 border-4 border-primaryColor border-opacity-20 border-t-primaryColor rounded-full animate-spin mx-auto mb-4"></div>
          <motion.h2 
            className="text-2xl font-bold text-white mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading RIAL Coin
          </motion.h2>
          <p className="text-secondaryText">Please wait while we prepare your experience...</p>
        </motion.div>
      </div>
    </div>
  );
};
