import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import greenImages from '../../../assets/green/greenImages'

function ImageSlider() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className=' min-h-screen mx-[20%] my-1'>
      <motion.div ref={carousel} className=' cursor-[grab] overflow-hidden ' whileTap={{ cursor: 'grabbing' }}>
        <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='flex'>
          {greenImages && greenImages.length
            ? greenImages.map((image, index) => {
                return (
                  <motion.div className=' min-h-[40rem] min-w-[30rem] mr-10 p-10'>
                    <img className='w-full h-full rounded-[2rem] block pointer-events-none' src={image} alt='' />
                  </motion.div>
                )
              })
            : null}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ImageSlider
