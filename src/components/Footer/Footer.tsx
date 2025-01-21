import React from 'react'
import Content from './Content';

export default function Footer() {
  return (
    <div
      id='main-footer'
      className='relative h-[100vh]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[100vh] w-full'>
        <Content />
      </div>
    </div>
  )
}