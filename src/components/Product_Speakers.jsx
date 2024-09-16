import React from "react";
import Speaker from "./Speaker";

import p_1_profile from "../assets/product_consulting/product_speakers/p_1_profile.webp";
import p_2_profile from "../assets/product_consulting/product_speakers/p_2_profile.webp";
import p_3_profile from "../assets/product_consulting/product_speakers/p_3_profile.webp";
import p_4_profile from "../assets/product_consulting/product_speakers/p_4_profile.webp";
import p_5_profile from "../assets/product_consulting/product_speakers/p_5_profile.webp";
import p_6_profile from "../assets/product_consulting/product_speakers/p_6_profile.webp";

import p_1_company from "../assets/product_consulting/product_speakers/p_1_company.webp";
import p_2_company from "../assets/product_consulting/product_speakers/p_2_company.webp";
import p_3_company from "../assets/product_consulting/product_speakers/p_3_company.webp";
import p_4_company from "../assets/product_consulting/product_speakers/p_4_company.svg";
import p_5_company from "../assets/product_consulting/product_speakers/p_5_company.webp";
import p_6_company from "../assets/product_consulting/product_speakers/p_6_company.webp";

const speakersData = [
    {
        imgSrc: p_1_profile,
        name: "Raam G",
        title: "Founder",
        companyLogo: p_1_company,
    },
    {
        imgSrc: p_2_profile,
        name: "Sravya VSV",
        title: "Product Manager",
        companyLogo: p_2_company,
    },
    {
        imgSrc: p_3_profile,
        name: "Keshav Mahajan",
        title: "Product Manager",
        companyLogo: p_3_company,
    },
    {
        imgSrc: p_4_profile,
        name: "Prateek Saxena",
        title: "Senior Product Manager",
        companyLogo: p_4_company,
    },
    {
        imgSrc: p_5_profile,
        name: "Prateek Dudeja",
        title: "Product Manager",
        companyLogo: p_5_company,
    },
    {
        imgSrc: p_6_profile,
        name: "Ayan Vora",
        title: "Product Analytics",
        companyLogo: p_6_company,
    },
    {
        imgSrc: p_1_profile,
        name: "Raam G",
        title: "Founder",
        companyLogo: p_1_company,
    },
    {
        imgSrc: p_2_profile,
        name: "Sravya VSV",
        title: "Product Manager",
        companyLogo: p_2_company,
    },
    {
        imgSrc: p_3_profile,
        name: "Keshav Mahajan",
        title: "Product Manager",
        companyLogo: p_3_company,
    },
    {
        imgSrc: p_4_profile,
        name: "Prateek Saxena",
        title: "Senior Product Manager",
        companyLogo: p_4_company,
    },
];

const Product_Speakers = () => {
    return (
        <div className="Speakers">
            <h1>Past Speakers</h1>
            <div className="carousel">
                <div className="carousel-track">
                    {speakersData.map((speaker, index) => (
                        <Speaker
                            key={index}
                            imgSrc={speaker.imgSrc}
                            name={speaker.name}
                            title={speaker.title}
                            companyLogo={speaker.companyLogo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product_Speakers;
