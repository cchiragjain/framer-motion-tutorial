import { motion, MotionConfig } from "framer-motion";
import React from "react";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      {/* Define single config of transition which can be used by the child components */}
      <MotionConfig
        transition={{
          duration: 0.25,
          ease: "easeIn",
        }}
      >
        <motion.button
          className="example-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "3deg" }}
        >
          click me
        </motion.button>
        <motion.button
          className="example-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "-3deg" }}
          style={{ backgroundColor: "red" }}
        >
          click me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
