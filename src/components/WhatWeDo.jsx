import React from "react";

const WhatWeDo = (props) => {
    return (
        <div className="introComp">
            <div className="introtext">
                <h1>{props.heading}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    );
};

export default WhatWeDo;
