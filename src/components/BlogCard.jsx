import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Chip,
	Typography,
	Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ id, image, tags, title, date }) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
		navigate(`/blog/${id}`);
	};

	return (
		<Card
			onClick={handleCardClick}
			sx={{
				width: { xs: '95%', md: '22.5%' },
				margin: 4,
				padding: '1rem',
				boxShadow: 3,
				borderRadius: 2,
				overflow: 'hidden',
				transition: 'transform 0.3s, box-shadow 0.3s',
				cursor: 'pointer',
				height: { xs: 'auto', md: '440px' },

				'&:hover': {
					transform: 'scale(1.03)',
					boxShadow: 6,
				},
			}}
		>
			<CardMedia
				component='img'
				image={image}
				alt='Blog cover'
				sx={{
					height: { xs: 'unset', md: '200px' },
					borderRadius: 1,
					borderStyle: 'solid',
					borderWidth: 2,
					objectPosition: 'top',
					objectFit: 'cover',
					borderColor: '#027F7B',
				}}
			/>

			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					paddingTop: 2.5,
					paddingLeft: 0,
					paddingBottom: 0,
					marginBottom: -3,
					fontFamily: 'Poppins, serif',
					flexGrow: 1,
				}}
			>
				<Stack
					direction='row'
					spacing={1}
					mb={1}
					justifyContent='flex-start'
				>
					{tags.map((tag, index) => (
						<Chip
							key={index}
							label={tag}
							sx={{
								fontWeight: 500,
								backgroundColor: '#8CC0BF',
								color: '#FFF',
								fontFamily: 'Poppins, serif',
							}}
						/>
					))}
				</Stack>

				<Typography
					variant='h5'
					component='h2'
					gutterBottom
					sx={{
						fontFamily: 'Poppins, serif',
						paddingTop: 1,
						paddingBottom: 1,
					}}
				>
					{title}
				</Typography>

				<Typography
					variant='body2'
					fontWeight={500}
					sx={{
						color: '#027F7B',
						marginTop: 'auto',
						fontFamily: 'Poppins, serif',
					}}
				>
					{date}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default BlogCard;
