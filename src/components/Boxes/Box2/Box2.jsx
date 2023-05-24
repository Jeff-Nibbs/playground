import React from 'react'
import { motion } from 'framer-motion'

export default function Box2() {
  return (
    <div className='pb-20'>
      <motion.div
        className='w-20 h-20 flex bg-emerald-400 justify-center items-center'
        drag
        dragConstraints={{ left: 0, right: 1200, top: -200, bottom: 350 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>
    </div>
  )
}
