import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import WhatWeDo from "../components/WhatWeDo";
import ProdStorm_CaseCompetition from "../components/ProdStorm_CaseCompetition";
import Consulting_Speakers from "../components/Consulting_Speakers";
import Resource_Card from "../components/Resource_Card";

import baseLine from "../assets/teal_baseline.webp";
import heading from "../assets/product_consulting/consulting.webp";

import bmc from "../assets/product_consulting/bmc.webp";
import bhcgbrochure from "../assets/product_consulting/bhcgbrochure.webp";
import casebook from "../assets/product_consulting/casebook.webp";

import casebookpdf from "../assets/product_consulting/Casebook.pdf";
import brochurepdf from "../assets/product_consulting/Collaboration Brochure.pdf";

const Consulting = () => {
    const footerRef = useRef(null);
    const headerRef = useRef(null);

    return (
        <div className="CONSULTING">
            <Header
                type={"light"}
                footerRef={footerRef}
                headerRef={headerRef}
            />
            <div>
                <div className="heading">
                    <img src={heading} alt="Heading" />
                </div>
                <WhatWeDo
                    heading="What We Do"
                    content="We are the Management Club of BITS Hyderabad, dedicated to fostering a community of consulting enthusiasts. Our club provides consultancy services to startups, non-profit organizations, and corporate firms. To help students develop their consulting skills, we organize workshops and host fireside chats with founders, executives, and industry veterans. These activities offer valuable insights and practical knowledge, preparing students for real-world challenges in the consulting industry."
                />
            </div>
            <ProdStorm_CaseCompetition title="Case Sensitive">
                <p>
                    Our Case Competition is a three-round business challenge
                    where top minds compete to develop optimal strategies,
                    marketing plans, and operational solutions. This competition
                    aims to test participants' analytical and creative skills by
                    engaging them with a real-life business problem faced by one
                    of our partner organizations.
                </p>
                <br />
                <p>
                    Participants' solutions are evaluated by the organization's
                    management, with the potential for implementation to address
                    the actual business challenge. Through the Case Competition,
                    organizations benefit from fresh perspectives on their
                    problems and gain an opportunity to identify and recruit
                    talented individuals. Additionally, the competition provides
                    valuable marketing and publicity avenues, enhancing the
                    organization's branding and reach.
                </p>
            </ProdStorm_CaseCompetition>
            <Consulting_Speakers />
            <div className="resources-section">
                <h1 className="teal-heading">Resources</h1>
                <div className="card-container">
                    <Resource_Card
                        imageSrc={casebook}
                        imageAlt="Consulting Casebook"
                        title="Consulting Casebook"
                        description="Features case frameworks, industry analysis, and solved cases by the club. A great starting point for consulting and product enthusiasts, offering structured approaches and additional resources."
                        buttonText="Download"
                        linkHref={casebookpdf}
                    />
                    <Resource_Card
                        imageSrc={bhcgbrochure}
                        imageAlt="BHCG Collaboration Brochure"
                        title="Collaboration Brochure"
                        description="Outlines our mission, vision, services, past collaborations, notable alumni, and contact information, highlighting the our club's dedication to consulting and product management excellence."
                        buttonText="Download"
                        linkHref={brochurepdf}
                    />
                    <Resource_Card
                        imageSrc={bmc}
                        imageAlt="Business Model Chronicles"
                        title="Business Model Chronicles"
                        description="Provides weekly insights into successful businesses, focusing on operations, growth strategies, and frameworks. Focuses on product management, consulting, and understanding top companies."
                        buttonText="Explore"
                        linkHref="https://www.instagram.com/explore/tags/businessmodelchronicles/"
                    />
                </div>
            </div>

            <img className="baseline" src={baseLine} alt="Divider" />
            <Footer footerRef={footerRef} headerRef={headerRef} />
        </div>
    );
};

export default Consulting;
