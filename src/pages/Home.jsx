import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    const footerRef = useRef(null);

    return (
        <>
            <Header type={"colour"} footerRef={footerRef} />
            <div>Home</div>
            <Footer footerRef={footerRef} />
        </>
    );
};

export default Home;
