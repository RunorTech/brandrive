import React from 'react'
interface TransactionConProps {
    svg: React.ElementType; // Type for a React component
}
const TransactionCon: React.FC<TransactionConProps> = ({svg: SvgIcon}) => {
  return (
    <div className='flex gap-3 items-center  bg-gray-100 p-4 mb-4'>
      <div className=' rounded-full bg-green-300 p-1 text-xs'><SvgIcon /></div>
      <div className='grid grid-cols-2 grid-rows-2 w-full'>
        <p className='text-xs'>personal wallet funding from brandrive</p><span className='place-self-end font-thin text-sm border-[1px] px-2 border-black'>NGN</span>
        <p className='text-xs'>100</p><span className='place-self-end text-xs'>5th Dec 2024</span>
    </div>
    </div>
  )
}

export default TransactionCon
