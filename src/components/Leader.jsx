import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import linkedinLogo from '../assets/team/linkedinLogo.svg';

const Leader = ({ align, role, name, profile, information, link }) => {
	const cardVariants = {
		hidden: {
			opacity: 0,
			x: align === 'left' ? -50 : 50,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	return (
		<motion.div
			className={`TeamMemberCard TeamMemberCard--align-${align}`}
			variants={cardVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className='TeamMemberCard__picture-container'>
				<img
					className='TeamMemberCard__photo'
					src={profile}
					alt={`${name} - ${role}`}
				/>
			</div>

			<div className='TeamMemberCard__content'>
				<div className='TeamMemberCard__heading'>
					<h1 className='TeamMemberCard__role'>{role}</h1>
					<h2 className='TeamMemberCard__name'>
						{name}
						<Link
							className='TeamMemberCard__linkedin-link'
							to={link}
							rel='noopener noreferrer'
							target='_blank'
							aria-label={`LinkedIn profile of ${name}`}
						>
							<img
								className='TeamMemberCard__linkedin-icon'
								src={linkedinLogo}
								alt='LinkedIn Profile'
							/>
						</Link>
					</h2>
				</div>
				<div className='TeamMemberCard__info'>
					<p>{information}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Leader;
