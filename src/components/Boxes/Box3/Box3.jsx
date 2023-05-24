import React from 'react'
import { motion } from 'framer-motion'

export default function Box3() {
  const boxVariant = {
    hidden: {
      x: '-20vw',
    },
    visible: {
      x: 0,
      staggerChildren: 0.6,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
      },
    },
  }
  const listVariant = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  }

  return (
    <div className='pb-20'>
      <motion.div className='w-20 h-20 flex bg-emerald-400 justify-center items-center' variants={boxVariant} animate='visible' initial='hidden'>
        {[1, 2, 3].map(box => {
          return <motion.li key={box} className='w-3 h-3 bg-black list-none m-1 ' variants={listVariant}></motion.li>
        })}
      </motion.div>
    </div>
  )
}
