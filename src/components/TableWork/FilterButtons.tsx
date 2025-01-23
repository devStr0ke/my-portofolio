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
      <div className="flex gap-4">
        <RoundedButton
          href="#"
          onClick={() => setFilter('All')}
          color="light"
          size="custom"
          customSize={{
            width: 'w-[130px]',
            padding: 'py-7',
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
            width: 'w-[200px]',
            padding: 'py-7',
            superscriptRight: 'right-12 top-5',
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
            width: 'w-[200px]',
            padding: 'py-7',
            superscriptRight: 'right-12 top-5',
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