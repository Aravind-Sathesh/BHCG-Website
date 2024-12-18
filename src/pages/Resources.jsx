import React, { useRef } from 'react';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import blogs from '../blogs.json';
import baseline from '../assets/teal_baseline.webp';

import bmc from '../assets/resources/bmc.webp';
import eoc from '../assets/resources/eoc.webp';
import bhcgbrochure from '../assets/resources/bhcgbrochure.webp';
import casebook from '../assets/resources/casebook.webp';
import handbook from '../assets/resources/handbook.webp';

const Resources = () => {
	const footerRef = useRef(null);

	return (
		<>
			<Header type={'light'} footerRef={footerRef} />
			<div className='RESOURCES'>
				<Title titleName='resources' themeColor='teal' />
				<div className='resources flexwrap'>
					<ResourceCard
						image={casebook}
						tags={['Consulting', 'Case Study']}
						title='Consulting Casebook'
						description='Features case frameworks, industry analysis, and solved cases by the club. A great starting point for consulting and product enthusiasts, offering structured approaches and additional resources. '
						url='https://drive.google.com/file/d/1fS9HasSumj0bDUlPGJq4b2iwXuKlkrQx/preview'
					/>
					<ResourceCard
						image={bhcgbrochure}
						tags={['Consulting', 'Collaboration']}
						title='BHCG Collaboration Brochure'
						description="Outlines our mission, vision, services, past collaborations, notable alumni, and contact information, highlighting the our club's dedication to consulting and product management excellence."
						url='https://drive.google.com/file/d/1G1K1pPX7tvPnFTITxiiczflsEm97zOqp/preview'
					/>
					<ResourceCard
						image={bmc}
						tags={['Analysis', 'Case Study']}
						title='Business Model Chronicles'
						url='https://www.instagram.com/explore/tags/businessmodelchronicles/'
						description='Provides weekly insights into successful businesses, focusing on operations, growth strategies, and frameworks. Focuses on product management, consulting, and understanding top companies.'
					/>
					<ResourceCard
						image={eoc}
						tags={['Consulting', 'Case Study']}
						title='Evolution of Consulting'
						url='https://www.instagram.com/explore/tags/evolutionofconsulting/'
						description='What began as simple advice on industrial processes has become a global powerhouse shaping business. From efficiency experts to AI-driven solutions, the consulting industry is always evolving.'
					/>
					<ResourceCard
						image={handbook}
						tags={['Product Management', 'Case Study']}
						url='https://drive.google.com/file/d/1it1N--y_SlXSLRKqbtrb7Wn0VnvtPdbY/preview'
						title='Product Handbook'
						description='A detailed guide filled with practical insights, best practices, and essential tools for aspiring and experienced product managers. It is an invaluable resource for navigating the challenges of product management.'
					/>
				</div>
				<Title titleName='blogs' themeColor='teal' />
				<div className='blogs flexwrap'>
					{blogs.map((blog) => (
						<BlogCard
							key={blog.id}
							id={blog.id}
							image={blog.image}
							tags={blog.tags}
							title={blog.title}
							date={blog.date}
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

export default Resources;
