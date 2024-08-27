import React from "react";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import car1 from "../assets/product_consulting/carousel_1.svg";
import car2 from "../assets/product_consulting/carousel_2.svg";
import car3 from "../assets/product_consulting/carousel_3.svg";
import car4 from "../assets/product_consulting/carousel_4.svg";

const ProdStorm_CaseCompetition = ({ title, children }) => {
    return (
        <div className="case">
            <h1>{title}</h1>
            <div className="flex">
                <div className="carousel">{children}</div>
                <div className="content">
                    <Carousel>
                        <Carousel.Item>
                            <div className="s1">
                                <img src={car1} alt="REGISTER" />
                                <h3>REGISTER</h3>
                                <p>
                                    Registration of all of the participants who
                                    have applied
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="s1">
                                <img src={car2} alt="SUMMARIZE" />
                                <h3>SUMMARIZE</h3>
                                <p>
                                    Participants are required to summarise their
                                    ideas within two pages
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="s1">
                                <img src={car3} alt="PRESENT" />
                                <h3>PRESENT</h3>
                                <p>
                                    Shortlisted candidates will proceed to craft
                                    a detailed deck of their solution
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="s1">
                                <img src={car4} alt="FINALS" />
                                <h3>FINALS</h3>
                                <p>
                                    Winning decks get an opportunity to present
                                    to the jury and a chance to win prizes.
                                </p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default ProdStorm_CaseCompetition;
