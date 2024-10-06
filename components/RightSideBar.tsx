import React from 'react'
import CardOne from './custom_ui/CardOne'
import CardTwo from './custom_ui/CardTwo'

const RightSideBar = () => {
  return (
    <div className='flex flex-col gap-5'>
      <CardOne/>
      <CardTwo/>
    </div>
  )
}

export default RightSideBar
