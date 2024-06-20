"use client";
import useMouse from "@/utils/use-mouse";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMouse();
  const size = isHovered ? 400 : 40;

  return (
    <main className="main">
      {/* Cursor Mask */}
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven&apos;t been replaced by A.I
          (yet) - making good things only if the paycheck is equally good.
        </p>
      </motion.div>

      {/* Body */}
      <div className="body">
        <p>
          I&apos;m a <span>selectively skilled</span> product designer with
          strong focus on producing high quality & impactful digital
          experiences.
        </p>
      </div>

      <div></div>
    </main>
  );
}
