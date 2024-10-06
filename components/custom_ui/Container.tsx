import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
  }

const Container = ({children} : ContainerProps) => {
  return (
    <div className='bg-white w-[calc(100vw-675px)] rounded-lg p-8 mt-6'>
    {children}
  </div>
  )
}

export default Container;