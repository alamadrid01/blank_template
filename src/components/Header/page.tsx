"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Applications } from '../Carousel/page'
import { useRouter } from 'next/navigation'
import { MdOutlineHotelClass } from 'react-icons/md'
import { SiStyledcomponents } from 'react-icons/si'
import { ImMakeGroup } from 'react-icons/im'
import { GiInvisibleFace, GiJewelCrown, GiLipstick, GiPerfumeBottle } from 'react-icons/gi'
import { TbPerfume } from 'react-icons/tb'
import { TiWatch } from 'react-icons/ti'

const Header = () => {
  const { scrollY } = useScroll()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState(1);
  const router = useRouter();
  
const tags = ["Nearby", "Popular", "New", "Trending", "Top Rated"];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });
  
  const handleNavigation = (path: string, id: number) => () => {
    setActive(id);
    router.push(path);
  };

  const icons = [
      <MdOutlineHotelClass key="hotel" />,
      <SiStyledcomponents key="styled" />,
      <ImMakeGroup key="group" />,
      <GiInvisibleFace key="face" />,
      <TbPerfume key="tbPerfume" />,
      <GiPerfumeBottle key="perfumeBottle" />,
      <MdOutlineHotelClass key="hotel2" />,
      <GiLipstick key="lipstick" />,
      <GiJewelCrown key="crown" />,
      <TiWatch key="watch" />,
    ];  



  return (
    <div
      style={{ backdropFilter: scrollPosition > 220 ? 'blur(20px)' : 'none' }}
      className={`container 2xl:px-20 sticky top-0 left-0 z-20 h-[120px] w-full ${scrollPosition > 220 ? "bg-black/50": ""} flex flex-col gap-5 -pt-2`}>
        <div className="flex w-full items-center justify-between pt-2">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <h1 className="text-3xl text-text-header font-[family-name:var(--font-nav)] -ml-2 font-semibold">Threadamp</h1>
        </Link>
          <p className={`text-text-header text-sm ${scrollPosition > 0 ? 'hidden' : 'block'}`}>
              Spring is coming. 
              <span className="text-text-paragraph">Get 20% off in the next template i work on bro</span>
              Threadamp20
          </p>
            <div className={`flex z-10 ${scrollPosition > 220 ? 'block' : 'hidden'} items-center`}>
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
          <button className="group flex h-8 w-8 flex-col items-end justify-evenly z-50 relative after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:h-10 after:w-10 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-lg hover:after:bg-secondary-dark" aria-label="Navigation toggle" type="button">
          <div className=" w-[1.6rem] rounded-full border-t-[1.5px] border-white transition duration-300"></div>
          <div className=" rounded-full border-t-[1.5px] border-white transition duration-300 w-[21px]"></div>
          <div className=" rounded-full border-t-[1.5px] border-white transition duration-300 w-[15px]"></div>
          </button>
        </div>
        {scrollPosition > 350 && (
          <div className=" scrollbar-hide overflow-x-auto overflow-y-hidden whitespace-nowrap border-b pb-1.5 flex gap-7 md:gap-10 border-zinc-700 w-full">
          <Applications
          icons={null}
          text="All locations"
          routing={handleNavigation("/", 1)}
          isActive={active === 1}
          />
          {tags.map((item: any, index: number) => (
          <Applications
              key={index}
              icons={icons[index]}
              text={item}
              routing={handleNavigation(
              `/?feed=${item.split(" ").join("-").toLowerCase()}`,
              index + 2
              )}
              isActive={active === index + 2}
          />
          ))}
      </div>)}
    </div>
  )
}

export default Header
