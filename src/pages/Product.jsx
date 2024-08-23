import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";

import heading from "../assets/product_consulting/product.png";
import ProdStorm_CaseCompetition from "../components/ProdStorm_CaseCompetition";
import Product_Speakers from "../components/Product_Speakers";

import baseLine from "../assets/teal_baseline.png";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
    const footerRef = useRef(null);
    const headerRef = useRef(null);

    return (
        <div className="PRODUCT">
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
                    content="In the realm of product management, our club is
                            equally committed to nurturing talent. We offer
                            product management services to various
                            organizations, including startups and corporate
                            firms. To cultivate the skills of aspiring product
                            managers, we conduct specialized workshops and
                            invite seasoned professionals to share their
                            experiences through fireside chats. These
                            initiatives are designed to equip students with the
                            expertise needed to excel in the dynamic field of
                            product management."
                />
            </div>
            <ProdStorm_CaseCompetition title="ProdStorm">
                <p>
                    The Product Management division at BHCG is pleased to
                    announce the second edition of Prodstorm, our flagship
                    product deck challenge at ATMOS. Building on the first
                    edition's success, this year's Prodstorm aims to expand its
                    scale and impact.
                </p>
                <br />
                <p>
                    Participants will extend existing product functionalities or
                    develop new products. Their ingenuity, feasibility, and
                    prioritization will be evaluated by seasoned product
                    executives.
                </p>
                <br />
                <p>
                    Prodstorm provides fresh insights to our partners and a
                    platform for participants to enhance their product
                    management skills. Prodstorm also offers networking
                    opportunities, connecting participants with industry experts
                    and like-minded peers.
                </p>
            </ProdStorm_CaseCompetition>
            <Product_Speakers />
            <div className="CONTAINER">
                <h1>Testimonials</h1>
                <Carousel className="testimonials">
                    <Carousel.Item interval={15000}>
                        <div className="testimony">
                            "It was a really well organized cohort lead by
                            industry experts who clearly explained real life
                            applications of concepts and gave us meaningful,
                            thought provoking assignments based on current
                            problems faced by various industries. I would highly
                            recommend students to join this cohort to pursue a
                            career in product management roles."
                            <br />
                            <p>~Ashish Kandhadai</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={15000}>
                        <div className="testimony">
                            "The Product Management Cohort at BHCG was an
                            exciting initiative the student community took,
                            wherein they invited Alumni and Industry experts
                            working in Product Management to conduct sessions on
                            the fundamentals of Product Management and
                            interview-specific topics. One suggestion would be
                            to give access to cohort materials and recordings
                            once the cohort has ended,as it would help while
                            revising for final placements."
                            <br />
                            <p>~Aryaan Parida</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={15000}>
                        <div className="testimony">
                            "BHCG's PM cohort was a total eye-opener as well as
                            a game changer for me. The weekly classes with
                            industry pros gave a real taste of what Product
                            Management is all about. I loved the mix of learning
                            and hands-on practice. Following the weekly lectures
                            and completing the hands on exercises along with
                            self practice helped me to land a Product role in
                            the beginning of my career."
                            <br />
                            <p>~Aman</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={15000}>
                        <div className="testimony">
                            "I attended the cohort and found it really helped as
                            that was the time I was trying to discover more
                            about product management and that cohort helped me a
                            lot. Keep up the good work and hope to see more like
                            this from your end."
                            <br />
                            <p>~Devansh Verma</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <img className="baseline" src={baseLine} alt="Divider" />
            <Footer footerRef={footerRef} headerRef={headerRef} />
        </div>
    );
};

export default Product;
