import React, { useRef, useState, useEffect } from 'react';
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
	const [stats, updateStats] = useState([0, 0, 0]);
	const STUDENTS = 200;
	const PROJECTS = 10;
	const EXP = 6;

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					const interval = setInterval(() => {
						updateStats((prevStats) => {
							const [stat1, stat2, stat3] = prevStats;

							const newStat1 = Math.min(stat1 + 13, STUDENTS);
							const newStat2 = Math.min(stat2 + 1, PROJECTS);
							const newStat3 = Math.min(stat3 + 1, EXP);

							if (
								newStat1 === STUDENTS &&
								newStat2 === PROJECTS &&
								newStat3 === EXP
							) {
								clearInterval(interval);
							}

							return [newStat1, newStat2, newStat3];
						});
					}, 90);

					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);

		if (statsRef.current) {
			observer.observe(statsRef.current);
		}

		return () => {
			if (observer && statsRef.current) {
				observer.unobserve(statsRef.current);
			}
		};
	}, []);

	return (
		<>
			<Header type={'colour'} footerRef={footerRef} />
			<div className='HOME'>
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
				<div className='stats' ref={statsRef}>
					<div className='stat 0'>
						{stats[0] + '+'}
						<p>Students Empowered</p>
					</div>
					<div className='stat 1'>
						{stats[1] + '+'}
						<p>Live Projects</p>
					</div>
					<div className='stat 2'>
						{stats[2] + '+'}
						<p>Years of Experience</p>
					</div>
				</div>
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
