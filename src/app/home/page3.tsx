"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

export default function KC() {
  const { scrollY } = useScroll();

  const lastScrollRef = useRef(0);
  const [direction, setDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollRef.current) {
      setDirection("down");
    } else {
      setDirection("up");
    }
    lastScrollRef.current = latest;
  });

  return (
   <section className="min-h-screen bg-gradient-to-r from-gray-600 via-black to-green-900 flex flex-col items-center justify-center space-y-10">

  <motion.h1
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-white text-8xl font-bold"
    style={{ textShadow: "0px 0px 20px #c912b7" }}
  >
    NO extra charges.
  </motion.h1>

  <motion.h1
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-white text-8xl font-bold"
    style={{ textShadow: "0px 0px 20px #f120b9" }}
  >
    No hidden fees.
  </motion.h1>

</section>
  );
} 