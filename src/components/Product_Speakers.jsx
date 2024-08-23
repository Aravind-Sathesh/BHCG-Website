import React from "react";
import Speaker from "./Speaker";

import p_1_profile from "../assets/product_consulting/product_speakers/p_1_profile.jpeg";
import p_2_profile from "../assets/product_consulting/product_speakers/p_2_profile.jpeg";
import p_3_profile from "../assets/product_consulting/product_speakers/p_3_profile.jpeg";
import p_4_profile from "../assets/product_consulting/product_speakers/p_4_profile.jpeg";
import p_5_profile from "../assets/product_consulting/product_speakers/p_5_profile.png";
import p_6_profile from "../assets/product_consulting/product_speakers/p_6_profile.jpeg";

import p_1_company from "../assets/product_consulting/product_speakers/p_1_company.png";
import p_2_company from "../assets/product_consulting/product_speakers/p_2_company.webp";
import p_3_company from "../assets/product_consulting/product_speakers/p_3_company.png";
import p_4_company from "../assets/product_consulting/product_speakers/p_4_company.svg";
import p_5_company from "../assets/product_consulting/product_speakers/p_5_company.webp";
import p_6_company from "../assets/product_consulting/product_speakers/p_6_company.png";

const Product_Speakers = () => {
    return (
        <div className="Speakers">
            <h1>Past Speakers</h1>
            <div className="carousel">
                <div className="carousel-track">
                    <Speaker
                        imgSrc={p_1_profile}
                        name="Raam G"
                        title="Founder"
                        companyLogo={p_1_company}
                    />
                    <Speaker
                        imgSrc={p_2_profile}
                        name="Sravya VSV"
                        title="Product Manager"
                        companyLogo={p_2_company}
                    />
                    <Speaker
                        imgSrc={p_3_profile}
                        name="Keshav Mahajan"
                        title="Product Manager"
                        companyLogo={p_3_company}
                    />
                    <Speaker
                        imgSrc={p_4_profile}
                        name="Prateek Saxena"
                        title="Senior Product Manager"
                        companyLogo={p_4_company}
                    />
                    <Speaker
                        imgSrc={p_5_profile}
                        name="Prateek Dudeja"
                        title="Product Manager"
                        companyLogo={p_5_company}
                    />
                    <Speaker
                        imgSrc={p_6_profile}
                        name="Ayan Vora"
                        title="Product Analytics"
                        companyLogo={p_6_company}
                    />
                    <Speaker
                        imgSrc={p_1_profile}
                        name="Raam G"
                        title="Founder"
                        companyLogo={p_1_company}
                    />
                    <Speaker
                        imgSrc={p_2_profile}
                        name="Sravya VSV"
                        title="Product Manager"
                        companyLogo={p_2_company}
                    />
                    <Speaker
                        imgSrc={p_3_profile}
                        name="Keshav Mahajan"
                        title="Product Manager"
                        companyLogo={p_3_company}
                    />
                    <Speaker
                        imgSrc={p_4_profile}
                        name="Prateek Saxena"
                        title="Senior Product Manager"
                        companyLogo={p_4_company}
                    />
                </div>
            </div>
        </div>
    );
};

export default Product_Speakers;
