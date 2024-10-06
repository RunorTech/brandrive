import React from 'react'
import IncomeCont from './IncomeCont'
import { AiOutlinePieChart } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa6'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Container from './Container'

const AccountSum = () => {
  return (
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
  )
}

export default AccountSum
