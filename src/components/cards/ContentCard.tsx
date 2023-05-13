import React from "react";
import { useState } from "react";
import Image from "next/image";

import CircledArrow from "../../icons/undraw/undraw_circled-arrow.svg";

export interface Post {
  title: string;
  organisation: string;
  desc: string;
  link: string;
  date: string;
  tag: string;
}

export interface PostProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostProps) {
  const [open, setOpen] = useState(false);

  const renderLinkSection = () => {
    if (!post.link) return null;

    return (
      <>
        {/* START: MORE INFO LINK */}
        <div className="mt-2 flex flex-row align-middle">
          <div className="flex flex-row">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              more info.
            </a>
          </div>
          <div className="mx-3 flex flex-row">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <Image
                className="-rotate-90"
                src={CircledArrow}
                width={25}
                height={50}
                alt="a line drawing of an arrow inside a circle"
              />
            </a>
          </div>
        </div>
        {/* END: MORE INFO LINK */}
      </>
    );
  };

  return (
    <div id={post.tag} className="my-1 flex flex-row xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
      {/* START: CARD DATE */}
      <div className="mr-2 flex w-12 flex-col font-bold text-red-500">
        <p>{post.date}</p>
      </div>
      {/* END: CARD DATE */}
      {/* START: CARD TITLE CONTAINER*/}
      <div className="mb-1 flex w-72 flex-row border-b-2 border-black px-2 pb-2 xs:pr-12 sm:pr-10 md:pr-8 lg:pr-6 xl:pr-12">
        {/* START: CARD TITLE SUB-CONTAINER */}
        <div className="flex flex-col">
          {/* CARD TITLE */}
          <p className="font-bold">{post.title}</p>
          {/* CARD ORGANISATION */}
          <p>{post.organisation}</p>
          {renderLinkSection()}
        </div>
        {/* END: CARD TITLE SUB-CONTAINER */}
      </div>
      {/* END: CARD TITLE CONTAINER*/}
    </div>
  );
}
