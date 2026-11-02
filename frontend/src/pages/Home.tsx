// src/pages/Home.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Introduce } from "./introduce";
import { Skill } from "./Skill";

export const Home = () => {
  const scrollContainerRef = useRef(null); // อ้างอิงตัวกล่องหลักที่ใช้เลื่อน
  const heroRef = useRef(null);          // อ้างอิงเฉพาะส่วน Hero 400vh

  // ใช้ container เพื่อให้ useScroll เช็คระยะการเลื่อนภายในกล่องนี้ได้อย่างแม่นยำ
  const { scrollYProgress } = useScroll({
    target: heroRef,
    container: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 2.5]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 2]);

  const opacity3 = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.65, 1], [0.8, 1]);

  return (
    /* 
      1. ใส่ h-screen, overflow-y-scroll, snap-y, snap-mandatory ที่ตัวแม่สุด 
         เพื่อให้กล่องนี้ทำหน้าที่เป็นตัวบล็อกการเลื่อนและดูดล็อกหน้าจอ 
    */
    <div 
      ref={scrollContainerRef} 
      className="w-full h-screen bg-[#0d0f12] text-white overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      
      {/* ส่วนที่ 1: Hero Animation 400vh (ใส่ snap-start เพื่อให้เริ่มล็อกตั้งแต่จุดแรก) */}
      <div ref={heroRef} className="relative h-[400vh] w-full snap-start">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"></div>

          <motion.div style={{ scale: scale1, opacity: opacity1 }} className="absolute z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight">Hello everyone...</h1>
          </motion.div>

          <motion.div style={{ scale: scale2, opacity: opacity2 }} className="absolute z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight">Welcome to</h1>
          </motion.div>

          <motion.div style={{ scale: scale3, opacity: opacity3 }} className="absolute z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-blue-400">My Portfolio</h1>
          </motion.div>

        </div>
      </div>

      {/* ส่วนที่ 2: หน้า Introduce (ล็อกหน้าจอทันทีเมื่อเลื่อนมาถึง) */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center">
        <Introduce />
      </section>

      {/* ส่วนที่ 3: หน้า Skill (ล็อกหน้าจอทันทีเมื่อเลื่อนมาถึง) */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center">
        <Skill />
      </section>

    </div>
  );
};

export default Home;