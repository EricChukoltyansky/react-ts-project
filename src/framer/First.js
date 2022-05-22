import React from "react";
import { motion } from "framer-motion";
import "./First.css";

function First() {
  const [rotate, setRotate] = React.useState(false);
  return (
    <div className="example-container">
      <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        transition={{ duration: 4 }}
        onClick={() => setRotate(!rotate)}
      >Click me</motion.div>
    </div>
  );
}

export default First;
