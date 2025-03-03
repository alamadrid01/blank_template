import Image from 'next/image'
import React from 'react'
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='container flex font-[family-name:var(--font-geist-sans)] items-center flex-col justify-center mt-6 gap-6'>
      <h1 className='text-[2.5rem] font-extrabold font-[family-name:var(--font-nav)] text-text-header'>Find your happy place</h1>
      <p className="text-text-secondary leading-6 font-[family-name:var(--font-geist-sans)] max-w-2xl text-center">
        Book a Wander with inspiring views, hotel-grade amenities, dreamy beds, top-tier cleaning and 24/7 concierge service. It’s a vacation home, but better.
      </p>
      <div className="flex items-center gap-2">
        <div className="flex">
            <Image src="/a.webp" alt="sample_human" width={300} height={300} className="rounded-full w-8 object-cover h-8" />
            <Image src="/b.webp" alt="sample_human" width={300} height={300} className="rounded-full w-8 object-cover -ml-1.5 h-8" />
            <Image src="/c.webp" alt="sample_human" width={300} height={300} className="rounded-full w-8 object-cover -ml-1.5 h-8" /> 
            <Image src="/d.webp" alt="sample_human" width={300} height={300} className="rounded-full w-8 object-cover -ml-1.5 h-8" /> 
            <Image src="/e.webp" alt="sample_human" width={300} height={300} className="rounded-full w-8 object-cover -ml-1.5 h-8" /> 
        </div>
        <p className="text-text-paragraph font-[family-name:var(--font-geist-sans)] text-sm">and 1000+ more happy guests</p>
      </div>
      <div className="flex items-center">
        <div className="rounded-tl-md cursor-pointer rounded-bl-md border border-secondary-light items-center gap-2 flex py-2.5 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.3em"
                height="1.3em"
                >
                <path
                    fill="currentColor"
                    d="M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192M5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6zm7 4.539q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M12 18q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T12 18m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T8 18m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T16 18"
                ></path>
            </svg>
            <p className="text-text-header text-[15px]">Wherever</p>
        </div>
        <div className="cursor-pointer border-t border-b border-secondary-light items-center gap-2 flex py-2.5 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.3em"
                height="1.3em"
                >
                <path
                    fill="currentColor"
                    d="M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192M5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6zm7 4.539q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M12 18q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T12 18m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T8 18m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T16 18"
                ></path>
            </svg>
            <p className="text-text-header text-[15px]">Whenever</p>
        </div>
        <div className=" cursor-pointer border border-secondary-light items-center gap-2 flex py-2.5 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.3em"
                height="1.3em"
                >
                <path
                    fill="currentColor"
                    d="M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192M5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6zm7 4.539q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M12 18q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T12 18m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T8 18m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T16 18"
                ></path>
            </svg>
            <p className="text-text-header text-[15px]">Filter</p>
        </div>
        <div className=" cursor-pointer relative border-t border-b border-r rounded-tr-md min-w-[350px] rounded-br-md border-secondary-light items-center gap-2 h-[2.8rem] flex py-1.5 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.3em"
                height="1.3em"
                >
                <path
                    fill="currentColor"
                    d="M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192M5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6zm7 4.539q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M12 18q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T12 18m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T8 18m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T16 18"
                ></path>
            </svg>
            <input type='text' className='bg-transparent focus:border-none focus:outline-none text-sm w-full' placeholder='Search anything with Threadamp AI' />
            <div className="bg-secondary-dark absolute right-2 w-fit rounded-md py-2 px-2 box-border">
                <CiSearch color='white' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
