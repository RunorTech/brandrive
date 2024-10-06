import Container from '@/components/custom_ui/Container'
import IncomeCont from '@/components/custom_ui/IncomeCont'
import React from 'react'
import { FaBook } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import TransactionCon from '@/components/custom_ui/TransactionCon';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Network from '@/components/custom_ui/Network';
import { RiArrowDropDownLine } from 'react-icons/ri';

const page = () => {
  return (
    <div className='bg-gray-100 h-full p-6'>
      <p className='text-xl font-thin mb-2'>Hi Personal,</p>
      <p className='text-3xl text-slate-700 mb-10'>Welcome back 👋</p>

      <Container>
        <div className='mb-10 flex justify-between items-center'>
          <div className='grid grid-cols-[20px_minmax(200px,_1fr)]'>
            <span className='bg-orange-500 h-5 w-2 rounded-t-full rounded-b-full'></span>
            <p className='text-blue-800 text-sm'>Account Summary</p>
          </div>
          <div className='bg-gray-100 px-2 py-1 text-xs font-thin flex items-center'>Today <span className='text-3xl'><RiArrowDropDownLine/></span></div>
        </div>
        <div className='grid grid-cols-2 gap-3 mt-8'>
          <IncomeCont svg={FaBook} text="Income" balance="48,000" color={true} />
          <IncomeCont svg={AiOutlinePieChart} text="Expenses" balance="8,000" color={false} />
        </div>

      </Container>

      <Container>
        <div className='flex justify-between gap-8 items-center'>
          <div className='flex gap-4'>
          <Network />
          </div>
          <div className=' flex gap-4 w-[25rem]'>
          <button className=' w-full py-[0.45rem] text-center text-xs font-thin border-[1px] border-black border-dashed'>Pay Bill</button>
          <button className=' w-full py-[0.45rem] text-center  text-xs font-thin border-[1px] border-black border-dashed'>Buy Airtime or Data</button>
          </div>
         
      </div>
      </Container>
      
      <Container>
        <div className='mb-10'>
          <div className='grid grid-cols-[20px_minmax(200px,_1fr)] place-content-center'>
            <span className='bg-orange-500 h-5 w-2 rounded-t-full rounded-b-full'></span>
            <p className='text-blue-800 text-base font-semibold'>Most Recent Transactions</p>
          </div>
        </div>
        <div>
          <TransactionCon svg={FaArrowUp} />
          <TransactionCon svg={FaArrowDown} />
          <TransactionCon svg={FaArrowDown} />
          <TransactionCon svg={FaArrowDown} />
          <TransactionCon svg={FaArrowDown} />
        </div>
      </Container>

    </div>
  )
}

export default page
