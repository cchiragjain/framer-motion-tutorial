import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: "150vh" }} />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;
