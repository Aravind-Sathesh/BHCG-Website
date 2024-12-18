import React, { useRef } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home_Carousel from '../components/Home_Carousel';
import WhatWeDo from '../components/WhatWeDo';
import ProdStorm_CaseCompetition from '../components/ProdStorm_CaseCompetition';
import Consulting_Speakers from '../components/Consulting_Speakers';

import car_1 from '../assets/home/car_1.png';
import car_2 from '../assets/home/car_2.png';
import car_3 from '../assets/home/car_3.png';
import car_4 from '../assets/home/car_4.png';

import baseline from '../assets/teal_baseline.webp';

const Consulting = () => {
	const footerRef = useRef(null);

	return (
		<div className='CONSULTING'>
			<Header type={'light'} footerRef={footerRef} />
			<div>
				<Title titleName='consulting' themeColor='teal' />
				<WhatWeDo
					heading='What We Do'
					content='We are the Management Club of BITS Hyderabad, dedicated to fostering a community of consulting enthusiasts. Our club provides consultancy services to startups, non-profit organizations, and corporate firms. To help students develop their consulting skills, we organize workshops and host fireside chats with founders, executives, and industry veterans. These activities offer valuable insights and practical knowledge, preparing students for real-world challenges in the consulting industry.'
				/>
			</div>
			<ProdStorm_CaseCompetition title='Case Sensitive'>
				<p>
					Our Case Competition is a three-round business challenge
					where top minds compete to develop optimal strategies,
					marketing plans, and operational solutions. This competition
					aims to test participants' analytical and creative skills by
					engaging them with a real-life business problem faced by one
					of our partner organizations.
				</p>
				<br />
				<p>
					Participants' solutions are evaluated by the organization's
					management, with the potential for implementation to address
					the actual business challenge. Through the Case Competition,
					organizations benefit from fresh perspectives on their
					problems and gain an opportunity to identify and recruit
					talented individuals. Additionally, the competition provides
					valuable marketing and publicity avenues, enhancing the
					organization's branding and reach.
				</p>
			</ProdStorm_CaseCompetition>
			<Consulting_Speakers />
			<div className='services'>
				<h1>Services</h1>
				<Carousel>
					<Carousel.Item>
						<Home_Carousel
							title='Business Strategy and Development'
							path={car_1}
							li_1='Strategic planning and development'
							li_2='Customized business growth strategies'
							li_3='Enhance operational efficiency'
							li_4='Achieve long-term business goals'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Home_Carousel
							title='Market Research & Analysis'
							path={car_2}
							li_1='Comprehensive market research'
							li_2='Insights on trends, opportunities and threats'
							li_3='In-depth user research'
							li_4='Comprehensive competitor analysis'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Home_Carousel
							title='Marketing & Branding Work'
							path={car_3}
							li_1='Effective marketing campaigns'
							li_2='Brand development and positioning'
							li_3='Increase brand awareness and loyalty'
							li_4='Drive customer engagement and sales'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Home_Carousel
							title='UI & UX Interface Design'
							path={car_4}
							li_1='Innovative interface design'
							li_2='User-friendly and intuitive experiences'
							li_3='Enhance user satisfaction and engagement'
							li_4='Improve overall product usability'
						/>
					</Carousel.Item>
				</Carousel>
			</div>

			<img className='baseline' src={baseline} alt='Divider' />
			<Footer footerRef={footerRef} />
		</div>
	);
};

export default Consulting;
