import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import TeamPOR from '../components/Leader';
import baseline from '../assets/teal_baseline.webp';

import por_2 from '../assets/team/por_2.webp';
import por_3 from '../assets/team/por_3.webp';
import por_4 from '../assets/team/por_4.webp';
import por_5 from '../assets/team/por_5.webp';
import por_1 from '../assets/team/por_1.webp';

const Team = () => {
	const footerRef = useRef(null);

	return (
		<>
			<Header type={'light'} footerRef={footerRef} />
			<div className='TEAM'>
				<Title titleName='leadership' themeColor='teal' />
				<div className='porContainer'>
					<TeamPOR
						align='left'
						role={'President'}
						name={'Anish Pathak'}
						profile={por_1}
						information={
							"Anish Pathak is in his 3rd year pursuing a B.E. in Electrical and Electronics Engineering. As the President of BHCG, he provides strategic direction and ensures the club's growth. Anish has been instrumental in driving success across multiple live projects, spearheading key events, and leading initiatives to enhance engagement. He cultivates a collaborative culture,  inspires innovation, and sets the vision for the club's future through his leadership. Outside of his professional and academic pursuits, Anish is a passionate photographer and sports enthusiast, bringing creativity and energy to all he does."
						}
						link={
							'https://www.linkedin.com/in/anish-pathak-71961026b/'
						}
					/>
					<TeamPOR
						align='right'
						role={'VICE PRESIDENT - CONSULTING'}
						name={'ARYAN RAE'}
						profile={por_2}
						information={
							"Aryan Rae is a 3rd year student working towards a B.E. in Mechanical Engineering. He has been an integral part of the Consulting Division, playing a key role in organizing various events and in-house sessions. Aryan has demonstrated a strong interest in operations management and finance, significantly contributing to the team's success. He showcased his leadership skills by leading a major consulting event during ATMOS."
						}
						link={'https://www.linkedin.com/in/aryanrae/'}
					/>
					<TeamPOR
						align='left'
						role={'VICE PRESIDENT - PRODUCT'}
						name={'VAIBHAV AGARWAL'}
						profile={por_3}
						information={
							'Vaibhav Agarwal is in his 3rd year, pursuing a B.E. in Electronics and Instrumentation Engineering. Vaibhav has actively contributed to the club by participating in fests and other activities. He took the initiative in the product cohort "Prod-eezy," playing a major role in its success by bringing in mentors and managing each session. He has a keen interest in product management and has completed internships in this domain.'
						}
						link={
							'https://www.linkedin.com/in/vaibhav-agarwal-52a45324b/'
						}
					/>
					<TeamPOR
						align='right'
						role={'D. O. P - CONSULTING'}
						name={'RITWIK PANDEY'}
						profile={por_4}
						information={
							'Ritwik Pandey is a 3rd year student pursuing a B.E. in Electrical and Electronics Engineering. He has been actively involved in club activities since his first year, contributing to various fronts such as annual competitions, the product management cohort, and pitching for potential live projects. Ritwik has a strong interest in product management and consulting, continually expanding his knowledge in these areas.'
						}
						link={
							'https://www.linkedin.com/in/ritwik-pandey-215a1b26a/'
						}
					/>
					<TeamPOR
						align='left'
						role={'D. O. P - PRODUCT'}
						name={'ANGAD SINGH'}
						profile={por_5}
						information={
							"Angad is an ambitious student entering his third year, pursuing a dual degree in M.Sc. Chemistry and Mechanical Engineering. With a solid background in product management, Angad has significantly contributed to BHCG by participating in competitions, contributing to the creation of the club's casebook, and leading the organization of a product management cohort. His expertise and proactive involvement have made him a valuable asset to the club and his peers."
						}
						link={
							'https://www.linkedin.com/in/angad-singh-167915269/'
						}
					/>
				</div>
				<img className='baseline' src={baseline} alt='Divider' />
			</div>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default Team;
