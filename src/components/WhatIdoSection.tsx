import {
  motion
} from "framer-motion";

type WhatIdoItem = {
  title: string;
  description: string;
};

const items: WhatIdoItem[] = [
  {
    title: "Web Architecture",
    description: "Designing scalable, maintainable, and efficient web systems",
  },
  {
    title: "API Integration",
    description: "Connecting applications with third-party services",
  },
  {
    title: "Web3 Development",
    description: "Building decentralized apps (dApps) and integrating blockchain technologies.",
  },
  {
    title: "Performance Tuning",
    description: "Optimizing code and infrastructure to ensure fast, reliable, and efficient applications.",
  },
  {
    title: "UI/UX Design",
    description: "Transforming designs into responsive, accessible, and user-friendly web interfaces.",
  },
];

export const WhatIdoSection = () => {
  return (
    <section
      className="min-h-min bg-neutral-950 text-neutral-100"
    >
      <div className="flex flex-col h-min max-w-[90%] lg:max-w-[68%] mx-auto">
        <motion.div className="flex flex-col">
          <span className="text-neutral-200 font-bold text-base uppercase mb-6 block tracking-widest font-orbitron">
            What I Do
          </span>
          
          
          <div>
            {items.map((item, index) => (
              <WhatIdoItem key={index} {...item} />
            ))}
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
      <div className="flex items-center justify-between pb-9 relative z-8 py-6">
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="mb-1.5 text-2xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-bold text-neutral-500 relative group-hover:text-neutral-950 transition-colors duration-300">
              {title}
            </p>
            <p className="text-xs sm:text-sm tracking-tight font-semibold text-neutral-400 group-hover:text-neutral-950 transition-colors duration-300">
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