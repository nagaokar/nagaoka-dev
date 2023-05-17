import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Projects from './projects'
import Contact from './contact'
import Layout from '@/components/layouts/layout'
import { textData } from '@/lib/TextDatabase'
import Title from '@/components/Title'
import Spacer from '@/components/Spacer'
import Gallery from '@/components/Gallery'
import FilterMenu from '@/components/FilterMenu'
import ghost from '../icons/undraw/undraw_ghost.svg'
import EmailIcon from '../icons/remix/mail-line.svg'
import linkedInIcon from '../icons/remix/linkedin-box-line.svg'
import TwitterIcon from '../icons/remix/twitter-line.svg'

export default function Index() {
	const taglineText = textData.find((item) => item.tag === 'tagline')
	const academicProfileText = textData.find((item) => item.tag === 'academicProfile')
	const developerProfileText = textData.find((item) => item.tag === 'developerProfile')
	if (!taglineText) { return null }
	if (!academicProfileText) { return null }
	if (!developerProfileText) { return null }

	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const handleCategorySelect = (category: string) => {
			setSelectedCategory(category)
	}

	return (
		<Layout>
			<main>
				<section id="home">
					<main className="h-screen w-screen overflow-y-hidden">
						{/* START: MAIN CONTENT CONTAINER */}
						<section
							id="intro"
							className="flex h-screen justify-center overflow-y-hidden align-middle"
						>
							{/* START: INTRO IMAGE*/}
							<div className="flex flex-row justify-center align-middle">
								<Image
									className="mx-7 xs:w-32 sm:w-48 md:w-48 lg:w-48 xl:w-48"
									src={ghost}
									width={150}
									height={150}
									alt="line drawing of a ghost"
								/>
							</div>
							{/* END: INTRO IMAGE*/}
							{/* START: INTRO TEXT CONTAINER*/}
							<div className="flex -translate-y-10 flex-row justify-center align-middle">
								{/* START: INTRO TEXT*/}
								<div className="flex flex-col justify-center font-bold">
									<p
										className="origin-top-left -translate-x-8 -rotate-12
                xs:text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl
                "
									>
										hi!
									</p>
									<p className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl">
										I&apos;m reiji nagaoka.
									</p>
									<p
										className="xs:text-md font-thin xs:w-48 sm:w-64 sm:text-lg md:w-64 md:text-lg lg:w-72 lg:text-xl xl:w-72 xl:text-2xl
                ">
										scholar, game maker, web developer, writer.
									</p>
								</div>
								{/* END: INTRO TEXT*/}
							</div>
							{/* END: INTRO TEXT CONTAINER*/}
						</section>
						{/* END: MAIN CONTENT CONTAINER */}
						{/* END: HOME SCREEN CONTENT */}
					</main>





				</section>

				<section id="about">
					<Title text='About' />

					{/* START: NOTE */}
					<div className="flex justify-center">
						<div className="max-w-144 sm:text-md my-6 flex flex-col justify-center p-6 text-center text-2xl font-bold">
							<Spacer />
							<div className="my-4">
								<p className="my-2 bg-white text-xl font-bold underline decoration-2">
									note: summer <span className="text-sm">2023</span>
								</p>
								<p>
									if you&apos;d like to hire me, i am currently able to take on:{' '}
								</p>
								<ul className="my-3 font-normal">
									<li>videogame related articles</li>
									<li>small web design projects (design/dev)</li>
								</ul>
							</div>
							<Spacer />
						</div>
					</div>
					{/* END: NOTE */}
					{/* START: ABOUT */}
					<section id="taglineCard" className="flex justify-center">
						<div
							id="profileContainer"
							className="mb-5 mt-3 flex flex-col max-w-[800px]"
						>
							<div
								id="academicProfileTextprofileContainer"
								className='text-xl'
							>
								<p className='font-bold'>{academicProfileText.title}</p>
								<p className='text-xl max-w-144 mb-6'>
									{academicProfileText.sentences}
								</p>
							</div>
							<div
								id="developerProfileTextprofileContainer"
								className='text-xl'
							>
								<p className='font-bold'>{developerProfileText.title}</p>
								<p className='text-xl max-w-144 mb-6'>
									{developerProfileText.sentences}
								</p>
							</div>
						</div>
					</section>
					{/* END: ABOUT */}
				</section>

				<section id="projects">
					{/* START: TITLE */}
					<Title text='Projects' />
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
				</section>
				<section id="contact">
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
				</section>
			</main>
		</Layout>
	)
}
