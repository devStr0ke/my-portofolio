import React from 'react';
import { RoundedButton } from '../RoundedButton';

export default function Content() {
  return (
    <div className="relative h-full w-full">
      <div className='bg-indigo-600 text-white py-72 px-4 sm:px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
      </div>
      <div className="absolute bottom-12 left-0 w-full max-w-screen-lg px-4 sm:px-12">
        <Section3 />
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-8'>
      <h1 className='text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-semibold text-neutral-950'>
        Let’s collaborate
      </h1>
      <div className='w-full border-t border-neutral-950 mt-4'></div>
    </div>
  );
}

const Section2 = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-8'>
      <RoundedButton color='neutral' backgroundColor='#0a0a0a' href="/contact">
        Get in touch
      </RoundedButton>
      <RoundedButton color='neutral' size='large' backgroundColor='#0a0a0a' href="mailto:samuel.coelho@voidsoftware.com">
        samuel.coelho@voidsoftware.com
      </RoundedButton>
    </div>
  );
}

const Section3 = () => {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const updateTime = () => {
      const parisTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(`${parisTime} GMT+1`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-between lg:justify-start gap-8 text-sm text-neutral-950'>
      <div className='flex flex-col'>
        <div className='text-xs mb-1'>VERSION</div>
        <div className='font-bold'>2025 © Edition</div>
      </div>
      <div className='flex flex-col items-end lg:items-start'>
        <div className='text-xs mb-1'>LOCAL TIME</div>
        <div className='font-bold'>{time}</div>
      </div>
    </div>
  );
};