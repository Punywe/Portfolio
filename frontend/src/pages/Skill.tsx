// src/components/Skill.tsx
import React from 'react';
import { SkillCard } from '../component/SkillCard'; // นำเข้า Component การ์ดที่แยกไว้

export const Skill = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center p-5 bg-[#0d0f12] text-white'>
      <h1 className='text-4xl mb-8 font-bold'>My Skill</h1>
      
      {/* กล่องบรรจุการ์ด (Parent) */}
      <div 
        className='w-full max-w-5xl h-90 overflow-x-auto flex gap-6 p-4 shrink-0 scrollbar-none cursor-grab active:cursor-grabbing items-center'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        <SkillCard 
          title="Frontend & Web" 
          description="React, TypeScript, Tailwind CSS สำหรับสร้าง User Interface ที่สวยงามและตอบสนองทุกหน้าจอ" 
          category="Web Development" 
        />

        <SkillCard 
          title="Backend & API" 
          description="จัดการระบบหลังบ้าน, ฐานข้อมูล และการพัฒนา REST APIs สำหรับเชื่อมต่อข้อมูลระบบ" 
          category="Backend Systems" 
        />

        <SkillCard 
          title="IoT & Hardware" 
          description="เชื่อมต่อข้อมูลเซ็นเซอร์แบบ Real-time จากอุปกรณ์ฮาร์ดแวร์เข้าสู่เว็บไซต์และแดชบอร์ดแสดงผล" 
          category="IoT Integration" 
        />

        <SkillCard 
          title="Computer Vision" 
          description="มีทักษะพื้นฐานด้าน AI และการประมวลผลภาพถ่าย (Image Processing)" 
          category="AI & Vision" 
        />

      </div>

      <div className='w-full h-10'></div>
    </div>
  );
};

export default Skill;