import React from 'react'
import Network from './Network'
import Container from './Container'

const NetTab = () => {
  return (
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
  )
}

export default NetTab
