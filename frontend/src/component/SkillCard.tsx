// src/components/SkillCard.tsx
import React from 'react';

// กำหนด Type ของ Props ที่การ์ดจะรับเข้ามา
interface SkillCardProps {
  title: string;
  description: string;
  category: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, description, category }) => {
  return (
    // w-full h-full หรือปรับแต่งตาม parent ให้ยืดหยุ่น พร้อมใส่ min-w เพื่อคุมขนาดขั้นต่ำเวลาเลื่อนแนวนอน
    <div className='min-w-70 md:min-w-[320px] w-full h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between shrink-0 shadow-lg hover:border-blue-500 transition-all select-none'>
      <div>
        <h3 className='text-2xl font-semibold text-blue-400 mb-2'>{title}</h3>
        <p className='text-gray-400 text-sm'>{description}</p>
      </div>
      <span className='text-xs text-blue-400 bg-blue-950/50 px-3 py-1 rounded-full w-fit'>
        {category}
      </span>
    </div>
  );
};

export default SkillCard;