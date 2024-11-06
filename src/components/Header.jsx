import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import teal_logo from '../assets/teal_logo.webp';
import white_logo from '../assets/white_logo.webp';
import bits_teal_logo from '../assets/bits-logo-teal.webp';
import bits_white_logo from '../assets/bits-logo-white.webp';

const Header = (props) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isTeamsDropdownOpen, setIsTeamsDropdownOpen] = useState(false);
	const isMobile = window.innerWidth <= 768;

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const toggleTeamsDropdown = () => {
		setIsTeamsDropdownOpen(!isTeamsDropdownOpen);
	};

	const scrollToFooter = () => {
		props.footerRef.current.scrollIntoView({ behavior: 'smooth' });
		if (isMobileMenuOpen) setIsMobileMenuOpen(false);
	};

	return (
		<header className={`${props.type} HEADER ${isScrolled}`}>
			<nav className='navbar'>
				<div className='logo'>
					<img
						src={
							props.type === 'light'
								? bits_teal_logo
								: bits_white_logo
						}
						className='bits-logo'
						alt='BHCG Logo'
					/>
					<Link to='/home'>
						<img
							src={
								props.type === 'light' ? teal_logo : white_logo
							}
							alt='BHCG Logo'
						/>
					</Link>
				</div>
				<div className='nav-container'>
					<ul
						className={`nav-links ${
							isMobileMenuOpen ? 'open' : ''
						}`}
					>
						{isMobile ? (
							<>
								<li>
									<Link to='/home'>Home</Link>
								</li>
								<li>
									<Link to='/leadership'>Leadership</Link>
								</li>
								<li>
									<Link to='/consulting'>Consulting</Link>
								</li>
								<li>
									<Link to='/product-management'>
										Product Management
									</Link>
								</li>
								<li>
									<Link to='/alumni'>Alumni</Link>
								</li>
								<li>
									<Link to='/resources'>Resources</Link>
								</li>
								<li>
									<Link to='/events'>Events</Link>
								</li>
								<li>
									<Link to='/projects'>Projects</Link>
								</li>
								<li>
									<Link onClick={scrollToFooter}>
										Contact Us
									</Link>
								</li>
							</>
						) : (
							<>
								<li>
									<Link to='/home'>Home</Link>
								</li>
								<li
									className='teams-dropdown'
									onMouseEnter={toggleTeamsDropdown}
									onMouseLeave={toggleTeamsDropdown}
								>
									<a className='nav-links teams-label'>
										Teams
									</a>
									{isTeamsDropdownOpen && (
										<ul className='dropdown'>
											<li>
												<Link
													to='/alumni'
													onClick={() =>
														setIsMobileMenuOpen(
															false
														)
													}
												>
													Alumni
												</Link>
											</li>
											<li>
												<Link
													to='/leadership'
													onClick={() =>
														setIsMobileMenuOpen(
															false
														)
													}
												>
													Leadership
												</Link>
											</li>
											<li>
												<Link
													to='/consulting'
													onClick={() =>
														setIsMobileMenuOpen(
															false
														)
													}
												>
													Consulting
												</Link>
											</li>
											<li>
												<Link
													to='/product-management'
													onClick={() =>
														setIsMobileMenuOpen(
															false
														)
													}
												>
													Product Management
												</Link>
											</li>
										</ul>
									)}
								</li>
								<li>
									<Link to='/resources'>Resources</Link>
								</li>
								<li>
									<Link to='/events'>Events</Link>
								</li>
								<li>
									<Link to='/projects'>Projects</Link>
								</li>
								<li>
									<Link onClick={scrollToFooter}>
										Contact Us
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
				<div className='hamburger' onClick={toggleMobileMenu}>
					<span className='line'></span>
					<span className='line'></span>
					<span className='line'></span>
				</div>
			</nav>
		</header>
	);
};

export default Header;
