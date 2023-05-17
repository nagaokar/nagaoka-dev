import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '@/components/layouts/layout'

import ghost from '../icons/undraw/undraw_ghost.svg'
import EmailIcon from '../icons/remix/mail-line.svg'
import linkedInIcon from '../icons/remix/linkedin-box-line.svg'
import TwitterIcon from '../icons/remix/twitter-line.svg'
import Nav from '@/components/NavBar'

export default function Contact() {
  return (
    //START: CONTACT PAGE CONTAINER
    <>
      {/* START: MAIN CONTENT CONTAINER */}
      <section className="flex h-screen flex-row justify-center overflow-y-hidden px-4" >
        {/* START: PAGE TITLE CONTAINER*/}
        < div className="flex flex-col justify-center text-end" >
          <p
            className="origin-top-left -rotate-6 font-bold 
          xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl"
          >
            contact
          </p>
          {/* START: GHOST IMAGE*/}
          <div className="flex flex-col justify-center">
            <Image
              className="sm:w-21 ml-2 mr-8 translate-y-6 xs:w-28 md:w-28 lg:w-28 xl:w-32"
              src={ghost}
              width={150}
              height={50}
              alt="line drawing of a ghost"
            />
          </div>
          {/* END: GHOST IMAGE*/}
        </div >
        {/* END: PAGE TITLE CONTAINER */}
        {/* START: CONTACT TEXT CONTAINER*/}
        <div className="flex flex-row flex-wrap justify-center text-start">
          {/* START: CONTACT TEXT*/}
          <div className="ml-3 flex flex-col justify-center">
            <p className="mx-1 mt-5 xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl">
              if you&apos;d like to get in touch, you can do so via:
            </p>
            {/* START: SOCIAL MEDIA LINKS CONTAINER */}
            <div className="mt-5 flex flex-row justify-center">
              {/* START: EMAIL */}
              <div className="mx-3 flex flex-col justify-center text-center align-middle">
                {/* SOCIAL MEDIA IMAGE: LINKEDIN */}
                <div className="flex flex-row justify-center">
                  <a href="mailto:nagaoka.ra@gmail.com">
                    <Image
                      src={EmailIcon}
                      width={40}
                      height={150}
                      alt="A black and white outline of the Linked in logo.       "
                    />
                  </a>
                </div>
                {/* SOCIAL MEDIA TEXT: EMAIL */}
                <div className="mx-3 flex flex-col justify-center text-center align-middle">
                  <a href="mailto:nagaoka.ra@gmail.com">
                    <p>email</p>
                  </a>
                </div>
              </div>
              {/* END: EMAIL */}
              {/* START: LINKEDIN */}
              <div className="mx-3 flex flex-col justify-center text-center align-middle">
                {/* SOCIAL MEDIA IMAGE: LINKEDIN */}
                <div className="flex flex-row justify-center">
                  <a
                    href="https://www.linkedin.com/in/reiji-n-5767b312a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={linkedInIcon}
                      width={40}
                      height={150}
                      alt="A black and white outline of the Linked in logo.       "
                    />
                  </a>
                </div>
                {/* SOCIAL MEDIA TEXT: LINKEDIN */}
                <div className="flex flex-col justify-center text-center align-middle">
                  <a
                    href="https://www.linkedin.com/in/reiji-n-5767b312a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              {/* END: LINKEDIN */}
              {/* START: TWITTER */}
              <div className="mx-3 flex flex-col justify-center text-center align-middle">
                {/* SOCIAL MEDIA IMAGE: TWITTER */}
                <div className="flex flex-row justify-center">
                  <a
                    href="https://twitter.com/nagaokadev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={TwitterIcon}
                      width={40}
                      height={150}
                      alt="A black and white outline of the Linked in logo.       "
                    />
                  </a>
                </div>
                {/* SOCIAL MEDIA TEXT: TWITTER */}
                <div className="flex flex-col justify-center text-center align-middle">
                  <a
                    href="https://twitter.com/nagaokadev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    twitter
                  </a>
                </div>
              </div>
              {/* END: TWITTER */}
            </div>
            {/* END: SOCIAL MEDIA LINKS CONTAINER */}
          </div>
          {/* END: CONTACT TEXT*/}
        </div>
        {/* END: CONTACT TEXT CONTAINER*/}
      </section >
      {/* END: MAIN CONTENT CONTAINER */}
    </>
    //END: CONTACT PAGE CONTAINER
  )
}
