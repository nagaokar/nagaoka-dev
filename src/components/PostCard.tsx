import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { Post } from '../lib/ContentDatabase'

import CircledArrow from '../icons/undraw/undraw_circled-arrow.svg'
import ExpandIcon from '../icons/undraw/undraw_circled-plus.svg'

export interface PostProps {
  post: Post
  index: number
}

export function PostCard({ post, index }: PostProps) {
  const [open, setOpen] = useState(false)

  const renderLinkSection = () => {
    if (!post.link) return null
    return (
      <>
        {/* START: MORE INFO LINK */}
        <div className="flex flex-row items-center justify-start">
          <p className="flex align-text-bottom text-sm ">more info.</p>
          <div className="mx-3 mt-1 flex flex-row ">
            {/* START: IMAGE LINK */}
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
          {/* END: IMAGE LINK */}
        </div>
        {/* END: MORE INFO LINK */}
      </>
    )
  }

  const renderDescSection = () => {
    if (!post.desc) return null
    return (
      <>
        {/* START: CARD DESCRIPTION */}
        <div className="py-2">
          <Disclosure>
            {({ open }) => (
              /* Use the `open` state to conditionally change the direction of an icon. */
              <>
                <div className="flex flex-row">
                  <Disclosure.Button>
                    <div className={open ? 'rotate-90 transform' : ''}>
                      <Image
                        src={ExpandIcon}
                        width={25}
                        height={40}
                        alt="sketched line drawing of circle with an addition symbol inside."
                      />
                    </div>
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel>
                  <div>{post.desc}</div>
                  <div className="flex justify-start">
                    {renderLinkSection()}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        {/* END: CARD DESCRIPTION */}
      </>
    )
  }

  // Filter out empty fields in the post object
  const filteredPost = Object.fromEntries(
    Object.entries(post).filter(([_, value]) => value !== '')
  )
  return (
    <div
      id={filteredPost.tag}
      className="my-1 flex flex-row xs:text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"
    >
      {/* START: CARD DATE */}
      <div className="mr-2 flex w-12 flex-col font-bold text-red-500">
        <p>{filteredPost.date}</p>
      </div>
      {/* END: CARD DATE */}
      {/* START: CARD TITLE CONTAINER*/}
      <div className="mb-1 flex w-72 flex-row border-b-2 border-black px-2 pb-2 xs:pr-12 sm:pr-10 md:pr-8 lg:pr-6 xl:pr-12">
        {/* START: CARD TITLE SUB-CONTAINER */}
        <div className="flex flex-col">
          {/* CARD TITLE */}
          <p className="font-bold">{filteredPost.title}</p>
          {/* CARD ORGANISATION */}
          <p>{filteredPost.organisation}</p>
          <div className="flex flex-row">
            <div className="flex flex-col">{renderDescSection()}</div>
          </div>
        </div>
        {/* END: CARD TITLE SUB-CONTAINER */}
      </div>
      {/* END: CARD TITLE CONTAINER*/}
    </div>
  )
}
