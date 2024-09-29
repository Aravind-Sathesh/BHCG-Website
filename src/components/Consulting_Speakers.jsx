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

const profiles = [
    c_1_profile,
    c_2_profile,
    c_3_profile,
    c_4_profile,
    c_5_profile,
    c_6_profile,
];
const companies = [
    c_1_company,
    c_2_company,
    c_3_company,
    c_4_company,
    c_5_company,
    c_6_company,
];

const speakersInfo = [
    { name: "Sainath Gupta", title: "Founder & CEO" },
    { name: "Sujit Jagirdar", title: "CIO" },
    { name: "Sanjay Mandava", title: "Founder & CEO" },
    { name: "Sri Teja Allaparthi", title: "Co-founder & CTO" },
    { name: "Vikash Jain", title: "Managing Director" },
    { name: "Mythryee Ganapathy", title: "Product Leader" },
];

const speakerData = speakersInfo.map((speaker, index) => ({
    ...speaker,
    imgSrc: profiles[index],
    companyLogo: companies[index],
}));

const extendedSpeakerData = [...speakerData, ...speakerData.slice(0, 4)];

const Consulting_Speakers = () => (
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

export default Consulting_Speakers;
