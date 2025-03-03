import React from 'react'

const CarouseLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='container 2xl:px-20 flex font-[family-name:var(--font-geist-sans)]  flex-col mt-16 gap-6'>
      {children}
    </div>
  )
}

export default CarouseLayout
