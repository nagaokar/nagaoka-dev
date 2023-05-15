import React, { useState } from "react";
import Image from "next/image";
import { Post, posts } from '../lib/ContentDatabase';
import Layout from "@/components/layouts/layout";
import Gallery from "@/components/Gallery";
import FilterMenu from "@/components/FilterMenu";

import curvedUnderline from '../icons/undraw/undraw_curved-underline.svg'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Layout>
        <div className="font-bold my-3 flex flex-col text-5xl items-center text-center mb-12">
          <p className="-rotate-2">Projects</p>
          <Image
            className="justify-center"
            src={curvedUnderline}
            width={200}
            height={100}
            alt=""
          />
          </div>

        <section id="projectListContainer" className="flex flex-col justify-start ">
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
      </Layout>
    </>
  );
}