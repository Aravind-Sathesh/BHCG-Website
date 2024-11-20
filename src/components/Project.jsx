import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({ children, id, align, image }) => {
	useEffect(() => {
		AOS.init({ duration: 800 });
		AOS.refresh();
	}, []);

	return (
		<div
			className={`gp${id} group gp-${align}`}
			data-aos={`fade-${align === 'left' ? 'right' : 'left'}`}
		>
			<div className='text'>
				<img src={image} alt='' />
				{children}
			</div>
		</div>
	);
};

export default Project;
