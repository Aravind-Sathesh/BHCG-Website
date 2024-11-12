import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const EventCard = ({ title, date, description, location, time }) => {
	const [day, month, year] = date.split('/');
	const monthName = new Date(`${year}-${month}-${day}`).toLocaleString(
		'default',
		{ month: 'long' }
	);

	return (
		<Card
			sx={{
				width: '100%',
				maxWidth: '90%',
				margin: '1rem auto',
				display: 'flex',
				borderRadius: '10px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				backgroundColor: '#f0fafa',
				overflow: 'hidden',
				':hover': {
					transform: 'scale(1.02)',
					transition: '0.3s',
					boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
				},
			}}
		>
			<Grid container>
				<Grid
					item
					xs={12}
					sm={3}
					md={2.5}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#027f7b',
						color: '#fff',
						padding: '1rem 0',
						textAlign: 'center',
					}}
				>
					<Typography variant='h1' sx={{ fontWeight: 'bold' }}>
						{day}
					</Typography>
					<Typography
						variant='subtitle1'
						sx={{ fontSize: '1rem', textTransform: 'uppercase' }}
					>
						{monthName}
					</Typography>
				</Grid>

				<Grid item xs={12} sm={9} md={9.5}>
					<CardContent>
						<Typography
							variant='h5'
							sx={{
								color: '#027f7b',
								fontWeight: 'bold',
							}}
						>
							{title}
						</Typography>
						<Typography
							variant='subtitle1'
							sx={{
								color: '#027f7b',
								fontStyle: 'italic',
							}}
						>
							{time.startsWith('http') ? (
								<a
									href={time}
									target='_blank'
									rel='noopener noreferrer'
									style={{
										color: '#027f7b',
										textDecoration: 'underline',
									}}
								>
									{time}
								</a>
							) : (
								time
							)}
						</Typography>
						<Typography
							variant='body2'
							sx={{
								marginBottom: '0.5rem',
								color: '#006d67',
								fontWeight: 'medium',
								display: 'inline-block',
							}}
						>
							<strong>Location:</strong> {location}
						</Typography>
						<Typography
							variant='body1'
							sx={{ color: '#004d4d', lineHeight: 1.6 }}
						>
							{description}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
};

export default EventCard;
