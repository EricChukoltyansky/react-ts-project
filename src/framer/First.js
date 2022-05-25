import React from "react";
import { motion } from "framer-motion";
import "./First.css";

function First() {
  const [rotate, setRotate] = React.useState(false);
  const [scale, setScale] = React.useState(false);
  return (
    <div className="example-container">
      <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        transition={{ type: "spring", duration: 1 }}
        initial={{ scale: 0.1 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => setRotate(!rotate)}
        onMouseEnter={() => setScale(true)}
      >
        Click me
      </motion.div>
    </div>
  );
}

export default First;
