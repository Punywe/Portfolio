// src/component/AnimatedText.tsx
import React from "react";
import { motion } from "framer-motion";
import type { TargetAndTransition, Transition } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  initial?: TargetAndTransition | boolean;
  animate?: TargetAndTransition;
  transition?: Transition;
  viewport?: { once?: boolean; amount?: number | "some" | "all" }; // เพิ่ม type สำหรับตั้งค่าการมองเห็น
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  tag = "h1",
  className = "",
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8, delay: 0, ease: "easeOut" },
  viewport = { once: true }, // ค่าเริ่มต้น: ให้เล่นแค่ครั้งเดียวตอนเลื่อนมาเจอ
}) => {
  const Component = (motion[tag as keyof typeof motion] as typeof motion.div) || motion.h1;

  return (
    <Component
      initial={initial}
      whileInView={animate} // เปลี่ยนจาก animate เป็น whileInView
      viewport={viewport}   // ควบคุมจังหวะการทำงานเมื่อมองเห็นบนจอ
      transition={transition}
      className={className}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;