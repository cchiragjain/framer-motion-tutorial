import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

// Animations that are triggered when the element is in view
const ViewBasedAnimations = () => {
  const ref = useRef(null);
  // passing in once will only trigger this hook once
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: "150vh" }} />
      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // best to be used when there is only element that is dependent
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      ></div>
    </>
  );
};

export default ViewBasedAnimations;
