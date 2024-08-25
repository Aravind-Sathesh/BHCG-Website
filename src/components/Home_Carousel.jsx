import React from "react";

const Home_Carousel = (props) => {
    return (
        <div className="carousel-card">
            <div className="header">
                <h2>{props.title}</h2>
                <img src={props.path} alt={props.title} />
            </div>
            <ul className="list">
                <li className="li">{props.li_1}</li>
                <li className="li">{props.li_2}</li>
                <li className="li">{props.li_3}</li>
                <li className="li">{props.li_4}</li>
            </ul>
        </div>
    );
};

export default Home_Carousel;
