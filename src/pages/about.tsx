import React from "react";

import { posts } from "../lib/ContentDatabase";
import { PostCard } from "../components/PostCard";

import SubTitle from "../components/SubTitle";
import Underline from "../icons/undraw/undraw_underline.svg";

import Layout from "@/components/layouts/layout";

export default function About() {
  const employmentPosts = posts.filter((post) => post.tag === "employment");
  const academicPosts = posts.filter((post) => post.tag === "academic");
  const educationPosts = posts.filter((post) => post.tag === "education");
  const gamesPosts = posts.filter((post) => post.tag === "game");

  return (
    <>
      <Layout>
        <div className="flex flex-row flex-wrap">
          <div>
            <SubTitle title="education" underlineSrc={Underline} rotation="-rotate-2"/>
            {educationPosts.map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
          </div>
          <div>
          <SubTitle title="employment" underlineSrc={Underline} rotation="rotate-3"/>
            {employmentPosts.map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
          </div>
          <div>
          <SubTitle title="academic" underlineSrc={Underline} rotation="-rotate-3"/>
            {academicPosts.map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
          </div>
          <div>
          <SubTitle title="games" underlineSrc={Underline} rotation="rotate-2"/>
            {gamesPosts.map((post, index) => (
              <PostCard key={index} post={post} index={index} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
