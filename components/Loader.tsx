import React from 'react'
import Icon from './custom_ui/Icon'

const Loader = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-24 h-24 rounded-lg shadow-lg shadow-slate-300'>
                <Icon />
            </div>
        </div>
    )
}

export default Loader
