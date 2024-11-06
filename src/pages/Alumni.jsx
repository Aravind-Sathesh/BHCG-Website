import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AlumniCard from '../components/AlumniCard';
import alumni from '../alumni.json';
import heading from '../assets/alumni-heading.webp';
import baseline from '../assets/white_baseline.webp';

const Alumni = () => {
	const footerRef = useRef(null);

	return (
		<>
			<Header type={'colour projects'} footerRef={footerRef} />
			<div className='ALUMNI'>
				<div
					className='heading'
					style={{
						width: '100%',
						textAlign: 'center',
						padding: '2rem 0',
					}}
				>
					<img
						src={heading}
						alt='Alumni Heading'
						style={{ width: '90%', maxWidth: '1200px' }}
					/>
				</div>

				<div className='alumni flexwrap'>
					{alumni.map((alumni) => (
						<AlumniCard
							key={alumni.id}
							imagePath={alumni.imagePath}
							name={alumni.name}
							achievements={alumni.achievements}
							graduatingYear={alumni.graduatingYear}
							linkedinProfile={alumni.linkedinProfile}
						/>
					))}
				</div>
				<div className='baselinediv'>
					<img className='baseline' src={baseline} alt='Divider' />
				</div>
			</div>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default Alumni;
