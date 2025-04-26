import React, { useRef } from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import ProjectsGRP from '../components/Project';
import projects from '../data/projects.json';
import white_line from '../assets/projects/white_line.webp';
import ellipse from '../assets/projects/Ellipse.webp';
import baseline from '../assets/white_baseline.webp';

const Projects = () => {
	const footerRef = useRef(null);
	const reversedProjects = [...projects].reverse();
	const numProjects = reversedProjects.length;

	console.log(reversedProjects);

	return (
		<>
			<Header type={'colour projects'} footerRef={footerRef} />
			<div className='PROJECTS'>
				<Title titleName='projects' themeColor='white' />
				<div className='main line flex'>
					{numProjects > 0 && (
						<>
							<img id='verti' src={white_line} alt='Timeline' />
							{Array.from({ length: numProjects }).map(
								(_, index) => (
									<img
										key={`dot-${index}`}
										id={`dt${index + 1}`}
										className='dots'
										src={ellipse}
										alt={`Timeline Dot ${index + 1}`}
									/>
								)
							)}
						</>
					)}

					{reversedProjects.map((project, index) => (
						<ProjectsGRP
							key={project.id || `project-${index}`}
							id={numProjects - project.id + 1}
							company={project.company}
							align={index % 2 === 0 ? 'left' : 'right'}
							image={project.logo}
						>
							{project.content.paragraphs &&
								project.content.paragraphs.length > 0 &&
								project.content.paragraphs.map(
									(paragraph, idx) => (
										<p key={`p-${project.id}-${idx}`}>
											{paragraph}
										</p>
									)
								)}
							{project.content.bulletPoints &&
								project.content.bulletPoints.length > 0 && (
									<ul>
										{project.content.bulletPoints.map(
											(point, idx) => (
												<li
													key={`bp-${project.id}-${idx}`}
												>
													{point}
												</li>
											)
										)}
									</ul>
								)}
						</ProjectsGRP>
					))}
				</div>
				{numProjects > 0 && (
					<img className='baseline' src={baseline} alt='Divider' />
				)}
			</div>
			<Footer footerRef={footerRef} />
		</>
	);
};

export default Projects;
