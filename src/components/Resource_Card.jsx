import React from "react";
import { Link } from "react-router-dom";

import redirect from "../assets/product_consulting/redirect.svg";

const Resource_Card = (props) => {
    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement("a");
        link.href = props.linkHref;
        link.download = props.imageAlt;
        link.click();
    };

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
                {props.type === "download" ? (
                    <Link onClick={handleDownload} className="resource-link">
                        {props.buttonText}
                        <img
                            className="redirect-icon"
                            src={redirect}
                            alt={redirect}
                        />
                    </Link>
                ) : (
                    <Link to={props.linkHref} className="resource-link">
                        {props.buttonText}
                        <img
                            className="redirect-icon"
                            src={redirect}
                            alt={redirect}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Resource_Card;
