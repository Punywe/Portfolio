import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Introduce } from "./introduce";


export const Home = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- ข้อความที่ 1 ---
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 2.5]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // --- ข้อความที่ 2 ---
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 2]);

  // --- ข้อความที่ 3 ---
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.65, 1], [0.8, 1]);

  return (
    <div className="w-full bg-[#0d0f12] text-white">
      
      {/* 1. ส่วนของ Animation 400vh ที่จะตรึงหน้าจอไว้ตอน Scroll */}
      <div ref={containerRef} className="relative h-[400vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* จุดแสงฟุ้งตรงกลาง */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"></div>

          {/* ข้อความที่ 1 */}
          <motion.div
            style={{ scale: scale1, opacity: opacity1 }}
            className="absolute z-10 text-center"
          >
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight">
              Hello everyone...
            </h1>
          </motion.div>

          {/* ข้อความที่ 2 */}
          <motion.div
            style={{ scale: scale2, opacity: opacity2 }}
            className="absolute z-10 text-center"
          >
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight">
              Welcome to
            </h1>
          </motion.div>

          {/* ข้อความที่ 3 */}
          <motion.div
            style={{ scale: scale3, opacity: opacity3 }}
            className="absolute z-10 text-center"
          >
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-blue-400">
              My Portfolio
            </h1>
          </motion.div>

        </div>
      </div>

      {/* 2. ส่วนของหน้าถัดไป จะอยู่ด้านล่างสุดและรอให้ scroll ลงมาเจอ */}
      <Introduce />
      
    </div>
  );
};

export default Home;