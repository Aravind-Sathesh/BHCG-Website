import React, { useRef } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import ProjectsGRP from '../components/Project';
import projects from '../projects.json';
import white_line from '../assets/projects/white_line.webp';
import ellipse from '../assets/projects/Ellipse.webp';
import baseline from '../assets/white_baseline.webp';

const Projects = () => {
	const footerRef = useRef(null);

	return (
		<>
			<Header type={'colour projects'} footerRef={footerRef} />
			<div className='PROJECTS'>
				<Title titleName='projects' themeColor='white' />
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
					{projects.map((project, index) => (
						<ProjectsGRP
							key={project.id}
							id={project.id}
							align={index % 2 === 0 ? 'left' : 'right'}
							image={project.logo}
						>
							{project.content.paragraphs.map(
								(paragraph, idx) => (
									<p key={`paragraph-${idx}`}>{paragraph}</p>
								)
							)}
							{project.content.bulletPoints.length > 0 && (
								<ul>
									{project.content.bulletPoints.map(
										(point, idx) => (
											<li key={`bullet-${idx}`}>
												{point}
											</li>
										)
									)}
								</ul>
							)}
						</ProjectsGRP>
					))}
				</div>
				<img className='baseline' src={baseline} alt='Divider' />
			</div>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default Projects;
