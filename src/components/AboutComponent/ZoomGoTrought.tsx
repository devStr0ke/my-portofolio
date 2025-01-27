import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';

export default function ZoomImageGrow() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]); // Start at half size and grow to full size

  // Define the images and their properties
  const images = [
    {
      name: "coffeePortugal.png",
      size: { width: 250, height: 250 },
      position: { top: '22%', left: '30%' },
      zIndex: 1,
      speed: 1,
      vanishPoint: 0.4
    },
    {
      name: "extraction.png",
      size: { width: 200, height: 150 },
      position: { top: '30%', left: '60%' },
      zIndex: 2,
      speed: 0.1,
      vanishPoint: 0.55
    },
    {
      name: "grains.png",
      size: { width: 300, height: 400 },
      position: { top: '50%', left: '40%' },
      zIndex: 3,
      speed: 0.05,
      vanishPoint: 0.8
    },
    {
      name: "hayuco.png",
      size: { width: 250, height: 250 },
      position: { top: '45%', left: '60%' },
      zIndex: 4,
      speed: 0.2,
      vanishPoint: 0.75
    },
    {
      name: "sanzone.png",
      size: { width: 200, height: 110 },
      position: { top: '20%', left: '25%' },
      zIndex: 5,
      speed: 0.01,
      vanishPoint: 0.4
    }
  ];

  const yTransforms = images.map((image) =>
    useTransform(scrollYProgress, [0, 1], [300, -300 * Math.pow(image.speed, 2)]) // Use exponential scaling
  );

  const opacityTransforms = images.map((image) =>
    useTransform(scrollYProgress, [image.vanishPoint, image.vanishPoint + 0.1], [1, 0]) // Fade out based on vanishPoint
  );

  return (
    <div ref={container} className="h-[300vh] relative">
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

      {/* Additional Images */}
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              y: yTransforms[index],
              opacity: opacityTransforms[index],
              top: image.position.top,
              left: image.position.left,
              zIndex: image.zIndex
            }}
          >
            <Image
              src={`https://supabase.mge-dashboard.pro/storage/v1/object/public/portofolio/bw/${image.name}`}
              alt={image.name}
              width={image.size.width}
              height={image.size.height}
              objectFit="contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}