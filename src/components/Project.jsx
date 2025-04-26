import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ children, id, align, image, company }) => {
	const variants = {
		hiddenLeft: { opacity: 0, x: -100 },
		hiddenRight: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	return (
		<motion.div
			className={`gp${id} group gp-${align} company-${company
				?.toLowerCase()
				.replace(/\s+/g, '-')}`}
			variants={variants}
			initial={align === 'left' ? 'hiddenLeft' : 'hiddenRight'}
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className='text'>
				<img
					className='image-regular'
					src={image}
					alt={`${company || 'Project'} logo`}
					loading='lazy'
				/>
				{children}
			</div>
		</motion.div>
	);
};

export default Project;
