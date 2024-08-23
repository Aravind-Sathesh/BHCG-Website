import React from "react";
import { Link } from "react-router-dom";

import redirect from "../assets/product_consulting/redirect.svg";

const Resource_Card = (props) => {
    return (
        <div className="resource-card">
            <img
                src={props.imageSrc}
                className="resource-image"
                alt={props.imageAlt}
            />
            <div className="card-content">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">{props.description}</p>

                <a
                    href={props.linkHref}
                    className="resource-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.buttonText}
                    <img
                        className="redirect-icon"
                        src={redirect}
                        alt={redirect}
                    />
                </a>
            </div>
        </div>
    );
};

export default Resource_Card;
