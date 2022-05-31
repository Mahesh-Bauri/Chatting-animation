import React from "react";
import { motion } from "framer-motion";

export default function Message({ message, even }) {
  let initX = even ? 300 : -300;

  return (
    // TODO : add animations on Messages using framer-motion
    <motion.div className="message">
      <div className="avatar">👦</div>
      <motion.div
        className="text"
        initial={{ translateX: initX, opacity: 0.2, scale: 0.1 }}
        animate={{ translateX: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {message.text}
      </motion.div>
      <div className="avatar">👩</div>
    </motion.div>
  );
}
