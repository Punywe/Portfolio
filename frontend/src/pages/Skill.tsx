// src/components/Skill.tsx
import { Globe, Cpu, Eye, Sparkles } from 'lucide-react';

export const Skill = () => {
  return (
    <section className='w-full min-h-screen lg:h-screen flex flex-col items-center justify-start lg:justify-center pt-8 sm:pt-12 lg:pt-0 pb-10 lg:pb-0 p-4 sm:p-6 md:p-12 bg-[#0d0f12] text-white overflow-hidden'>
      <div className='w-full max-w-7xl mx-auto flex flex-col justify-start lg:justify-center h-auto lg:h-full lg:max-h-screen py-2 sm:py-4'>
        
        {/* Section Header */}
        <div className='mb-20 sm:mb-6 lg:mb-10 text-left md:text-center shrink-0'>
          <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-neutral-100'>My Skills</h1>
          <p className='text-neutral-400 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base'>
            Core technologies, hardware, and modern AI workflows I use to build robust software solutions.
          </p>
        </div>

        {/* Bento / Grid Cards:
            - บน Mobile / Tablet (< lg): Scroll ซ้าย-ขวา (Horizontal scroll) ด้วย snap-x โดยทุกกล่องมีความสูงเท่ากันเป๊ะ (h-[380px] sm:h-[400px])
            - บน PC (lg+): แสดงเป็น 4 คอลัมน์ (grid-cols-4) เหมือนเดิม 100% */}
        <div className='flex lg:grid lg:grid-cols-4 gap-3.5 sm:gap-6 w-full overflow-x-auto lg:overflow-x-visible pb-3 pt-1 px-1 snap-x snap-mandatory scroll-smooth items-stretch'>
          
          {/* Card 1: Web Development */}
          <div className='group relative p-4 sm:p-6 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-start lg:justify-between w-[80vw] max-w-[310px] sm:w-[350px] sm:max-w-none flex-shrink-0 lg:w-auto lg:flex-shrink snap-center lg:snap-align-none h-[380px] sm:h-[400px] lg:h-auto'>
            <div>
              <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-2.5 sm:mb-4 text-neutral-200'>
                <Globe size={18} className='sm:w-5 sm:h-5' />
              </div>
              <h3 className='text-base sm:text-xl font-semibold text-neutral-100 mb-1.5 sm:mb-3'>Web Development</h3>
              <p className='text-xs sm:text-sm text-neutral-400 mb-3 sm:mb-6 leading-relaxed'>
                Focusing on backend logic, database architecture, REST APIs, and responsive frontends.
              </p>
            </div>
            
            <div className='space-y-2.5 sm:space-y-4 pt-2.5 sm:pt-4 border-t border-neutral-800/60'>
              <div>
                <span className='text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1 sm:mb-2'>Backend & DB</span>
                <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                  {['Node.js', 'Express', 'Python', 'MySQL', 'REST APIs'].map((tech) => (
                    <span key={tech} className='text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className='text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1 sm:mb-2'>Frontend</span>
                <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                  {['JavaScript', 'React', 'Tailwind CSS', 'TypeScript (Basic)'].map((tech) => (
                    <span key={tech} className='text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: IoT & Embedded Systems */}
          <div className='group relative p-4 sm:p-6 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-start lg:justify-between w-[80vw] max-w-[310px] sm:w-[350px] sm:max-w-none flex-shrink-0 lg:w-auto lg:flex-shrink snap-center lg:snap-align-none h-[380px] sm:h-[400px] lg:h-auto'>
            <div>
              <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-2.5 sm:mb-4 text-neutral-200'>
                <Cpu size={18} className='sm:w-5 sm:h-5' />
              </div>
              <h3 className='text-base sm:text-xl font-semibold text-neutral-100 mb-1.5 sm:mb-3'>IoT & Embedded</h3>
              <p className='text-xs sm:text-sm text-neutral-400 mb-3 sm:mb-6 leading-relaxed'>
                Connecting microcontrollers and sensors with real-time web applications via protocols like MQTT.
              </p>
            </div>
            
            <div className='space-y-2.5 sm:space-y-4 pt-2.5 sm:pt-4 border-t border-neutral-800/60'>
              <div>
                <span className='text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1 sm:mb-2'>Hardware & Protocol</span>
                <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                  {['ESP32', 'ESP8266', 'Raspberry Pi', 'MQTT', 'Sensors'].map((tech) => (
                    <span key={tech} className='text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: AI & Computer Vision */}
          <div className='group relative p-4 sm:p-6 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-start lg:justify-between w-[80vw] max-w-[310px] sm:w-[350px] sm:max-w-none flex-shrink-0 lg:w-auto lg:flex-shrink snap-center lg:snap-align-none h-[380px] sm:h-[400px] lg:h-auto'>
            <div>
              <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-2.5 sm:mb-4 text-neutral-200'>
                <Eye size={18} className='sm:w-5 sm:h-5' />
              </div>
              <h3 className='text-base sm:text-xl font-semibold text-neutral-100 mb-1.5 sm:mb-3'>Computer Vision</h3>
              <p className='text-xs sm:text-sm text-neutral-400 mb-3 sm:mb-6 leading-relaxed'>
                Image processing, dataset collection, model training, and object detection for automated systems.
              </p>
            </div>
            
            <div className='space-y-2.5 sm:space-y-4 pt-2.5 sm:pt-4 border-t border-neutral-800/60'>
              <div>
                <span className='text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1 sm:mb-2'>Tools & Libraries</span>
                <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                  {['Python', 'OpenCV', 'Dataset Prep', 'Object Detection'].map((tech) => (
                    <span key={tech} className='text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: AI Workflow & Assistant */}
          <div className='group relative p-4 sm:p-6 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-start lg:justify-between w-[80vw] max-w-[310px] sm:w-[350px] sm:max-w-none flex-shrink-0 lg:w-auto lg:flex-shrink snap-center lg:snap-align-none h-[380px] sm:h-[400px] lg:h-auto'>
            <div>
              <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-2.5 sm:mb-4 text-neutral-200'>
                <Sparkles size={18} className='sm:w-5 sm:h-5' />
              </div>
              <h3 className='text-base sm:text-xl font-semibold text-neutral-100 mb-1.5 sm:mb-3'>AI Workflow</h3>
              <p className='text-xs sm:text-sm text-neutral-400 mb-3 sm:mb-6 leading-relaxed'>
                Leveraging AI tools efficiently to accelerate boilerplate generation, structure data, and style UI components.
              </p>
            </div>
            
            <div className='space-y-2.5 sm:space-y-4 pt-2.5 sm:pt-4 border-t border-neutral-800/60'>
              <div>
                <span className='text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1 sm:mb-2'>Integration & Practices</span>
                <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                  {['Prompt Engineering', 'JSON Formatting', 'UI Component Styling', 'API Integration'].map((tech) => (
                    <span key={tech} className='text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/50'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ข้อความบอกใบ้สำหรับการเลื่อนซ้าย-ขวาบนหน้าจอมือถือและแท็บเล็ต */}
        <div className='flex lg:hidden items-center justify-between mt-3 px-1 text-[11px] text-neutral-500 font-mono shrink-0'>
          <span className='flex items-center gap-1.5'>
            <span className='inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse'></span>
            Swipe horizontally to explore
          </span>
          <span className='text-[10px] px-2.5 py-0.5 rounded-full bg-neutral-800/90 border border-neutral-700/50 text-neutral-400 font-medium'>
            4 Cards
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skill;
