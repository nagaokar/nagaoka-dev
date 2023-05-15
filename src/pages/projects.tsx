import React, { useState } from "react";
import Image from "next/image";
import { Post, posts } from '../lib/ContentDatabase';
import Layout from "@/components/layouts/layout";
import Gallery from "@/components/Gallery";
import FilterMenu from "@/components/FilterMenu";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <section id="galleryFilterMenu">
        <FilterMenu
          categories={['all', 'employment', 'game', 'education', 'academic', 'hobby']}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
      </section>
      <section id="projectListContainer" className="flex justify-start">
        <Gallery selectedCategory={selectedCategory} />
      </section>
    </>
  );
}
