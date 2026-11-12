import { AnimatedText } from "../component/AnimatedText";
import bgImage from "../images/S__28917763.jpg"; 

export const Introduce = () => {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center h-full text-white">
        <div className="w-full h-screen p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <AnimatedText
            text="Hallo!"
            tag="h2"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
            transition={{ duration: 0.8, delay: 0, ease: "easeInOut" }}
            viewport={{ once: false }}
          />

          <AnimatedText
            text="I'm Poonyawe Tason"
            tag="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 sm:mt-3 lg:mt-5 text-neutral-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
            transition={{ duration: 1.2, delay: 0, ease: "easeInOut" }}
            viewport={{ once: false }}
          />

          <AnimatedText
            text="A Website and IoT developer interested in backend systems, databases, and REST APIs, 
              with the ability to build frontend interfaces for system integration and data visualization. 
              Experienced in real-time sensor-to-web integration, alongside basic skills in Computer Vision and AI for image processing."
            tag="p"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-110 mt-4 sm:mt-6 lg:mt-10 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
            transition={{ duration: 1.5, delay: 0, ease: "easeInOut" }}
            viewport={{ once: false }}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
