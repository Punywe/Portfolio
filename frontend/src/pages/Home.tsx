// src/pages/Home.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Introduce } from "./introduce";
import { Skill } from "./Skill";
import { SeniorProject } from "./SeniorProject";

export const Home = () => {
  // ควบคุมขั้นตอนของข้อความ: 0 = Hello everyone..., 1 = Welcome to, 2 = My Portfolio, 3 = เสร็จสิ้นเตรียมไปหน้าถัดไป
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-screen bg-white text-black overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
      {/* ส่วนที่ 1: หน้า Hero เล่นแอนิเมชันอัตโนมัติ */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* ข้อความที่ 1: Hello everyone... */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => {
                // เล่นข้อความนี้จบ พักแป๊บหนึ่งแล้วเปลี่ยนไปข้อความถัดไป
                setTimeout(() => setStep(1), 800);
              }}
              className="absolute text-center"
            >
              <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-gray-400">
                Hello everyone...
              </h1>
            </motion.div>
          )}

          {/* ข้อความที่ 2: Welcome to */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => {
                setTimeout(() => setStep(2), 800);
              }}
              className="absolute text-center"
            >
              <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-gray-400">
                Welcome to
              </h1>
            </motion.div>
          )}

          {/* ข้อความที่ 3: My Portfolio */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => {
                // พอน้องข้อความสุดท้ายเล่นจบ ให้เปลี่ยนสเต็ปเพื่อซ่อน หรือสามารถเลื่อนลงหน้า Introduce อัตโนมัติได้
                setTimeout(() => setStep(3), 1000);
              }}
              className="absolute text-center"
            >
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-black">
                My Portfolio
              </h1>
            </motion.div>
          )}

        </AnimatePresence>

        {/* ปุ่มข้าม หรือข้อความบอกสถานะเบื้องต้น (ถ้าต้องการ) */}
        {step === 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-3xl font-light text-gray-400">Let's get started ↓</h1>
          </motion.div>
        )}
      </section>

      {/* ส่วนที่ 2: หน้า Introduce */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center">
        <Introduce />
      </section>

      {/* ส่วนที่ 3: หน้า Skill */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center">
        <Skill />
      </section>

      {/* ส่วนที่ 4: Senior Project */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center">
        <SeniorProject />
      </section>

    </div>
  );
};

export default Home;