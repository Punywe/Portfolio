// src/components/Skill.tsx
import React from 'react';
import { Globe, Cpu, Eye, Sparkles } from 'lucide-react'; // เพิ่ม Sparkles สำหรับไอคอน AI

export const Skill = () => {
  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-[#0d0f12] text-white'>
      <div className='w-full max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='mb-10 text-left md:text-center'>
          
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-neutral-100'>My Skills</h1>
          <p className='text-neutral-400 mt-2 text-sm md:text-base'>
            Core technologies, hardware, and modern AI workflows I use to build robust software solutions.
          </p>
        </div>

        {/* Bento / Grid Cards (ปรับเป็น 4 คอลัมน์ หรือ 2x2 บนจอขนาดกลางขึ้นไป) */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
          
          {/* Card 1: Web Development */}
          <div className='group relative p-6 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between'>
            <div>
              <div className='w-10 h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-4 text-neutral-200'>
                <Globe size={20} />
              </div>
              <h3 className='text-xl font-semibold text-neutral-100 mb-3'>Web Development</h3>
              <p className='text-sm text-neutral-400 mb-6'>
                Focusing on backend logic, database architecture, REST APIs, and responsive frontends.
              </p>
            </div>
            
            <div className='space-y-4 pt-4 border-t border-neutral-800/60'>
              <div>
                <span className='text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2'>Backend & DB</span>
                <div className='flex flex-wrap gap-2'>
                  {['Node.js', 'Express', 'Python', 'MySQL', 'REST APIs'].map((tech) => (
                    <span key={tech} className='text-xs px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className='text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2'>Frontend</span>
                <div className='flex flex-wrap gap-2'>
                  {['JavaScript', 'React', 'Tailwind CSS', 'TypeScript (Basic)'].map((tech) => (
                    <span key={tech} className='text-xs px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: IoT & Embedded Systems */}
          <div className='group relative p-6 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between'>
            <div>
              <div className='w-10 h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-4 text-neutral-200'>
                <Cpu size={20} />
              </div>
              <h3 className='text-xl font-semibold text-neutral-100 mb-3'>IoT & Embedded</h3>
              <p className='text-sm text-neutral-400 mb-6'>
                Connecting microcontrollers and sensors with real-time web applications via protocols like MQTT.
              </p>
            </div>
            
            <div className='space-y-4 pt-4 border-t border-neutral-800/60'>
              <div>
                <span className='text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2'>Hardware & Protocol</span>
                <div className='flex flex-wrap gap-2'>
                  {['ESP32', 'ESP8266', 'Raspberry Pi', 'MQTT', 'Sensors'].map((tech) => (
                    <span key={tech} className='text-xs px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: AI & Computer Vision */}
          <div className='group relative p-6 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between'>
            <div>
              <div className='w-10 h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-4 text-neutral-200'>
                <Eye size={20} />
              </div>
              <h3 className='text-xl font-semibold text-neutral-100 mb-3'>Computer Vision</h3>
              <p className='text-sm text-neutral-400 mb-6'>
                Image processing, dataset collection, model training, and object detection for automated systems.
              </p>
            </div>
            
            <div className='space-y-4 pt-4 border-t border-neutral-800/60'>
              <div>
                <span className='text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2'>Tools & Libraries</span>
                <div className='flex flex-wrap gap-2'>
                  {['Python', 'OpenCV', 'Dataset Prep', 'Object Detection'].map((tech) => (
                    <span key={tech} className='text-xs px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: AI Workflow & Assistant (เพิ่มใหม่) */}
          <div className='group relative p-6 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between'>
            <div>
              <div className='w-10 h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-4 text-neutral-200'>
                <Sparkles size={20} />
              </div>
              <h3 className='text-xl font-semibold text-neutral-100 mb-3'>AI Workflow</h3>
              <p className='text-sm text-neutral-400 mb-6'>
                Leveraging AI tools efficiently to accelerate boilerplate generation, structure data, and style UI components.
              </p>
            </div>
            
            <div className='space-y-4 pt-4 border-t border-neutral-800/60'>
              <div>
                <span className='text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2'>Integration & Practices</span>
                <div className='flex flex-wrap gap-2'>
                  {['Prompt Engineering', 'JSON Formatting', 'UI Component Styling', 'API Integration'].map((tech) => (
                    <span key={tech} className='text-xs px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skill;