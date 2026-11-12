import { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <footer className='w-full bg-[#0d0f12] text-white border-t border-neutral-800/80 pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='mb-6 sm:mb-8 text-left md:text-center'>
          <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-800/80 text-neutral-300 border border-neutral-700/60 mb-2 sm:mb-3'>
            Contact Information
          </span>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-100'>
            Contact Me
          </h2>
          <p className='text-xs sm:text-sm md:text-base text-neutral-400 mt-2 max-w-xl md:mx-auto'>
            If you're interested in working together, discussing a project, or would like to chat, feel free to contact me through the channels below.
          </p>
        </div>

        {/* 3 Contact Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10'>
          
          {/* Card 1: Email */}
          <div className='group relative p-4 sm:p-5 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between'>
            <div className='flex items-start justify-between mb-3 sm:mb-4'>
              <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-neutral-200 border border-neutral-700/50 group-hover:border-neutral-500 transition-colors'>
                <Mail size={18} />
              </div>
              <button
                type='button'
                onClick={() => handleCopy('poonwry2003@gmail.com', 'email')}
                className='text-xs font-mono px-2 sm:px-2.5 py-1 rounded-md bg-neutral-800/60 hover:bg-neutral-700/80 text-neutral-400 hover:text-neutral-200 border border-neutral-700/50 transition flex items-center gap-1.5'
                title='Copy Email'
              >
                {copiedField === 'email' ? (
                  <>
                    <Check size={12} className='text-emerald-400' />
                    <span className='text-emerald-400'>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <span className='text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1'>
                Email
              </span>
              <a
                href='mailto:poonwry2003@gmail.com'
                className='text-sm sm:text-base font-medium text-neutral-200 hover:text-white transition flex items-center gap-1 group/link'
              >
                <span className='break-all'>poonwry2003@gmail.com</span>
                <ArrowUpRight size={14} className='opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0' />
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className='group relative p-4 sm:p-5 rounded-2xl bg-[#14171c] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between'>
            <div className='flex items-start justify-between mb-3 sm:mb-4'>
              <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center text-neutral-200 border border-neutral-700/50 group-hover:border-neutral-500 transition-colors'>
                <Phone size={18} />
              </div>
              <button
                type='button'
                onClick={() => handleCopy('064-168-0612', 'phone')}
                className='text-xs font-mono px-2 sm:px-2.5 py-1 rounded-md bg-neutral-800/60 hover:bg-neutral-700/80 text-neutral-400 hover:text-neutral-200 border border-neutral-700/50 transition flex items-center gap-1.5'
                title='Copy Phone Number'
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check size={12} className='text-emerald-400' />
                    <span className='text-emerald-400'>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <span className='text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1'>
                Phone
              </span>
              <a
                href='tel:0641680612'
                className='text-sm sm:text-base font-medium text-neutral-200 hover:text-white transition flex items-center gap-1 group/link'
              >
                <span>064-168-0612</span>
                <ArrowUpRight size={14} className='opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0' />
              </a>
            </div>
          </div>

          

        </div>

        {/* Bottom copyright line */}
        <div className='pt-6 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-500 font-mono text-center sm:text-left'>
          <p>© {CURRENT_YEAR} Poonyawe Tason. All rights reserved.</p>
          <p>Portfolio Website</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
