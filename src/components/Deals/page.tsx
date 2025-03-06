import React from 'react'
import { SiDashlane } from 'react-icons/si'

const DealOfTheDay = ({text}: {text: string}) => {
  return (
    <div className='flex p-5 gap-10 my-3 bg-tertiary-dark items-center border border-secondary-dark rounded-xl'>
      <SiDashlane size={30}/>
    <div className="flex flex-col gap-1">
        <h2 className='font-medium text-lg '>Deal of the day</h2>
        <p className='text-text-paragraph text-lg'>{text}</p>
    </div>
    </div>
  )
}

export default DealOfTheDay
