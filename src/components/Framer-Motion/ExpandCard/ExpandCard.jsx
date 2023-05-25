import React, { useState } from 'react'
import { motion } from 'framer-motion'

function ExpandCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='h-screen bg-gradient-to-r from-teal-600 to-teal-900 to- '>
      <div className='min-h-screen flex justify-center items-center'>
        <motion.div
          layout
          transition={{ layout: { duration: 0.7, type: 'spring', stiffness: 60 } }}
          onClick={() => setIsOpen(!isOpen)}
          className='bg-white py-12 px-20 select-none'
          style={{ borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
        >
          <motion.h2 layout='position' className='text-4xl font-bold'>
            Some text
          </motion.h2>
          {isOpen && (
            <motion.div className='w-80' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
              <p className='pt-4 leading-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam laboriosam ipsam ipsa deleniti rerum ipsum ea necessitatibus
                sapiente expedita!
              </p>
              <p className='pt-4 leading-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, explicabo.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ExpandCard
