import React from "react";
import { Link } from "react-router-dom";
import linkedinLogo from "../assets/team/linkedinLogo.png";

const TeamPOR = (props) => {
    return (
        <div className={`TEAM_POR`}>
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

export default TeamPOR;
