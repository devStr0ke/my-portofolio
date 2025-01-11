import { motion } from "framer-motion";

type HistoryItem = {
  year: string;
  title: string;
  company: string;
};

const historyItems: HistoryItem[] = [
  {
    year: "NOW",
    title: "Freelance Developer",
    company: "I work with a lot of clients"
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Dassault Systèmes : React and Node.js"
  },
  {
    year: "2022",
    title: "Frontend Developer",
    company: "INSPI : Vue.js"
  }
];

export const HistorySection = () => {
  return (
    <section className="h-screen bg-neutral-950 text-neutral-100">
      <div className="flex flex-col h-full ml-4 sm:ml-8 max-w-[90%] sm:max-w-[75%] md:max-w-[90%] lg:max-w-[68%] md:mx-auto">
        <motion.div className="flex flex-col">
          <span className="text-neutral-500 font-bold text-base uppercase mb-6 block tracking-widest">
            History
          </span>
          
          <div className="text-start">
            {historyItems.map((item, index) => (
              <HistoryItem key={index} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HistoryItem = ({
  year,
  title,
  company,
}: HistoryItem) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="relative mb-0 group"
    >
      {/* Background div */}
      <div 
        className="absolute inset-y-0 w-screen left-[50%] -translate-x-1/2 bg-indigo-600 transition-[clip-path] duration-300 ease-in-out"
        style={{
          clipPath: "inset(50% 0 50%)",
        }}
      />

      {/* Content container */}
      <div className="flex gap-20 sm:gap-32 md:gap-48 items-start relative z-8 py-10 text-neutral-500 hover:text-neutral-950 transition-colors duration-300">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
          {year}
        </span>
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
            {title}
          </h3>
          <p className="text-xs lg:text-sm mt-2">
            {company}
          </p>
        </div>
      </div>

      {/* Border */}
      <div className="absolute bottom-0 left-[50%] h-px w-screen -translate-x-1/2 border-b border-zinc-800" />
    </motion.div>
  );
};