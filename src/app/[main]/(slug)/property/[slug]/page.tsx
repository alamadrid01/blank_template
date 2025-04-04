'use client'
import ClickableButtons from '@/components/Buttons/page'
import DealOfTheDay from '@/components/Deals/page'
import Others from '@/components/Other/page'
import Image from 'next/image'
import React from 'react'
import { CiStar } from 'react-icons/ci'
import { GrFavorite } from 'react-icons/gr'
import { LuShare2 } from 'react-icons/lu'

const PropertySlug = ({params}: {params: {slug: string}}) => {
  return (
    <div className='flex relative w-full h-full'>
      <div className="w-full h-[780px] absolute left-0 top-0"
      style={{ 
        backgroundImage: `url("/images/house.webp")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',

       }}
      >
      </div>
      <div className="flex container mt-16 gap-8 2xl:px-32 z-10">
        <div className="flex flex-col gap-1 overflow-hidden max-w-[68rem] box-border">
          <Image src="/images/house.webp" className='rounded-xl w-[1100px] h-[500px] object-cover' width={1200} height={1200} alt='house-image' />
          <div className="mt-8 flex flex-col gap-5">
            <p className="uppercase text-text-paragraph text-sm font-medium">Orleans, Massachusetts</p>
            <div className="w-full flex items-center justify-between">
              <h1 className="font-[family-name:var(--font-nav)] font-extrabold text-7xl text-white">Wander Cape Cod</h1>
              <div className="flex gap-4 items-center">
                <ClickableButtons text='Share now' icon={<LuShare2 />} action={() => {}} />
                <ClickableButtons text='Add to favorite' icon={<GrFavorite />} action={() => {}} />
              </div>
            </div>
            <p className="text-text-secondary font-[family-name:var(--font-geist-sans)] font-normal text-[17px] leading-9">
            “View morning sunlight!” is one of my common refrains. Viewing sunlight within the first hours of waking (as soon as you can, even if through cloud cover) increases early-day cortisol release (the ideal time for elevated cortisol) and prepares the body for sleep later that night. A morning spike in cortisol will also positively influence your immune system, metabolism and ability to focus during the day.
            “The single best thing you can do for your sleep your energy your mood your wakefulness your metabolism is to get natural light in your eyes early in the day. This is grounded in the core of our physiology. There are literally hundreds, if not thousands, of quality peer-reviewed papers showing that light viewing early in the day is the most powerful stimulus for wakefulness throughout the day and it has a powerful, positive impact on your ability to fall and stay asleep at night. So this is really the foundational power tool for ensuring a great night’s sleep and for feeling more awake during the day.”
            </p>
            <DealOfTheDay text='Get 20% off on your first booking with a special deal awaiting you' />
            <Others />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Image src="/images/tr.jpg" className='rounded-lg w-full object-cover' width={600} height={600} alt='house-image' />
          <Image src="/images/house.webp" className='rounded-lg w-full object-cover' width={600} height={600} alt='house-image' />
        </div>
      </div>
    </div>
  )
}

export default PropertySlug
