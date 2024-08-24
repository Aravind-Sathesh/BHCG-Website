import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";

import background from "../assets/home_background.webp";
import rectangle from "../assets/teal_rectangle.webp";
import baseLine from "../assets/teal_baseline.webp";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home_Carousel from "../components/Home_Carousel";

import car_1 from "../assets/home/car_1.png";
import car_2 from "../assets/home/car_2.png";
import car_3 from "../assets/home/car_3.png";
import car_4 from "../assets/home/car_4.png";

const Home = () => {
    const footerRef = useRef(null);
    const headerRef = useRef(null);
    const statsRef = useRef(null);
    const [stats, updateStats] = useState([0, 0, 0]);
    const STUDENTS = 200;
    const PROJECTS = 10;
    const EXP = 6;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        updateStats((prevStats) => {
                            const [stat1, stat2, stat3] = prevStats;

                            const newStat1 = Math.min(stat1 + 13, STUDENTS);
                            const newStat2 = Math.min(stat2 + 1, PROJECTS);
                            const newStat3 = Math.min(stat3 + 1, EXP);

                            if (
                                newStat1 === STUDENTS &&
                                newStat2 === PROJECTS &&
                                newStat3 === EXP
                            ) {
                                clearInterval(interval);
                            }

                            return [newStat1, newStat2, newStat3];
                        });
                    }, 90);

                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (observer && statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <>
            <Header
                type={"colour"}
                footerRef={footerRef}
                headerRef={headerRef}
            />
            <div className="HOME">
                <img className="background" src={background} />
                <img className="rectangle" src={rectangle} />
                <div className="hero">
                    <h1>BITS Hyderabad</h1>
                    <h1>Consulting Group</h1>
                    <h3>
                        Empowering students with hands-on consulting and product
                        management projects.
                    </h3>
                </div>
                <WhatWeDo
                    heading="About BHCG"
                    content="The BITS Hyderabad Consulting Group (BHCG) is a vibrant student-led organization established in 2018 to foster a robust consulting and product management culture on campus. At BHCG, we are driven by a community of dedicated and passionate students who collaborate to achieve significant milestones in management and strategy consulting. Our mission extends beyond campus boundaries, as we offer consultancy and product management services to startups, non-profits, and corporate firms in the form of live-projects. We facilitate skill development and industry exposure through workshops and cohorts, sessions with industry leaders, and participation in national competitions providing students with practical, hands-on experience. Through our initiatives, BHCG aims to make a lasting impact on businesses and society, nurturing the next generation of consulting and product management leaders within our campus and beyond."
                />
                <div className="stats" ref={statsRef}>
                    <div className="stat 0">
                        {stats[0] + "+"}
                        <p>Students Empowered</p>
                    </div>
                    <div className="stat 1">
                        {stats[1] + "+"}
                        <p>Live Projects</p>
                    </div>
                    <div className="stat 2">
                        {stats[2] + "+"}
                        <p>Years of Experience</p>
                    </div>
                </div>
                <div className="services">
                    <h1>Services</h1>
                    <Carousel>
                        <Carousel.Item>
                            <Home_Carousel
                                title="Business Strategy and Development"
                                path={car_1}
                                li_1="Strategic planning and development"
                                li_2="Customized business growth strategies"
                                li_3="Enhance operational efficiency"
                                li_4="Achieve long-term business goals"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Home_Carousel
                                title="Market Research & Analysis"
                                path={car_2}
                                li_1="Comprehensive market research"
                                li_2="Insights on trends, opportunities and threats"
                                li_3="In-depth user research"
                                li_4="Comprehensive competitor analysis"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Home_Carousel
                                title="Marketing & Branding Work"
                                path={car_3}
                                li_1="Effective marketing campaigns"
                                li_2="Brand development and positioning"
                                li_3="Increase brand awareness and loyalty"
                                li_4="Drive customer engagement and sales"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Home_Carousel
                                title="UI & UX Interface Design"
                                path={car_4}
                                li_1="Innovative interface design"
                                li_2="User-friendly and intuitive experiences"
                                li_3="Enhance user satisfaction and engagement"
                                li_4="Improve overall product usability"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="baselinediv">
                    <img className="baseline" src={baseLine} alt="Divider" />
                </div>
            </div>
            <Footer footerRef={footerRef} headerRef={headerRef} />
        </>
    );
};

export default Home;
