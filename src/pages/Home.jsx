import React, { useRef, useEffect } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatWeDo from '../components/WhatWeDo';

import background from '../assets/home_background.webp';
import rectangle from '../assets/teal_rectangle.webp';
import baseline from '../assets/teal_baseline.webp';

import 'bootstrap/dist/css/bootstrap.min.css';
import teamPhoto from '../assets/team/fullteam.webp';

const Home = () => {
	const footerRef = useRef(null);
	const statsRef = useRef(null);

	const studentsCountRef = useRef(null);
	const projectsCountRef = useRef(null);
	const expCountRef = useRef(null);

	const isInView = useInView(statsRef, { once: true, amount: 0.2 });

	const STUDENTS = 200;
	const PROJECTS = 10;
	const EXP = 6;

	useEffect(() => {
		let controlsStudents, controlsProjects, controlsExp;

		if (isInView) {
			controlsStudents = animate(0, STUDENTS, {
				duration: 1.5,
				ease: 'easeOut',
				onUpdate(value) {
					if (studentsCountRef.current) {
						studentsCountRef.current.textContent =
							Math.round(value).toLocaleString();
					}
				},
			});

			controlsProjects = animate(0, PROJECTS, {
				duration: 1.2,
				delay: 0.2,
				ease: 'easeOut',
				onUpdate(value) {
					if (projectsCountRef.current) {
						projectsCountRef.current.textContent =
							Math.round(value).toLocaleString();
					}
				},
			});

			controlsExp = animate(0, EXP, {
				duration: 1.0,
				delay: 0.4,
				ease: 'easeOut',
				onUpdate(value) {
					if (expCountRef.current) {
						expCountRef.current.textContent =
							Math.round(value).toLocaleString();
					}
				},
			});
		}

		return () => {
			controlsStudents?.stop();
			controlsProjects?.stop();
			controlsExp?.stop();
		};
	}, [isInView]);

	const statsContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const statItemVariants = {
		hidden: { opacity: 0, y: 20, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	return (
		<>
			<Header type={'colour'} footerRef={footerRef} />
			<div className='HOME'>
				{/* --- Keep existing structure --- */}
				<img
					className='background'
					src={background}
					alt='BPHC Campus Background'
				/>
				<img
					className='rectangle'
					src={rectangle}
					alt='Teal translucent filter'
				/>
				<div className='hero'>
					<h1>BITS Hyderabad</h1>
					<h1>Consulting Group</h1>
					<h3>
						Empowering students with hands-on consulting and product
						management projects.
					</h3>
				</div>
				<WhatWeDo
					heading='About BHCG'
					content='The BITS Hyderabad Consulting Group (BHCG) is a vibrant student-led organization established in 2018 to foster a robust consulting and product management culture on campus. At BHCG, we are driven by a community of dedicated and passionate students who collaborate to achieve significant milestones in management and strategy consulting. Our mission extends beyond campus boundaries, as we offer consultancy and product management services to startups, non-profits, and corporate firms in the form of live-projects. We facilitate skill development and industry exposure through workshops and cohorts, sessions with industry leaders, and participation in national competitions providing students with practical, hands-on experience. Through our initiatives, BHCG aims to make a lasting impact on businesses and society, nurturing the next generation of consulting and product management leaders within our campus and beyond.'
				/>
				<motion.div
					className='stats'
					ref={statsRef}
					variants={statsContainerVariants}
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
				>
					{/* Apply item animation variants to each stat */}
					<motion.div className='stat 0' variants={statItemVariants}>
						{/* Span with ref for the counter */}
						<span ref={studentsCountRef}>0</span>+
						<p>Students Empowered</p>
					</motion.div>
					<motion.div className='stat 1' variants={statItemVariants}>
						<span ref={projectsCountRef}>0</span>+
						<p>Live Projects</p>
					</motion.div>
					<motion.div className='stat 2' variants={statItemVariants}>
						<span ref={expCountRef}>0</span>+
						<p>Years of Experience</p>
					</motion.div>
				</motion.div>

				<div className='team'>
					<h1>Our Team</h1>
					<div className='team-photo'>
						<img src={teamPhoto} alt='full team image' />
					</div>
				</div>
				<div className='baselinediv'>
					<img className='baseline' src={baseline} alt='Divider' />
				</div>
			</div>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default Home;
