import React from 'react'
import SideBar from "@/components/SideBar";
import { ScrollArea } from "@/components/ui/scroll-area"
import RightSideBar from '@/components/RightSideBar';
import BarIcon from '@/components/custom_ui/BarIcon';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className='grid grid-cols-[275px_minmax(700px,_1fr)_179px] h-screen'>
      <div className=''>
        <SideBar />
      </div>
      <ScrollArea>
        {children}
      </ScrollArea>
      <div className='bg-blue-700 h-full w-full relative'>
        <div className='mt-12'>
          <BarIcon />
        </div>
        <div className='absolute -left-[9.5rem] h-full top-0 flex items-center'>
          <RightSideBar />
        </div>
      </div>
    </main>
  );
}