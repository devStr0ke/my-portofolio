'use client';
import Character from '@/components/Character';

const paragraph = "I'm a skilled developer focused on creating efficient, scalable web solutions & exploring the potential of web3."

export const AboutSection = () => {
  return (
    <main className='flex justify-center items-center h-screen'>
      <Character paragraph={paragraph} />
    </main>
  )
}