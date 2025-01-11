import {
  motion
} from "framer-motion";

export const WhatIdoSection = () => {
  return (
    <section
      className="min-h-screen bg-neutral-950 text-neutral-100"
    >
      <div className="flex flex-col h-screen ml-4 sm:ml-8 max-w-[90%] sm:max-w-[75%] md:max-w-[90%] lg:max-w-[68%] md:mx-auto">
        <motion.div className="flex flex-col">
          <span className="text-neutral-500 font-bold text-base uppercase mb-6 block tracking-widest">
            What I Do
          </span>
          
          <div>
            <WhatIdoItem title="Web Architecture" description="Designing scalable, maintainable, and efficient web systems to support seamless user experiences." />
            <WhatIdoItem title="API Integration" description="Connecting applications with third-party services or internal systems via robust APIs." />
            <WhatIdoItem title="Web3 Development" description="Building decentralized apps (dApps) and integrating blockchain technologies." />
            <WhatIdoItem title="Performance Tuning" description="Optimizing code and infrastructure to ensure fast, reliable, and efficient applications." />
            <WhatIdoItem title="UI/UX Design" description="Transforming designs into responsive, accessible, and user-friendly web interfaces." />
            {/* ... other skills ? idk maybe ... */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhatIdoItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="relative mb-0 group"
    >
      {/* Background div that extends full width - removed top/bottom inset */}
      <div 
        className="absolute inset-y-0 w-screen left-[50%] -translate-x-1/2 bg-indigo-600 transition-[clip-path] duration-300 ease-in-out"
        style={{
          clipPath: "inset(50% 0 50%)",
        }}
      />

      {/* Content container */}
      <div className="flex items-center justify-between pb-9 relative z-8 py-6"> {/* Added relative and z-10 */}
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="mb-1.5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-black text-neutral-500 uppercase relative group-hover:text-neutral-950 transition-colors duration-300">
              {title}
            </p>
            <p className="text-sm uppercase text-neutral-400 group-hover:text-neutral-950 transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Border */}
      <div className="absolute bottom-0 left-[50%] h-px w-screen -translate-x-1/2 border-b border-zinc-800" />
    </motion.div>
  );
};