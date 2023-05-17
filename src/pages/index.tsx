import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { textData } from '@/lib/TextDatabase'
import Title from '@/components/Title'
import Spacer from '@/components/Spacer'
import Gallery from '@/components/Gallery'
import FilterMenu from '@/components/FilterMenu'
import ghost from '../icons/undraw/undraw_ghost.svg'
import EmailIcon from '../icons/remix/mail-line.svg'
import linkedInIcon from '../icons/remix/linkedin-box-line.svg'
import TwitterIcon from '../icons/remix/twitter-line.svg'
import CircledPlus from '../icons/undraw/undraw_circled-plus.svg'
import DoubleUnderline from '../icons/undraw/undraw_double-underline.svg'
import { NavItem } from '@/components/NavBar'

export default function Index() {
	const taglineText = textData.find((item) => item.tag === 'tagline')
	const academicProfileText = textData.find(
		(item) => item.tag === 'academicProfile'
	)
	const developerProfileText = textData.find(
		(item) => item.tag === 'developerProfile'
	)
	if (!taglineText) {
		return null
	}
	if (!academicProfileText) {
		return null
	}
	if (!developerProfileText) {
		return null
	}

	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [isScrolled, setIsScrolled] = useState(false)

	const handleCategorySelect = (category: string) => {
		setSelectedCategory(category)
	}

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset
			setIsScrolled(scrollTop > 0)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const [isCollapsed, setIsCollapsed] = useState(false)

	const toggleCollapse = () => {
		setIsCollapsed((prevCollapsed) => !prevCollapsed)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				// 768 is the width for md breakpoint
				setIsCollapsed(true)
			} else {
				setIsCollapsed(false)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<>
			<div className="flex min-h-screen flex-col">

				<nav
					className={`z-99 overflow-x-hidden ${isScrolled ? 'sticky top-0' : ''
						}`}
				>
					<nav
						className={`
							z-99 z-40 flex flex-col items-center justify-center overflow-x-hidden border-b-2 border-black bg-white py-3 
							${isScrolled ? 'sticky top-0' : ''}
							${isCollapsed ? 'collapsed' : ''}
						`}
					>
						<div className="flex flex-col justify-center text-center align-middle font-thin">
							<div className="flex justify-center text-center md:hidden">
								<button
									className="mb-2 flex items-center bg-white px-3 text-center"
									onClick={toggleCollapse}
								>
									<Image
										src={CircledPlus}
										width={25}
										height={25}
										alt=""
										className={isCollapsed ? '' : 'rotate-90'}
									/>
								</button>
							</div>
							{!isCollapsed && (
								<div className="flex-col items-center justify-center bg-white md:flex md:flex-row">
									<div className="flex flex-col items-center xs:px-2 sm:px-3 md:px-3 lg:px-5 xl:px-5 2xl:px-5">
										<div>
											{/* TODO: JUMP TO SECTION (USING ID) */}
											<p id="nav-item">About</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</nav>
				</nav>

				<main className="max-w-screen font-regular mt-12 flex flex-col overflow-x-hidden bg-white px-8 lowercase text-black">
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
                "
										>
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
						<Title text="About" />

						{/* START: NOTE */}
						<div className="flex justify-center">
							<div className="max-w-144 sm:text-md my-6 flex flex-col justify-center p-6 text-center text-2xl font-bold">
								<Spacer />
								<div className="my-4">
									<p className="my-2 bg-white text-xl font-bold underline decoration-2">
										note: summer <span className="text-sm">2023</span>
									</p>
									<p>
										if you&apos;d like to hire me, i am currently able to take
										on:{' '}
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
								className="mb-5 mt-3 flex max-w-[800px] flex-col"
							>
								<div
									id="academicProfileTextprofileContainer"
									className="text-xl"
								>
									<p className="font-bold">{academicProfileText.title}</p>
									<p className="max-w-144 mb-6 text-xl">
										{academicProfileText.sentences}
									</p>
								</div>
								<div
									id="developerProfileTextprofileContainer"
									className="text-xl"
								>
									<p className="font-bold">{developerProfileText.title}</p>
									<p className="max-w-144 mb-6 text-xl">
										{developerProfileText.sentences}
									</p>
								</div>
							</div>
						</section>
						{/* END: ABOUT */}
					</section>

					<section id="projects">
						{/* START: TITLE */}
						<Title text="Projects" />
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
						<section className="flex h-screen flex-row justify-center overflow-y-hidden px-4">
							{/* START: PAGE TITLE CONTAINER*/}
							<div className="flex flex-col justify-center text-end">
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
							</div>
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
						</section>
						{/* END: MAIN CONTENT CONTAINER */}
					</section>
				</main>
				<footer className="mt-5 flex w-screen justify-center text-center">
					<div className="flex flex-col">
						<div className="flex flex-row justify-center text-center">
							<Image
								className="mr-2"
								src={ghost}
								width={20}
								height={20}
								alt="black and white line drawing of a ghost"
							/>
							<p className="text-center">nagaoka.dev</p>
						</div>
						<div className="mb-1 flex flex-row justify-center text-center text-xs">
							<p>website made with react, nextjs, tailwindcss, and love.</p>
						</div>
					</div>
				</footer>
			</div >
		</>
	)
}
