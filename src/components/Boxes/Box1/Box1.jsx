import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Box1() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className='pb-20'>
      <motion.div
        className='w-20 h-20 flex bg-emerald-400 justify-center items-center'
        onClick={() => setIsToggled(!isToggled)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ x: isToggled ? 1200 : 0 }}
        initial={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      ></motion.div>
    </div>
  )
}
