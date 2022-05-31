import React from "react";
import { motion } from "framer-motion";

// TODO : create Typing indicator and show them
export default function Typing({ even }) {
  let initX = even ? 200 : -200;
  return (
    <motion.div
      className={`typing ${even ? "is-right" : "is-left"}`}
      initial={{ translateX: initX, opacity: 0.1 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0 }}
    >
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  );
}
