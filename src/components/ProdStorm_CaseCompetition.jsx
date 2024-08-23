import React from "react";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import car1 from "../assets/product_consulting/carousel_1.png";
import car2 from "../assets/product_consulting/carousel_2.png";
import car3 from "../assets/product_consulting/carousel_3.png";
import car4 from "../assets/product_consulting/carousel_4.png";

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
                                <img src={car1} alt="PREREQUISITES" />
                                <h3>PREREQUISITES</h3>
                                <p>
                                    Registration of all of the participants who
                                    have applied
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="s1">
                                <img src={car2} alt="SUMMARIES" />
                                <h3>SUMMARIES</h3>
                                <p>
                                    Participants are required to summarise their
                                    ideas within two pages
                                </p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="s1">
                                <img src={car3} alt="DECKS" />
                                <h3>DECKS</h3>
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
