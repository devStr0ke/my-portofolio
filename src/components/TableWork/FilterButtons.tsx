'use client';
import { RoundedButton } from '../RoundedButton';

interface FilterButtonsProps {
  filter: 'All' | 'Full Stack' | 'Front End';
  setFilter: (filter: 'All' | 'Full Stack' | 'Front End') => void;
  counts: {
    fullStack: number;
    frontEnd: number;
  };
}

export const FilterButtons = ({ filter, setFilter, counts }: FilterButtonsProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex gap-2 lg:gap-4">
        <RoundedButton
          href="#"
          onClick={() => setFilter('All')}
          color="light"
          size="custom"
          customSize={{
            width: 'w-[70px] text-xs sm:w-[130px] sm:text-base',
            padding: 'py-3 sm:py-5 md:py-7',
          }}
          active={filter === 'All'}
        >
          All
        </RoundedButton>
        <RoundedButton
          href="#"
          onClick={() => setFilter('Full Stack')}
          color="light"
          active={filter === 'Full Stack'}
          size="custom"
          customSize={{
            width: 'w-[110px] text-xs sm:w-[180px] sm:text-base md:w-[220px]',
            padding: 'py-3 sm:py-5 md:py-7',
            superscriptRight: 'right-5 top-1 text-[0.55rem] sm:right-11 sm:top-3 md:text-xs md:right-14 md:top-6',
          }}
          superscript={counts.fullStack}
        >
          Full Stack
        </RoundedButton>
        <RoundedButton
          href="#"
          onClick={() => setFilter('Front End')}
          color="light"
          active={filter === 'Front End'}
          size="custom"
          customSize={{
            width: 'w-[110px] text-xs sm:w-[180px] sm:text-base md:w-[220px]',
            padding: 'py-3 sm:py-5 md:py-7',
            superscriptRight: 'right-5 top-1 text-[0.55rem] sm:right-11 sm:top-3 md:text-xs md:right-14 md:top-6',
          }}
          superscript={counts.frontEnd}
        >
          Front End
        </RoundedButton>
      </div>
      
      {/* Right-side buttons */}
      <div className="flex gap-4">
      </div>
    </div>
  );
};