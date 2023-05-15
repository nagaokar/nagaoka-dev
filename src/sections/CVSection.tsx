import React from "react";
import Image from 'next/image'
import { posts } from '../lib/ContentDatabase'
import { textData } from '../lib/TextDatabase'

import PostCard from '../components/PostCard'

import PostList from '../components/PostList'
import Title from '../components/Title'
import Underline from '../icons/undraw/undraw_underline.svg'
import StarIcon from '../icons/undraw/undraw_star.svg'


export default function CVSection() {
  const CurvedUnderlineAlt = 'a black hand-drawn curved underline';
  const UnderlineAlt = 'a black hand-drawn straight underline';

  const employmentPosts = posts.filter((post) => post.tag === 'employment');
  const academicPosts = posts.filter((post) => post.tag === 'academic');
  const educationPosts = posts.filter((post) => post.tag === 'education');
  const gamesPosts = posts.filter((post) => post.tag === 'game');

  return (
    <section id="cv">
      <section id="cvTitle">
        <Title title="CV" type="star" />
      </section>
      <section id="cvContent"
        className="flex flex-row-reverse flex-wrap justify-center">
        <div id="cv-column" className="flex flex-col">
          <PostList title="Academic" posts={academicPosts} />
          <PostList title="Games" posts={gamesPosts} />
        </div>
        <div id="cv-column" className="flex flex-col">
          <PostList title="Employment" posts={employmentPosts} />
          <PostList title="Education" posts={educationPosts} />
        </div>
      </section>
    </section>
  )
}