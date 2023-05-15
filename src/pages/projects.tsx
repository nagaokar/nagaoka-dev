import React, { useState } from "react";
import Image from "next/image";
import { Post, posts } from '../lib/ContentDatabase';
import Layout from "@/components/layouts/layout";
import Gallery from "@/components/Gallery";
import FilterMenu from "@/components/FilterMenu";
import Footer from "@/components/Footer";
import Nav from "@/components/NavBar";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Layout
        titleProps={{
          title: 'Projects',
          type: 'none',
          titleProps: 'flex justify-center -rotate-3',
        }}
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
        <section id="projectListContainer" className="flex justify-start">
          <Gallery selectedCategory={selectedCategory} />
        </section>
      </Layout>
    </>
  );
}