import { motion, useAnimationControls } from "framer-motion";
import React from "react";

// For things like controlling animation when some external event happended
// Example click on button and sidenav comes from the right
const AnimationControls = () => {
  const controls = useAnimationControls();

  // When click is called start the flip variant animation
  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip it!
      </button>
      <motion.div
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        initial="initial"
        animate={controls}
        // whileHover="flip"
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
