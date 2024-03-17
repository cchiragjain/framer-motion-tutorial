import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
      >
        Show/Hide
      </motion.button>
      {/* Pop Layout Removes Element from DOM */}
      {/* AnimatePresence is required whenever we want to use exit animations */}
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
            initial={{
              rotate: "0deg",
              scale: 0,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
