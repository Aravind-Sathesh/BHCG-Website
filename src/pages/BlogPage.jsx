import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import blogData from '../data/blogs.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Paper, Button, Divider } from '@mui/material';
import { ArrowBack, ArrowUpward, OpenInNew } from '@mui/icons-material';

import baseline from '../assets/white_baseline.webp';

const BlogPage = () => {
	const { blogid } = useParams();
	const navigate = useNavigate();
	const blog = blogData.find((b) => b.id === blogid);
	const [showButton, setShowButton] = useState(false);

	const footerRef = useRef(null);

	useEffect(() => {
		const originalTitle = document.title;

		if (blog) {
			document.title = `${blog.title} | BHCG Blogs`;
		}

		return () => {
			document.title = originalTitle;
		};
	}, [blog]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > window.innerHeight / 2) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	if (!blog) {
		return <h2>Blog not found</h2>;
	}

	return (
		<>
			<Header type={'colour projects'} footerRef={footerRef} />
			<div className='BLOG'>
				<div className='blog-page'>
					<div className='return-button'>
						<Button
							variant='outlined'
							color='primary'
							startIcon={<ArrowBack />}
							onClick={() => navigate('/resources')}
						>
							Return to Resources
						</Button>
					</div>
					<Paper elevation={3}>
						<div className='blog'>
							<h1>{blog.title}</h1>
							<p className='author-date'>
								<strong>Author:</strong> {blog.author}
							</p>
							<p className='author-date'>
								<strong>Date:</strong> {blog.date}
							</p>
							<div className='content'>
								{blog.content.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>
							<Divider variant='middle' />
							<h2>References</h2>
							<div className='references'>
								{blog.references.map((url, index) => (
									<p>
										<Link
											to={url}
											key={index}
											target='_blank'
											rel='noreferrer'
										>
											{url
												.split('/')[2]
												.replace('www.', '')}
											<OpenInNew
												fontSize='10'
												sx={{ marginLeft: 0.5 }}
											/>
										</Link>
									</p>
								))}
							</div>
						</div>
					</Paper>
				</div>
				<button
					className={`return-to-top ${showButton ? 'show' : ''}`}
					onClick={scrollToTop}
				>
					<ArrowUpward />
				</button>
				<div className='blog-baselinediv'>
					<img className='baseline' src={baseline} alt='Divider' />
				</div>
			</div>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default BlogPage;
