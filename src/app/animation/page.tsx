"use client"
import React, { useState } from 'react'
import {AnimatePresence, motion, useScroll} from "motion/react"

const Animation = () => {
    const  {scrollYProgress} = useScroll()
  return (
    <div className=' mb-[100rem] mt-20 flex flex-col gap-20 items-center justify-center'>
      <motion.div
      initial={{ x: -100 }}
      whileHover={{ scale: 1.1 }}
      animate={{ x: 100, rotate: 360 }}
      onDoubleClick={() => console.log('double click')}
      transition={{ duration: 2 }}
      style={{ 
        scaleX: scrollYProgress,
       }}
      className=' h-20 w-20 cursor-pointer absolute top-[60rem] rounded-md bg-blue-500'>

      </motion.div>
    </div>
  )
}

export default Animation
