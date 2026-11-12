import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import SP1 from '../images/SP1.jpg';
import SP2 from '../images/SP2.jpg';
import SP3 from '../images/SP3.jpg';

export const SeniorProject = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: SP1,
      title: 'Field Testing',
      alt: 'Field Testing',
    },
    {
      src: SP2,
      title: 'Detection Line Setup',
      alt: 'Detection Line Setup',
    },
    {
      src: SP3,
      title: 'Text-to-Speech Testing',
      alt: 'Text-to-Speech Testing',
    },
  ];

  return (
    <div className='w-full min-h-screen lg:h-screen bg-[#0d0f12] text-white p-4 sm:p-5 flex flex-col lg:flex-row justify-center items-center py-8 lg:py-5 gap-6 lg:gap-0'>
      {/* กล่องซ้าย: ข้อความรายละเอียดโปรเจกต์ */}
      <div className='w-full lg:w-1/2 h-auto lg:h-full p-3 sm:p-5 flex flex-col justify-center'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-neutral-800/80 text-neutral-400 border border-neutral-700/60'>
            FEATURED PROJECT
          </span>
        </div>
        <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-neutral-100'>Senior Project</h1>
        <h2 className='mt-2 sm:mt-3 md:mt-4 w-full h-auto text-base sm:text-lg font-semibold text-neutral-200'>
          Student Pickup System via Parent License Plate Recognition
        </h2>

        {/* Tech tags */}
        <div className='flex flex-wrap gap-1.5 sm:gap-2 mt-3 mb-2'>
          {['Computer Vision', 'YOLOv8', 'EasyOCR', 'Python', 'TTS Audio', 'Automated Barrier'].map((tag) => (
            <span key={tag} className='text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-md bg-neutral-800/70 text-neutral-300 border border-neutral-700/50 font-mono'>
              {tag}
            </span>
          ))}
        </div>

        <p className='mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed'>
          <span className='ml-5'>This project aims to ease traffic congestion during school pickup hours. </span>
          The system works by using a custom-trained YOLO model to detect parent license plates as they enter the pickup area.
          Once a plate is detected, an OCR module extracts the text and checks it against our database to identify the corresponding student.
        </p>

        <p className='mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed'>
          <span className='ml-5'>After a match is found, the system triggers a text-to-speech system to announce the student's name to teachers while simultaneously raising the automatic boom barrier.</span>
          Teachers can then bring the student out to wait at the pickup zone ahead of time, ensuring a smooth and faster vehicle flow.
        </p>
      </div>

      {/* กล่องขวา: 3 รูปภาพ
          - บน Mobile/Tablet (< lg): เลื่อนซ้าย-ขวา แบบแนวนอน (Horizontal scroll) เหมือนกล่อง Skill
          - บน PC (lg+): จัดเรียงแนวตั้ง 3 รูปเท่ากันเหมือนเดิม 100% */}
      <div className='w-full lg:w-1/2 h-auto lg:h-full p-2 sm:p-5 flex flex-col justify-center'>
        <div className='flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 pt-1 px-1 snap-x snap-mandatory scroll-smooth gap-3.5 sm:gap-4 w-full'>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className='group relative w-[82vw] max-w-[340px] sm:w-[380px] sm:max-w-none flex-shrink-0 lg:w-full lg:flex-shrink snap-center lg:snap-align-none h-48 sm:h-56 lg:h-36 xl:h-44 overflow-hidden rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 shadow-lg cursor-pointer'
            >
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105'
              />

              {/* ปุ่มขยายมุมบนขวา */}
              <div className='absolute top-3 right-3 p-1.5 rounded-lg bg-black/65 backdrop-blur-md border border-white/10 text-neutral-300 opacity-90 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <ZoomIn size={15} />
              </div>

              {/* Gradient และข้อความด้านล่าง */}
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-3 pt-6 flex items-end justify-between'>
                <span className='text-xs sm:text-sm font-medium text-neutral-200 truncate'>
                  {image.title}
                </span>
                <span className='text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900/80 border border-neutral-700/60 text-neutral-400'>
                  Click to zoom
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe hint สำหรับ Mobile / Tablet */}
        <div className='flex lg:hidden items-center justify-between mt-2 px-1 text-[11px] text-neutral-500 font-mono shrink-0'>
          <span className='flex items-center gap-1.5'>
            <span className='inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse'></span>
            Swipe horizontally to view photos
          </span>
          <span className='text-[10px] px-2.5 py-0.5 rounded-full bg-neutral-800/90 border border-neutral-700/50 text-neutral-400 font-medium'>
            3 Photos
          </span>
        </div>
      </div>

      {/* Modal ดูภาพขยายเมื่อคลิกที่รูป */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}
        >
          <div className='relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center'>
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute -top-10 right-0 text-white/80 hover:text-white p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 transition'
              aria-label='Close preview'
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage}
              alt='Expanded preview'
              className='max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl border border-neutral-800'
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SeniorProject;
