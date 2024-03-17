import { useAnimationControls } from "framer-motion";
import React from "react";

const AnimationControls = () => {
  const controls = useAnimationControls();

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
    </div>
  );
};

export default AnimationControls;
