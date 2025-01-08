'use client'
import { useMask } from '@/components/MaskProvider/MaskProvider';

export default function Home() {
  const { setIsHovered } = useMask();

  return (
    <div 
    >
      <div className="flex justify-center items-center text-white text-4xl h-screen">
        <p 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </div>
    </div>
  )
}