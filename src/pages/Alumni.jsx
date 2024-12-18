import React, { useRef } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import AlumniCard from '../components/AlumniCard';
import alumni from '../alumni.json';
import baseline from '../assets/white_baseline.webp';

const Alumni = () => {
	const footerRef = useRef(null);

	return (
		<>
			<Header type={'colour projects'} footerRef={footerRef} />
			<div className='ALUMNI'>
				<Title titleName='ALUMNI' themeColor='white' />
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
