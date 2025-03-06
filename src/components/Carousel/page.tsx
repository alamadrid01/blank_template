'use client'
import React, { useState } from 'react'
import { MdOutlineHotelClass } from "react-icons/md";
import {
  GiLipstick,
  GiJewelCrown,
  GiInvisibleFace,
  GiPerfumeBottle,
} from "react-icons/gi";
import { TiWatch } from "react-icons/ti";
import { SiStyledcomponents } from "react-icons/si";
import { useRouter } from 'next/navigation';
import { ImMakeGroup } from 'react-icons/im';
import { TbPerfume } from 'react-icons/tb';
import CarouseLayout from '../Layouts/CarouseLayout/page';
import Image from 'next/image';
import { MdOutlinePersonSearch } from "react-icons/md";
import { CiLink } from 'react-icons/ci';
import Link from 'next/link';

const Carousel = () => {
    const [active, setActive] = useState(1);
    const router = useRouter();

    const tags = ["Nearby", "Popular", "New", "Trending", "Top Rated"];
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

      const handleNavigation = (path: string, id: number) => () => {
        setActive(id);
        router.push(path);
      };


  return (
    <CarouseLayout>
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
      </div>
      <div className="flex flex-wrap mb-20">
            {[...Array(10)].map((_, index) => (
                <CarouselCards 
                key={index}
                big={false}
                upperTag="Nearby cooling spot"
                upperLogo={<MdOutlineHotelClass />}
                isFavorite={true}
                image="/images/im.webp"
                title="The Beauty Bar"
                rating={4.5}
                reviews={23}
                location="Lekki, Lagos"
            />
                ))}
        </div>
    </CarouseLayout>
  )
}

export default Carousel


const Applications = ({
    text,
    routing,
    icons,
    isActive,
  }: {
    text: string;
    icons: any;
    routing: () => void;
    isActive: boolean;
  }) => {
    return (
      <div
        onClick={routing} 
        className={`text-[14px]  ${
          isActive ? "text-white font-medium" : "text-zinc-400/90"
        } font-sans hover:font-medium hover:text-white relative cursor-pointer`}
      >
        <div className="flex gap-1.5 items-center">
          {icons}
          {text}
        </div>
        {isActive && <Underline />}
      </div>
    );
  };
  
  const Underline = () => (
    <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-white"></div>
  );


export const CarouselCards = ({upperTag, big, upperLogo, isFavorite, image, title, rating, reviews, location}: {upperTag: string, big:boolean, upperLogo: any, isFavorite: boolean, image: string, title: string, rating: number, reviews: number, location: string}) => {
    return (
        <Link href="/property/trick" className={`relative mb-5 p-2 ${ !big ? "2xl:w-1/5 xl:w-2/6 md:w-1/2 group" : "2xl:w-1/3 md:w-1/2"} w-full  overflow-hidden`}>
            <div className="relative h-72">
                <Image src={image} alt={title} width={600} height={600} className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-300 delay-75 object-cover" />
                <div className="absolute top-2 right-2">
                    <button className="p-2 bg-secondary-light/40 hover:bg-secondary-light/70 rounded-full shadow-lg">{""}
                        <MdOutlineHotelClass className="text-text-header" />
                    </button>
                </div>
                <div className="absolute bottom-2 left-2">
                    <div className="flex items-center gap-1.5">
                        <GiLipstick className="text-white" />
                        <p className="text-white font-medium">Beauty</p>
                    </div>
                </div>
            </div>
            <div className="p-1.5 flex flex-col items-start">
                <p className="text-zinc-400 uppercase text-[0.7rem] font-medium">{location}</p>
                <p className="text-text-header capitalize font-medium">{title}
                    <span className='text-text-header/90 font-normal normal-case text-[12px] ml-6 py-1 px-2 bg-secondary-light/70 rounded-md cursor-pointer'> <CiLink className='inline -ml-1 mr-0.5' /> Make an offer</span>
                </p>
               <div className="flex items-center gap-1.5">
               <p className="text-text-paragraph flex items-center gap-1 mt-1.5 text-sm font-normal">
                    Meant for.
                    <span className='text-text-header mr-1.5'>{upperTag}</span>
                    | <MdOutlinePersonSearch className='text-text-secondary ml-1.5' /> <span className="text-text-header">23</span>
                </p>
               </div>
            </div>
        </Link>
    )}