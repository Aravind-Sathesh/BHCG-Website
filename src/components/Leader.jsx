import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import linkedinLogo from "../assets/team/linkedinLogo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Leader = (props) => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div
            className={`TEAM_POR`}
            data-aos={`fade-${props.align === "left" ? "right" : "left"}`}
        >
            <div className={`gp-${props.align}-heading`}>
                <h1>{props.role}</h1>
                <h2 className="flex">
                    {props.name}
                    <Link to={props.link} rel="noopener" target="_blank">
                        <img src={linkedinLogo} alt="LinkedIn Logo" />
                    </Link>
                </h2>
            </div>
            <div className={`gp-${props.align}-text flex`}>
                <div className={`gp-${props.align}-picture`}>
                    <img
                        className="photo"
                        src={props.profile}
                        alt="Linkedin Profile"
                    />
                </div>
                <p>{props.information}</p>
            </div>
        </div>
    );
};

export default Leader;
