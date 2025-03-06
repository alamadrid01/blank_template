import React from 'react'
import { CarouselCards } from '../Carousel/page'
import { MdOutlineHotelClass } from 'react-icons/md'

const Others = () => {
  return (
    <div className='flex mt-20 flex-col gap-3'>
      <h2 className='uppercase text-text-secondary text-[13px]'>Tour other information</h2>
        <h3 className="font-bold text-text-header text-4xl font-[family-name:var(--font-geist-sans)]">Guests who liked this also explored:</h3>
         <div className="flex mb-20 relative">
            {[...Array(3)].map((_, index) => (
                <CarouselCards 
                key={index}
                big={true}
                upperTag="Nearby cooling spot"
                upperLogo={<MdOutlineHotelClass />}
                isFavorite={true}
                image="/images/chair.webp"
                title="The Beauty Bar"
                rating={4.5}
                reviews={23}
                location="Lekki, Lagos"
            />
                ))}
                <div className="bg-gradient-to-r from-black/10 blur-sm via-black to-black right-0 absolute top-0 h-full w-24"></div>
                </div>
    </div>
  )
}

export default Others
