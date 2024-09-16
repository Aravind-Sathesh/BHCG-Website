import React from "react";
import Speaker from "./Speaker";

import c_1_profile from "../assets/product_consulting/consulting_speakers/c_1_profile.webp";
import c_2_profile from "../assets/product_consulting/consulting_speakers/c_2_profile.webp";
import c_3_profile from "../assets/product_consulting/consulting_speakers/c_3_profile.webp";
import c_4_profile from "../assets/product_consulting/consulting_speakers/c_4_profile.webp";
import c_5_profile from "../assets/product_consulting/consulting_speakers/c_5_profile.webp";
import c_6_profile from "../assets/product_consulting/consulting_speakers/c_6_profile.webp";

import c_1_company from "../assets/product_consulting/consulting_speakers/c_1_company.webp";
import c_2_company from "../assets/product_consulting/consulting_speakers/c_2_company.webp";
import c_3_company from "../assets/product_consulting/consulting_speakers/c_3_company.webp";
import c_4_company from "../assets/product_consulting/consulting_speakers/c_4_company.webp";
import c_5_company from "../assets/product_consulting/consulting_speakers/c_5_company.webp";
import c_6_company from "../assets/product_consulting/consulting_speakers/c_6_company.webp";

const speakerData = [
    {
        imgSrc: c_1_profile,
        name: "Sainath Gupta",
        title: "Founder & CEO",
        companyLogo: c_1_company,
    },
    {
        imgSrc: c_2_profile,
        name: "Sujit Jagirdar",
        title: "CIO",
        companyLogo: c_2_company,
    },
    {
        imgSrc: c_3_profile,
        name: "Sanjay Mandava",
        title: "Founder & CEO",
        companyLogo: c_3_company,
    },
    {
        imgSrc: c_4_profile,
        name: "Sri Teja Allaparthi",
        title: "Co-founder & CTO",
        companyLogo: c_4_company,
    },
    {
        imgSrc: c_5_profile,
        name: "Vikash Jain",
        title: "Managing Director",
        companyLogo: c_5_company,
    },
    {
        imgSrc: c_6_profile,
        name: "Mythryee Ganapathy",
        title: "Product Leader",
        companyLogo: c_6_company,
    },
    {
        imgSrc: c_1_profile,
        name: "Sainath Gupta",
        title: "Founder & CEO",
        companyLogo: c_1_company,
    },
    {
        imgSrc: c_2_profile,
        name: "Sujit Jagirdar",
        title: "CIO",
        companyLogo: c_2_company,
    },
    {
        imgSrc: c_3_profile,
        name: "Sanjay Mandava",
        title: "Founder & CEO",
        companyLogo: c_3_company,
    },
    {
        imgSrc: c_4_profile,
        name: "Sri Teja Allaparthi",
        title: "Co-founder & CTO",
        companyLogo: c_4_company,
    },
];

const Consulting_Speakers = () => {
    return (
        <div className="Speakers">
            <h1>Past Speakers</h1>
            <div className="carousel">
                <div className="carousel-track">
                    {speakerData.map((speaker, index) => (
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

export default Consulting_Speakers;
