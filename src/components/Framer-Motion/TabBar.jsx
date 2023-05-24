// A simple tab bar with a pill indicator slider that animates between tabs.
// The pill indicator is animated using Framer Motion’s layoutId prop.
// The tabs are defined as an array of objects with an id and label.
import React, { useState } from 'react'
import { motion } from 'framer-motion'

// The tabs are defined as an array of objects with an id and label.
let tabs = [
  { id: 'world', label: 'World' },
  { id: 'ny', label: 'NY' },
  { id: 'politics', label: 'Politics' },
  { id: 'business', label: 'Business' },
  { id: 'technology', label: 'Technology' },
]

export default function TabBar() {
  // The active tab state is used to animate the pill indicator.
  let [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className='bg-neutral-100 flex justify-center items-center h-screen'>
      <div>
        <div className=' flex space-x-1'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${activeTab === tab.id ? '' : 'hover:text-neutral-500'}
              rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 relative outline-sky-400 focus-visible:outline transition`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId='active-pill'
                  transition={{ type: 'spring', stiffness: 20, damping: 6 }}
                  className='absolute inset-0 bg-black'
                  style={{ borderRadius: 9999 }}
                ></motion.div>
              )}
              <span className='relative z-10 mix-blend-exclusion'>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
