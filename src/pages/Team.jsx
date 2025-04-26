import React, { useRef } from 'react';

// Component Imports
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Leader from '../components/Leader'; // Using the updated Leader component

// Data Import
import leaders from '../data/leaders.json'; // Adjust path as needed

// Asset Imports
import baseline from '../assets/teal_baseline.webp';
import por_1 from '../assets/team/por_1.webp';
import por_2 from '../assets/team/por_2.webp';
import por_3 from '../assets/team/por_3.webp';
import por_4 from '../assets/team/por_4.webp';
import por_5 from '../assets/team/por_5.webp';

// Create a mapping from profileKey in JSON to the imported image variables
const profileImages = {
	por_1: por_1,
	por_2: por_2,
	por_3: por_3,
	por_4: por_4,
	por_5: por_5,
};

const Team = () => {
	const footerRef = useRef(null);

	return (
		<>
			<Header type={'light'} footerRef={footerRef} />
			<div className='TEAM'>
				<Title titleName='leadership' themeColor='teal' />
				<div className='porContainer'>
					{leaders.map((member) => (
						<Leader
							key={member.id}
							align={member.align}
							role={member.role}
							name={member.name}
							information={member.information}
							link={member.link}
							profile={profileImages[member.profileKey]}
						/>
					))}
				</div>
				<img className='baseline' src={baseline} alt='divider' />
			</div>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default Team;
