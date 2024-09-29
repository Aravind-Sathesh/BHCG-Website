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

const profiles = [
    p_1_profile,
    p_2_profile,
    p_3_profile,
    p_4_profile,
    p_5_profile,
    p_6_profile,
];
const companies = [
    p_1_company,
    p_2_company,
    p_3_company,
    p_4_company,
    p_5_company,
    p_6_company,
];

const speakersInfo = [
    { name: "Raam G", title: "Founder" },
    { name: "Sravya VSV", title: "Product Manager" },
    { name: "Keshav Mahajan", title: "Product Manager" },
    { name: "Prateek Saxena", title: "Senior Product Manager" },
    { name: "Prateek Dudeja", title: "Product Manager" },
    { name: "Ayan Vora", title: "Product Analytics" },
];

const speakerData = speakersInfo.map((speaker, index) => ({
    ...speaker,
    imgSrc: profiles[index],
    companyLogo: companies[index],
}));

const extendedSpeakerData = [...speakerData, ...speakerData.slice(0, 4)];

const Product_Speakers = () => (
    <div className="Speakers">
        <h1>Past Speakers</h1>
        <div className="carousel">
            <div className="carousel-track">
                {extendedSpeakerData.map((speaker, index) => (
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

export default Product_Speakers;
