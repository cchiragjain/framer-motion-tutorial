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
              y: 0,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 100, -100, -100, 0], // define keyframes
            }}
            transition={{
              duration: 5,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1], // defining percentage here basically each index represents the value provided in animate ex. 0.25 means at 25% keyframe make y 100
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
