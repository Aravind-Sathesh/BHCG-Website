import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import car1 from '../assets/product_consulting/carousel_1.svg';
import car2 from '../assets/product_consulting/carousel_2.svg';
import car3 from '../assets/product_consulting/carousel_3.svg';
import car4 from '../assets/product_consulting/carousel_4.svg';

const carouselItems = [
	{
		img: car1,
		title: 'REGISTER',
		description: 'Registration of all of the participants who have applied',
	},
	{
		img: car2,
		title: 'SUMMARIZE',
		description:
			'Participants are required to summarise their ideas within two pages',
	},
	{
		img: car3,
		title: 'PRESENT',
		description:
			'Shortlisted candidates will proceed to craft a detailed deck of their solution',
	},
	{
		img: car4,
		title: 'FINALS',
		description:
			'Winning decks get an opportunity to present to the jury and a chance to win prizes.',
	},
];

const ProdStormCaseCompetition = ({ title, children }) => {
	return (
		<div className='case'>
			<h1>{title}</h1>
			<div className='flex'>
				<div className='component-content'>{children}</div>
				<div className='component-carousel'>
					<Carousel>
						{carouselItems.map((item, index) => (
							<Carousel.Item key={index}>
								<div className='card'>
									<img src={item.img} alt={item.title} />
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default ProdStormCaseCompetition;
