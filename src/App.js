import React, { useEffect, useState } from "react";
import useInterval from "@use-it/interval";
import { motion } from "framer-motion";
import Message from "./components/Message";
import Typing from "./components/Typing";
import "./App.css";

// TODO : render all Messages
// TODO : create timer and show one by one after 4sec
// TODO : add logic to show Messages
// TODO : create Typing indicator and show them
// TODO : add animations on Messages using framer-motion

const messages = [
  {
    text: "Hii, I am Mahesh. ",
  },
  { text: "Hello, I am Dolly" },
  { text: " How are you? Dolly" },
  { text: "I am fine. How about you?" },
  { text: "I am great." },
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "Just Googling it?" },
];

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0);
  const [delay, setDelay] = useState(3500);

  useInterval(() => {
    setMessageToShow((messageToShow) => messageToShow + 1);
  }, delay);

  useEffect(() => {
    if (messageToShow === messages.length - 1) {
      setDelay(null);
    }
  }, [messageToShow]);

  return (
    <div className="app">
      <motion.div
        className="header"
        initial={{ translateY: 300, scale: 0.4, opacity: 0 }}
        animate={{ translateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 11 }}
        >
          Do you wanna connect with me?
        </motion.h1>
      </motion.div>

      <motion.div
        className="linkedin"
        initial={{ translateY: 300, scale: 0.4, opacity: 0 }}
        animate={{ translateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/mahesh-bauri/"
          target="_blank"
        >
          My linkedin profile
        </motion.a>
      </motion.div>

      <motion.div
        className="walkthrough"
        initial={{ translateX: 500, translateY: 200, scale: 0, opacity: 0.2 }}
        animate={{ translateX: 0, translateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.7 }}
      >
        {/* TODO : render all Messages */}
        {messages.map((message, index) => {
          // TODO : add logic to show Messages
          let even = index % 2 === 0;

          if (messageToShow + 1 === index)
            return <Typing key={index} even={even} />;

          if (index > messageToShow) return null;

          return <Message key={index} even={even} message={message} />;
        })}
      </motion.div>
    </div>
  );
}
