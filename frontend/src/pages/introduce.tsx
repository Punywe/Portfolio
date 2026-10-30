import React from "react";
import { AnimatedText } from "../component/AnimatedText"; // ปรับ Path ตามโครงสร้างโฟลเดอร์จริงของคุณ
// 1. Import รูปภาพเข้ามาเก็บไว้ในตัวแปร (ตั้งชื่อว่าอะไรก็ได้ เช่น myBgImage)
import bgImage from "../images/S__28917763.jpg"; 

export const Introduce = () => {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      // 2. นำตัวแปรไปใส่ใน style แบบ inline (backgroundImage)
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center h-full text-white">
        <div className="w-full h-screen p-10">
          <AnimatedText
            text="Hallo!"
            tag="h2"
            className="text-9xl"
            transition={{duration: 0.8, delay: 0, ease:"easeInOut"}}
            viewport={{once: false}}
          />

          <AnimatedText
            text="I'm Poonyawe Tason"
            tag="h2"
            className="text-5xl mt-5"
            transition={{duration: 1.2, delay: 0, ease:"easeInOut"}}
            viewport={{once: false}}
          />

          <AnimatedText
            text="A Website and IoT developer interested in backend systems, databases, and REST APIs, 
              with the ability to build frontend interfaces for system integration and data visualization. 
              Experienced in real-time sensor-to-web integration, alongside basic skills in Computer Vision and AI for image processing."
            tag="p"
            className="w-110 mt-10"
            transition={{duration: 1.5, delay: 0, ease:"easeInOut"}}
            viewport={{once: false}}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Introduce;