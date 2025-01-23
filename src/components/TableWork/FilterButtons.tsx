'use client';
import { RoundedButton } from '../RoundedButton';

interface FilterButtonsProps {
  filter: 'All' | 'Full Stack' | 'Front End';
  setFilter: (filter: 'All' | 'Full Stack' | 'Front End') => void;
  counts: {
    fullStack: number;
    frontEnd: number;
  };
  view: 'grid' | 'list';
  setView: (view: 'grid' | 'list') => void;
}

export const FilterButtons = ({ filter, setFilter, counts, view, setView }: FilterButtonsProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      {/* Left side - Filter buttons */}
      <div className="flex gap-2 xl:gap-4">
        <RoundedButton
          href="#"
          onClick={() => setFilter('All')}
          color="light"
          size="custom"
          customSize={{
            width: 'w-[80px] text-xs sm:w-[100px] xl:w-[130px] sm:text-base',
            padding: 'py-4 sm:py-5 xl:py-7',
          }}
          active={filter === 'All'}
        >
          All
        </RoundedButton>
        <RoundedButton
          href="#"
          onClick={() => setFilter('Full Stack')}
          color="light"
          size="custom"
          customSize={{
            width: 'w-[120px] text-xs sm:w-[150px] sm:text-base xl:w-[220px]',
            padding: 'py-4 sm:py-5 xl:py-7',
            superscriptRight: 'right-6 top-5 text-[0.55rem] sm:right-7 sm:top-6 xl:text-xs xl:right-14 xl:top-6',
          }}
          active={filter === 'Full Stack'}
          superscript={counts.fullStack}
        >
          Full Stack
        </RoundedButton>
        <RoundedButton
          href="#"
          onClick={() => setFilter('Front End')}
          color="light"
          size="custom"
          customSize={{
            width: 'w-[120px] text-xs sm:w-[150px] sm:text-base xl:w-[220px]',
            padding: 'py-4 sm:py-5 xl:py-7',
            superscriptRight: 'right-6 top-5 text-[0.55rem] sm:right-7 sm:top-6 xl:text-xs xl:right-14 xl:top-6',
          }}
          active={filter === 'Front End'}
          superscript={counts.frontEnd}
        >
          Front End
        </RoundedButton>
      </div>
      
      {/* Right side - View toggle buttons */}
      <div className="hidden lg:flex gap-2">
        <RoundedButton
          href="#"
          onClick={() => setView('list')}
          color="light"
          size="custom"
          customSize={{
            width: 'w-[75px]',
            padding: 'py-7',
          }}
          active={view === 'list'}
          className="relative"
        >
          <div className="flex flex-col gap-[3px] items-start">
            <div className="w-4 h-[2px] bg-current"></div>
            <div className="w-4 h-[2px] bg-current"></div>
            <div className="w-4 h-[2px] bg-current"></div>
          </div>
        </RoundedButton>
        <RoundedButton
          href="#"
          onClick={() => setView('grid')}
          color="light"
          size="custom"
          customSize={{
            width: 'w-[75px]',
            padding: 'py-7',
          }}
          active={view === 'grid'}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-1">
            <div className="w-[6px] h-[6px] bg-current"></div>
            <div className="w-[6px] h-[6px] bg-current"></div>
            <div className="w-[6px] h-[6px] bg-current"></div>
            <div className="w-[6px] h-[6px] bg-current"></div>
          </div>
        </RoundedButton>
      </div>
    </div>
  );
};