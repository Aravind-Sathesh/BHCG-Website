import React from "react";

const Speaker = ({ imgSrc, name, title, companyLogo }) => {
    return (
        <div className="speaker">
            <img src={imgSrc} alt={`${name}`} className="profile" />
            <h2>{name}</h2>
            <h3>{title}</h3>
            <img src={companyLogo} alt="Company Logo" className="company" />
        </div>
    );
};

export default Speaker;
