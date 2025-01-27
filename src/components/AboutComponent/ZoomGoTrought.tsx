import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ZoomImageGrow() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]); // Start at half size and grow to full size

  return (
    <div ref={container} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale }}
        >
          <div className="relative w-[100vw] h-[100vh]">
            <motion.div
              className="absolute w-full h-full"
              style={{
                backgroundImage: "url(https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/bw/coffee.png)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}