import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
    const footerRef = useRef(null);

    return (
        <>
            <Header type={"colour"} footerRef={footerRef} />
            <div>Product</div>
            <Footer footerRef={footerRef} />
        </>
    );
};

export default Product;
