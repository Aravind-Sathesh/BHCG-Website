import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Team = () => {
    const footerRef = useRef(null);

    return (
        <>
            <Header type={"light"} footerRef={footerRef} />
            <div>Team</div>
            <Footer footerRef={footerRef} />
        </>
    );
};

export default Team;
