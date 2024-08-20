import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Consulting = () => {
    const footerRef = useRef(null);

    return (
        <>
            <Header type={"light"} footerRef={footerRef} />
            <div>Consulting</div>
            <Footer footerRef={footerRef} />
        </>
    );
};

export default Consulting;
