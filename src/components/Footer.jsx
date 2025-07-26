import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import facebookIcon from '../assets/footer/facebook.svg';
import instagramIcon from '../assets/footer/instagram.svg';
import twitterIcon from '../assets/footer/twitter.svg';
import linkedinIcon from '../assets/footer/linkedin.svg';

import white_logo from '../assets/white_logo.webp';
import divider from '../assets/footer/divider.webp';
import mailIcon from '../assets/footer/mail.webp';
import phoneIcon from '../assets/footer/phone.svg';
import locationIcon from '../assets/footer/location.webp';

const Footer = ({ footerRef }) => {
	const year = dayjs().year();
	const phno = '+91 93463 15392';

	return (
		<footer className='FOOTER' ref={footerRef}>
			<div className='lastdiv flex'>
				<div className='icons flex'>
					<Link
						to='https://www.instagram.com/bhcg.bitshyd/'
						rel='noopener'
						target='_blank'
					>
						<img src={instagramIcon} alt='Instagram' />
					</Link>
					<Link
						to='https://www.facebook.com/TheBHCG'
						rel='noopener'
						target='_blank'
					>
						<img src={facebookIcon} alt='Facebook' />
					</Link>
					<Link
						to='https://x.com/the_bhcg'
						rel='noopener'
						target='_blank'
					>
						<img src={twitterIcon} alt='Twitter' />
					</Link>
					<Link
						to='https://www.linkedin.com/company/bits-hyderabad-consulting-group/'
						rel='noopener'
						target='_blank'
					>
						<img src={linkedinIcon} alt='LinkedIn' />
					</Link>
				</div>

				<div className='navigations flex'>
					<img
						src={white_logo}
						alt='BHCG Logo'
						className='footer-logo'
					/>
					<img src={divider} className='divider' alt='Divider' />

					<div className='contacts flex-col'>
						<p className='flex'>
							<img src={mailIcon} alt='Mail' />
							<Link
								to='mailto:bhcg@hyderabad.bits-pilani.ac.in'
								rel='noopener'
								target='_blank'
								className='footerLink'
							>
								bhcg@hyderabad.bits-pilani.ac.in
							</Link>
						</p>
						<p className='flex'>
							<img src={phoneIcon} alt='Phone' />
							<Link
								to={`https://wa.me/${phno.replace(/\s/g, '')}`}
								rel='noopener'
								target='_blank'
								className='footerLink'
							>
								{phno}
							</Link>
						</p>
						<p className='flex'>
							<img src={locationIcon} alt='Location' />
							<Link
								to='https://maps.app.goo.gl/NRoC46SqYqvmWwN2A'
								rel='noopener'
								target='_blank'
								className='footerLink'
							>
								Hyderabad, India
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div className='end flex'>
				<span>{`© BHCG ${year}`}</span>
			</div>
		</footer>
	);
};

export default Footer;
