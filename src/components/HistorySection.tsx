import { motion } from "framer-motion";

type HistoryItem = {
  year: string;
  title: string;
  company: string;
  description: string;
};

const historyItems: HistoryItem[] = [
  {
    year: "NOW",
    title: "Freelance Developer",
    company: "I work with different clients",
    description: "Developed a Shopify-like application for managing stock and quotes."
  },
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Dassault Systèmes",
    description: "Developed scalable UI/UX solutions for a large application using React and Node.js."
  },
  {
    year: "2022",
    title: "Frontend Developer",
    company: "INSPI & Innersense",
    description: "Revamped an old app's frontend by rebuilding it in Vue.js with modern UI/UX enhancements."
  },
  {
    year: "2019",
    title: "University Student",
    company: "University Paul Sabatier",
    description: "Studied Computer Science at UPS from 2019 to 2024 (Master's degree)"
  }
];

export const HistorySection = () => {
  return (
    <section className="bg-neutral-950 text-neutral-100">
      <div className="flex flex-col h-full max-w-[90%] lg:max-w-[68%] mx-auto">
        <motion.div className="flex flex-col">
          <span className="text-neutral-200 font-bold text-base uppercase mb-6 block tracking-widest ml-0">
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
  description,
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
      <div className="flex gap-6 sm:gap-32 md:gap-48 items-start relative z-8 py-10 text-neutral-500 hover:text-neutral-950 transition-colors duration-300">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold -ml-0">
          {year}
        </span>
        <div className="w-full text-right">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
            {title}
          </h3>
          <div className="relative h-6"> {/* Container for both texts */}
            <p className="text-xs lg:text-sm xl:text-base font-semibold mt-2 absolute right-0 transition-all duration-300 ease-in-out opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-1">
              {company}
            </p>
            <p className="text-xs text-neutral-950 lg:text-sm xl:text-base font-semibold mt-2 absolute right-0 transition-all duration-300 ease-in-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
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