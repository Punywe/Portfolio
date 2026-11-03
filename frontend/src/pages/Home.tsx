// src/pages/Home.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Introduce } from "./introduce";
import { Skill } from "./Skill";

export const Home = () => {
  const scrollContainerRef = useRef(null); 
  const heroRef = useRef(null);          

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
    /* เปลี่ยนพื้นหลังหลักจาก bg-[#0d0f12] เป็น bg-white และเปลี่ยนสีตัวหนังสือรวมเป็น text-black */
    <div 
      ref={scrollContainerRef} 
      className="w-full h-screen bg-white text-black overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      
      {/* ส่วนที่ 1: Hero Animation 400vh */}
      <div ref={heroRef} className="relative h-[400vh] w-full snap-start">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* เอาวงกลมสีน้ำเงินฟุ้งๆ ออกเรียบร้อย */}

          <motion.div style={{ scale: scale1, opacity: opacity1 }} className="absolute z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-black">Hello everyone...</h1>
          </motion.div>

          <motion.div style={{ scale: scale2, opacity: opacity2 }} className="absolute z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-black">Welcome to</h1>
          </motion.div>

          <motion.div style={{ scale: scale3, opacity: opacity3 }} className="absolute z-10 text-center">
            {/* เปลี่ยนเป็นสีฟ้าเข้ม (เช่น text-blue-600) เพื่อให้มองเห็นเด่นชัดบนพื้นหลังสีขาว */}
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight ">My Portfolio</h1>
          </motion.div>

        </div>
      </div>

      {/* ส่วนที่ 2: หน้า Introduce */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center">
        <Introduce />
      </section>

      {/* ส่วนที่ 3: หน้า Skill */}
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center">
        <Skill />
      </section>

    </div>
  );
};

export default Home;