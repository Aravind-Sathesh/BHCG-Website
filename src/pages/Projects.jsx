import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
    const footerRef = useRef(null);

    return (
        <>
            <Header type={"colour"} footerRef={footerRef} />
            <div>Projects</div>
            <Footer footerRef={footerRef} />
        </>
    );
};

export default Projects;
