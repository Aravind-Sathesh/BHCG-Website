import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsGRP from '../components/Project';

import heading from '../assets/projects/Heading.webp';
import white_line from '../assets/projects/white_line.webp';
import ellipse from '../assets/projects/Ellipse.webp';
import baseline from '../assets/white_baseline.webp';

import grp1 from '../assets/projects/gp1.webp';
import grp2 from '../assets/projects/gp2.webp';
import grp3 from '../assets/projects/gp3.webp';
import grp4 from '../assets/projects/gp4.webp';
import grp5 from '../assets/projects/gp5.webp';
import grp6 from '../assets/projects/gp6.webp';
import grp7 from '../assets/projects/gp7.webp';
import grp8 from '../assets/projects/gp8.webp';
import grp9 from '../assets/projects/gp9.webp';
import grp10 from '../assets/projects/gp10.webp';

const Projects = () => {
	const footerRef = useRef(null);

	return (
		<>
			<Header type={'colour projects'} footerRef={footerRef} />
			<div className='PROJECTS'>
				<div className='team-heading'>
					<img src={heading} alt='projects heading' />
				</div>
				<div className='main line flex'>
					<img src={ellipse} className='anchor' alt='Anchor' />
					<img id='verti' src={white_line} alt='' />
					{Array.from({ length: 10 }).map((_, index) => (
						<img
							key={index}
							id={`dt${index + 1}`}
							className='dots'
							src={ellipse}
							alt={`Dot ${index + 1}`}
						/>
					))}
					Here’s the updated code with IDs changed to be in order from
					1 to 10:
					<ProjectsGRP id='1' align='left' image={grp9}>
						<p>
							Over two months, BHCG supported Suvarna Consultants
							by:
						</p>
						<ul>
							<li>
								Conducting market and competitive analysis for
								strategic positioning.
							</li>
							<li>
								Providing industry insights to guide focus
								areas.
							</li>
							<li>
								Enhancing client outreach and digital presence.
							</li>
						</ul>
					</ProjectsGRP>
					<ProjectsGRP id='2' align='right' image={grp10}>
						<p>Estimated TAM across three verticals:</p>
						<ul>
							<li>Vertical 1: School adoption rates.</li>
							<li>Vertical 2: Key product categories.</li>
							<li>
								Vertical 3: Student population and revenue
								potential.
							</li>
							<li>
								Provided SAM/TAM estimates and a starter
								database.
							</li>
						</ul>
					</ProjectsGRP>
					<ProjectsGRP id='3' align='left' image={grp8}>
						<ul>
							<li>
								Identified a new vertical market that now
								represents a considerable share of their product
								offering.
							</li>
							<li>
								Developed marketing strategies to significantly
								increase traffic across all of their social
								media platforms.
							</li>
						</ul>
					</ProjectsGRP>
					<ProjectsGRP id='4' align='right' image={grp7}>
						<p className='gp-5-top'>
							Strategy: Conduct market research, identify growth
							opportunities, optimize go-to-market strategies.
						</p>
						<p>
							Marketing: Research market opportunities, track
							marketing outcomes, develop digital campaigns.
						</p>
						<p>
							Product: Understand user needs, optimize product
							features, plan and launch MVPs.
						</p>
					</ProjectsGRP>
					<ProjectsGRP id='5' align='left' image={grp6}>
						<ul>
							<li>
								User assessment, categorization, and product
								assessment.
							</li>
							<li>User acquisition and business expansion.</li>
							<li>
								Formulated a new marketing strategy based on
								market analysis.
							</li>
							<li>
								Optimal product pricing and introduced a market
								entry strategy.
							</li>
						</ul>
					</ProjectsGRP>
					<ProjectsGRP id='6' align='right' image={grp5}>
						<p className='gp-5-top'>Vendor Analysis</p>
						<p>
							Offline Partners: <br />
							Premium Salons & Spas
						</p>
						<p>
							Scope: <br />
							Vendor list, partnership terms, financial details,
							and related aspects.
						</p>
						<p>
							Market Penetration Strategy: <br />
							Explored and implemented new approaches to enhance
							growth and expand market reach.
						</p>
					</ProjectsGRP>
					<ProjectsGRP id='7' align='left' image={grp4}>
						<p>A community-based social media platform</p>
						<ul>
							<li>
								Conducted market research for the company and
								performed a SWOT analysis on other available
								platforms.
							</li>
							<li>
								Evaluated and assessed the app and user
								experiences, identifying issues and proposing
								potential solutions.
							</li>
						</ul>
					</ProjectsGRP>
					<ProjectsGRP id='8' align='right' image={grp3}>
						<ul>
							<li>Market Study & Collaboration Strategy</li>
							<li>Branding Strategy</li>
							<li>
								Designed research and brand development
								strategies.
							</li>
							<li>
								Devised marketing, media, and PR plans to
								support commercialization.
							</li>
						</ul>
					</ProjectsGRP>
					<ProjectsGRP id='9' align='left' image={grp2}>
						<p>
							An extensive Competitor and Market analysis for
							Restat, an upcoming open-source tech start-up.
						</p>
						<ul>
							<li>
								Simplified the UI and UX of the application
								keeping the user in mind, and improved the
								codebase to increase the functionality of the
								app.
							</li>
							<li>
								Market analysis and analysis of the market
								leaders.
							</li>
						</ul>
					</ProjectsGRP>
					<ProjectsGRP id='10' align='right' image={grp1}>
						<p>
							Ace of Pubs, A start-up that conducts 150+ quizzes
							per month in restaurants across India.
						</p>
						<ul>
							<li>
								Measured the revenue impact of Ace of Pubs on
								restaurants.
							</li>
							<li>
								Compiled the findings into a pitch deck for Ace
								of Pubs, aiding them in onboarding more
								restaurants.
							</li>
						</ul>
					</ProjectsGRP>
				</div>
				<img className='baseline' src={baseline} alt='Divider' />
			</div>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default Projects;
