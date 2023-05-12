import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@/components/layout';

import ghost from '../icons/undraw/undraw_ghost.svg'
import EmailIcon from '../icons/remix/mail-line.svg'
import linkedInIcon from '../icons/remix/linkedin-box-line.svg'
import TwitterIcon from '../icons/remix/twitter-line.svg'

export default function Contact() {
  return(
  //START: HOME PAGE CONTAINER
  <main>
    <Layout>
      {/* START: MAIN CONTENT CONTAINER */}
      <section className='flex flex-row h-screen justify-center overflow-y-hidden xs:p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 '>
        {/* START: PAGE TITLE CONTAINER*/}
        <div className='flex flex-col justify-center text-end'>
          <p className='font-bold origin-top-left -rotate-6 xs:text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl'>
            contact
          </p>  
          {/* START: GHOST IMAGE*/}
          <div className='flex flex-col justify-center'>
            <Image className='mr-8 ml-2 translate-y-6 xs:w-28 sm:w-21 md:w-28 lg:w-28 xl:w-32'
              src={ghost} width={150} height={50} alt='line drawing of a ghost'
              />
          </div>
          {/* END: GHOST IMAGE*/}
        </div>
        {/* END: PAGE TITLE CONTAINER */}
        {/* START: CONTACT TEXT CONTAINER*/}
        <div className='flex flex-row flex-wrap justify-center text-start'>
          {/* START: CONTACT TEXT*/}
          <div className='flex flex-col justify-center ml-3'>
            <p className='mx-1 xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl mt-5'>
              if you&apos;d like to get in touch, you can do so via:   
            </p>
            {/* START: SOCIAL MEDIA LINKS CONTAINER */}
            <div className='flex flex-row mt-5 justify-center'>
              {/* START: EMAIL */}
              <div className='flex flex-col text-center align-middle justify-center mx-3'>
                {/* SOCIAL MEDIA IMAGE: LINKEDIN */}
                <div className='flex flex-row justify-center'>
                <a href='mailto:nagaoka.ra@gmail.com'>
                    <Image src={EmailIcon} width={40} height={150}
                    alt='A black and white outline of the Linked in logo.       '
                    />
                  </a>
                </div>
                {/* SOCIAL MEDIA TEXT: EMAIL */}
                <div className='flex flex-col font-bold text-center align-middle justify-center'>
                  <a href='mailto:nagaoka.ra@gmail.com'>
                    <p>email</p>
                  </a>
                </div>
              </div>
              {/* END: EMAIL */}
              {/* START: LINKEDIN */}
              <div className='flex flex-col text-center align-middle justify-center mx-3'>
                {/* SOCIAL MEDIA IMAGE: LINKEDIN */}
                <div className='flex flex-row justify-center'>
                <a href='https://www.linkedin.com/in/reiji-n-5767b312a/' target="_blank" rel="noopener noreferrer">
                    <Image src={linkedInIcon} width={40} height={150}
                    alt='A black and white outline of the Linked in logo.       '
                    />
                  </a>
                </div>
                {/* SOCIAL MEDIA TEXT: LINKEDIN */}
                <div className='flex flex-col font-bold text-center align-middle justify-center'>
                  <a href='https://www.linkedin.com/in/reiji-n-5767b312a/' target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  </a>
                </div>
              </div>
              {/* END: LINKEDIN */}
              {/* START: TWITTER */}
              <div className='flex flex-col text-center align-middle justify-center mx-3'>
                {/* SOCIAL MEDIA IMAGE: TWITTER */}
                <div className='flex flex-row justify-center'>
                <a href="https://twitter.com/nagaokadev" target="_blank" rel="noopener noreferrer">
                    <Image src={TwitterIcon} width={40} height={150} alt='A black and white outline of the Linked in logo.       '
                    />
                </a>
                </div>
                {/* SOCIAL MEDIA TEXT: TWITTER */}
                <div className='flex flex-col font-bold text-center align-middle justify-center'>
                    <a href="https://twitter.com/nagaokadev" target="_blank" rel="noopener noreferrer">
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
      </section>
      {/* END: MAIN CONTENT CONTAINER */}
    </Layout>
    {/* END: HOME SCREEN CONTENT */}
  </main>
  //END: HOME PAGE CONTAINER
  )
}