import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Chip,
	Typography,
	Stack,
	Button,
} from '@mui/material';
import ExploreIcon from '@mui/icons-material/OpenInNew';

const ResourceCard = ({ image, tags, title, description, url }) => {
	return (
		<Card
			sx={{
				width: { xs: '95%', md: '22.5%' },
				margin: 4,
				padding: '1rem',
				boxShadow: 3,
				borderRadius: 2,
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				height: 550,
			}}
		>
			<CardMedia
				component='img'
				image={image}
				alt='Resource cover'
				sx={{
					borderRadius: 1,
					height: { xs: '180', md: '200' },
					borderStyle: 'solid',
					borderWidth: 2,
					borderColor: '#027F7B',
				}}
			/>

			<CardContent
				sx={{
					paddingX: 0,
					fontFamily: 'Poppins, serif',
					display: 'flex',
					flexDirection: 'column',
					mb: -3,
					flexGrow: 1,
				}}
			>
				{/* <Stack
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
				</Stack> */}

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
					variant='body'
					color='text.secondary'
					sx={{
						fontFamily: 'Poppins, serif',
						flexGrow: 1,
					}}
				>
					{description}
				</Typography>

				<Button
					variant='contained'
					color='primary'
					endIcon={<ExploreIcon />}
					href={url}
					target='_blank'
					rel='noopener noreferrer'
					sx={{
						mt: 'auto',
						fontFamily: 'Poppins, serif',
						width: '100%',
						backgroundColor: '#027F7B',
						'&:hover': {
							backgroundColor: '#025F5B',
						},
					}}
				>
					Explore
				</Button>
			</CardContent>
		</Card>
	);
};

export default ResourceCard;
