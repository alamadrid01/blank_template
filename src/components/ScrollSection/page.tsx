"use client"
import React, { useState } from 'react'
import {motion, useScroll, AnimatePresence} from "motion/react"
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const ScrollSection = () => {
    const tabs = [
        {id: 1, title: "Explore", icon: "🔥", color: "text-blue-600", color_gradient: "from-blue-600 to-blue-200", background: "before:bg-blue-600", main_color:'bg-blue-600', sectionTitle: 'Drive more Traffic',
            content: [
                "Repurpose your website into powerful marketing content for any channel",
                "Generate a high-volume of long-form posts and landing pages in minutes",
                "Find the right words to engage your niche and grow your brand",
            ]
        },
        {id: 2, title: "Popular", icon: "😎", color:"text-purple-600", color_gradient: "from-purple-600 to-purple-200", background: "before:bg-purple-600", main_color:'bg-purple-600', sectionTitle: 'Grow your Brand',
            content: [
                "Generate high-converting, SEO-friendly product descriptions for your online store",
                "Get creative ideas on how to better market your products to your niche",
                "Get recommendations on how to improve your e-commerce website UX",
            ]
        },
        {id: 3, title: "New", icon: "🆕", color: "text-green-600", color_gradient: "from-green-600 to-green-200", background: "before:bg-green-600", main_color:'bg-green-600', sectionTitle: 'Drive your Sales',
            content: [
                "Get recommendations on how to improve your e-commerce website UX",
                "Generate high-converting, SEO-friendly product descriptions for your online store",
                "Get creative ideas on how to better market your products to your niche",
            ]
        },
        {id: 4, title: "Trending", icon: "📈", color: "text-yellow-600", color_gradient: "from-yellow-600 to-yellow-200", background: "before:bg-yellow-600", main_color:'bg-yellow-600', sectionTitle: 'Attract more Customer',
            content: [
                "Get creative ideas on how to better market your products to your niche",
                "Generate high-converting, SEO-friendly product descriptions for your online store",
                "Get recommendations on how to improve your e-commerce website UX",
            ]
        },,
        {id: 5, title: "Top Rated", icon: "🌟", color: "text-red-600", color_gradient: "from-red-600 to-red-200", background: "before:bg-red-600", main_color:'bg-red-600', sectionTitle: 'Convert more Leads',
            content: [
                "Find the right words to engage your niche and grow your brand",
                "Generate a high-volume of long-form posts and landing pages in minutes",
                "Repurpose your website into powerful marketing content for any channel",
            ]
        },
    ]

    const textVariants = {
        initialLeft: { x: -80, opacity: 0 }, 
        initialRight: { x: 80, opacity: 0 }, 
        animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
        exitLeft: { x: -50, opacity: 0, transition: { duration: 0.3 } }, 
        exitRight: { x: 50, opacity: 0, transition: { duration: 0.3 } }, 
      };
      

    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [lastTab, setLastTab] = useState(tabs[0]);
    const direction = selectedTab!.id > lastTab!.id ? "initialRight" : "initialLeft";

  return (
    <div className='flex max-w-7xl container flex-col items-center justify-center pt-32 pb-24'>
      <h1 className='text-6xl text-center font-bold leading-[1.25]'>Get tailored content to
      <AnimatePresence mode="wait">
        <motion.span
          key={selectedTab?.sectionTitle}
          initial={textVariants[direction]}
          animate="animate"
          exit={direction === "initialRight" ? "exitLeft" : "exitRight"}
          variants={textVariants}
          className={`bg-clip-text block text-transparent bg-gradient-to-r ${selectedTab?.color} ${selectedTab?.color_gradient}`}
        >
          {selectedTab?.sectionTitle}
        </motion.span>
      </AnimatePresence>
      </h1>

      <div className="w-full flex items-center gap-16 justify-center border-b border-secondary-light pb-3 mt-12">
            {tabs.map((tab, index) => (
                <motion.li
                key={index}
                className="cursor-pointer relative flex gap-1 items-center"
                onClick={()=>{
                    setSelectedTab(tab)
                    setLastTab(selectedTab)
                }}
                >
                    <p
                    className="text-normal font-medium select-none">{tab?.title}</p>
                   <AnimatePresence>
                   {selectedTab?.title === tab?.title && (
                    <motion.div
                    layoutId="underline" id="underline"
                    className={`h-0.5 w-28 ${selectedTab?.main_color} absolute -bottom-3 -left-7`}></motion.div>
                    )}
                   </AnimatePresence>
                </motion.li>
            ))}
      </div>

      <div className="grid grid-cols-6 space-x-24 mt-12">
        <div className="col-span-2 flex flex-col gap-3">
            <h3 className='font-semibold text-2xl text-text-header'>Grow & engage audience faster</h3>
            {
                selectedTab?.content.map((content, index) => (
                    <GrowthCard key={index} color={selectedTab.color} content={content} />
                ))
            }
            <button className={`w-full ${selectedTab?.main_color} py-3 mt-3 text-text-header mr-12 font-medium flex items-center justify-center rounded-lg`}>
                Get Started 
                <IoIosArrowForward />
            </button>
        </div>
        <div className="col-span-4 pr-12 relative">
        <div className={`bg-secondary-dark before:absolute before:h-72 before:-top-10 before:inset-[25rem] before:blur-3xl before:opacity-40 z-5 before:w-72 before:rounded-full ${selectedTab?.background} z-5 w-full h-full rounded-lg`}></div>
        </div>
      </div>
    </div>
  )
}

export default ScrollSection


const GrowthCard = ({color, content}: {color: string, content: string}) => {
    return (
        <div className={`flex items-center gap-3 pr-4 pt-3`}>
            <IoCheckmarkSharp size={28} className={color} />
            <p className='text-[15px] font-semibold leading-6 text-text-paragraph'>{content}</p>
        </div>
    )
}