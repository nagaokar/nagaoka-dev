import React, { useState } from 'react'
import Image from 'next/image'
import { Post, posts } from '../lib/ContentDatabase'
import Layout from '@/components/layouts/layout'
import Gallery from '@/components/Gallery'
import FilterMenu from '@/components/FilterMenu'
import curvedUnderline from '../icons/undraw/undraw_curved-underline.svg'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <>
        {/* START: TITLE */}
        <div className='flex justify-center text-6xl mt-3 mb-12 -rotate-3'>
          <p>projects</p>
        </div>
        {/* END: TITLE */}
        <section
          id="projectListContainer"
          className="flex flex-col justify-start "
        >
          <section id="galleryFilterMenu">
            <FilterMenu
              categories={[
                'all',
                'academic',
                'computational design',
                'publication',
                'talk',
                'web development',
                'game',
                'music',
              ]}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </section>
          <Gallery selectedCategory={selectedCategory} />
        </section>
    </>
  )
}
