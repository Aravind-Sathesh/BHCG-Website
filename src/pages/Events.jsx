import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import EventCard from '../components/EventCard';
import { Container, Typography, Box } from '@mui/material';
import baseline from '../assets/teal_baseline.webp';

import events from '../data/events.json';

const Events = () => {
	const footerRef = useRef(null);

	const splitEventsByDate = (events) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const upcomingEvents = [];
		const pastEvents = [];

		events.forEach((event) => {
			const [day, month, year] = event.date.split('/');
			const eventDate = new Date(`${year}-${month}-${day}`);

			if (eventDate >= today) {
				upcomingEvents.push(event);
			} else {
				pastEvents.push(event);
			}
		});

		upcomingEvents.sort((a, b) => {
			const [dayA, monthA, yearA] = a.date.split('/');
			const [dayB, monthB, yearB] = b.date.split('/');
			const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
			const dateB = new Date(`${yearB}-${monthB}-${dayB}`);
			return dateA - dateB;
		});

		pastEvents.sort((a, b) => {
			const [dayA, monthA, yearA] = a.date.split('/');
			const [dayB, monthB, yearB] = b.date.split('/');
			const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
			const dateB = new Date(`${yearB}-${monthB}-${dayB}`);
			return dateB - dateA;
		});

		return { upcomingEvents, pastEvents };
	};

	const { upcomingEvents, pastEvents } = splitEventsByDate(events);

	return (
		<>
			<Header type={'light'} footerRef={footerRef} />
			<Title titleName='EVENTS' themeColor='teal' />
			<Container
				sx={{ width: '100%', marginBottom: { xs: '2rem', md: '0' } }}
			>
				<Typography
					variant='h4'
					sx={{
						fontFamily: 'Roboto Serif',
						textAlign: 'center',
						color: '#027f7b',
						fontWeight: 600,
						fontSize: '2.5rem',
						padding: '2.5rem 0',
					}}
				>
					Upcoming Events
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-around',
						width: '100%',
					}}
				>
					{upcomingEvents.map((event) => (
						<EventCard
							key={event.id}
							title={event.title}
							date={event.date}
							description={event.description}
							location={event.location}
							time={event.time}
						/>
					))}
				</Box>
				<Typography
					variant='h4'
					sx={{
						fontFamily: 'Roboto Serif',
						textAlign: 'center',
						color: '#027f7b',
						fontWeight: 600,
						fontSize: '2.5rem',
						padding: '2.5rem 0',
					}}
				>
					Past Events
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-around',
						width: '100%',
					}}
				>
					{pastEvents.map((event) => (
						<EventCard
							key={event.id}
							title={event.title}
							date={event.date}
							description={event.description}
							location={event.location}
							time={event.time}
						/>
					))}
				</Box>
				<img
					className='baseline'
					src={baseline}
					alt='Divider'
					style={{ padding: '3rem 0 4rem 0' }}
					sx={{
						display: { xs: 'none', md: 'block' },
					}}
				/>
			</Container>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default Events;
