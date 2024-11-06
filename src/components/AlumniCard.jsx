import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	List,
	ListItem,
	Button,
	Box,
} from '@mui/material';

import { OpenInNew } from '@mui/icons-material';

const AlumniCard = ({
	imagePath,
	name,
	achievements,
	graduatingYear,
	linkedinProfile,
}) => {
	return (
		<Card
			sx={{
				width: { xs: '95%', md: '22.5%' },
				height: { xs: 'auto', md: '30rem' },
				borderRadius: 2,
				border: '2px solid #027f7b',
				boxShadow: 5,
				transition: 'transform 0.3s, box-shadow 0.3s',
				textAlign: 'center',
				margin: '2rem',
				fontFamily: 'Poppins',
				display: 'flex',
				flexDirection: 'column',
				'&:hover': {
					transform: 'scale(1.03)',
					boxShadow: 8,
				},
			}}
		>
			<CardMedia
				component='img'
				alt={`${name}'s profile`}
				image={imagePath}
				sx={{
					width: '150px',
					height: '150px',
					borderRadius: '50%',
					objectFit: 'cover',
					marginTop: '1rem',
					marginX: 'auto',
					border: '3px solid #027f7b',
				}}
			/>

			<CardContent
				sx={{
					fontFamily: 'Poppins',
					display: 'flex',
					flexDirection: 'column',
					flexGrow: 1,
				}}
			>
				<Typography
					variant='h5'
					component='div'
					color='#027f7b'
					gutterBottom
					fontFamily={'Poppins'}
				>
					{name}
				</Typography>

				<Typography
					variant='subtitle1'
					fontFamily={'Poppins'}
					color='textSecondary'
				>
					Class of {graduatingYear}
				</Typography>
				<List
					dense
					sx={{
						paddingTop: 1,
						textAlign: 'center',
						flexGrow: 1,
					}}
				>
					{achievements.map((achievement, index) => (
						<ListItem
							key={index}
							sx={{
								paddingBottom: 0.5,
								textAlign: 'center',
							}}
						>
							<Typography
								variant='body2'
								color='textPrimary'
								fontFamily={'Poppins'}
								width={'100%'}
							>
								{achievement}
							</Typography>
						</ListItem>
					))}
				</List>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: { xs: '1rem', md: 'auto' },
					}}
				>
					<Button
						href={linkedinProfile}
						target='_blank'
						rel='noopener noreferrer'
						variant='contained'
						sx={{
							backgroundColor: '#5aaca9',
							color: 'white',
							fontWeight: 'bold',
							display: 'flex',
							alignItems: 'center',
							textTransform: 'none',
							'&:hover': {
								backgroundColor: '#4a9c98', // Darker teal on hover
							},
						}}
					>
						LinkedIn Profile
						<OpenInNew sx={{ marginLeft: 0.5, width: '1.1rem' }} />
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default AlumniCard;
