import React from "react";
import Speaker from "./Speaker";

import c_1_profile from "../assets/product_consulting/consulting_speakers/c_1_profile.jpeg";
import c_2_profile from "../assets/product_consulting/consulting_speakers/c_2_profile.jpeg";
import c_3_profile from "../assets/product_consulting/consulting_speakers/c_3_profile.jpg";
import c_4_profile from "../assets/product_consulting/consulting_speakers/c_4_profile.jpeg";
import c_5_profile from "../assets/product_consulting/consulting_speakers/c_5_profile.webp";
import c_6_profile from "../assets/product_consulting/consulting_speakers/c_6_profile.png";

import c_1_company from "../assets/product_consulting/consulting_speakers/c_1_company.png";
import c_2_company from "../assets/product_consulting/consulting_speakers/c_2_company.png";
import c_3_company from "../assets/product_consulting/consulting_speakers/c_3_company.png";
import c_4_company from "../assets/product_consulting/consulting_speakers/c_4_company.png";
import c_5_company from "../assets/product_consulting/consulting_speakers/c_5_company.png";
import c_6_company from "../assets/product_consulting/consulting_speakers/c_6_company.webp";

const Consulting_Speakers = () => {
    return (
        <div className="Speakers">
            <h1>Past Speakers</h1>
            <div className="carousel">
                <div className="carousel-track">
                    <Speaker
                        imgSrc={c_1_profile}
                        name="Sainath Gupta"
                        title="Founder & CEO"
                        companyLogo={c_1_company}
                    />
                    <Speaker
                        imgSrc={c_2_profile}
                        name="Sujit Jagirdar"
                        title="CIO"
                        companyLogo={c_2_company}
                    />
                    <Speaker
                        imgSrc={c_3_profile}
                        name="Sanjay Mandava"
                        title="Founder & CEO"
                        companyLogo={c_3_company}
                    />
                    <Speaker
                        imgSrc={c_4_profile}
                        name="Vikash Jain"
                        title="Managing Director"
                        companyLogo={c_4_company}
                    />
                    <Speaker
                        imgSrc={c_5_profile}
                        name="Sri Teja Allaparthi"
                        title="Co-founder & CTO"
                        companyLogo={c_5_company}
                    />
                    <Speaker
                        imgSrc={c_6_profile}
                        name="Mythryee Ganapathy"
                        title="Product Leader"
                        companyLogo={c_6_company}
                    />
                    <Speaker
                        imgSrc={c_1_profile}
                        name="Sainath Gupta"
                        title="Founder & CEO"
                        companyLogo={c_1_company}
                    />
                    <Speaker
                        imgSrc={c_2_profile}
                        name="Sujit Jagirdar"
                        title="CIO"
                        companyLogo={c_2_company}
                    />
                    <Speaker
                        imgSrc={c_3_profile}
                        name="Sanjay Mandava"
                        title="Founder & CEO"
                        companyLogo={c_3_company}
                    />
                    <Speaker
                        imgSrc={c_4_profile}
                        name="Vikash Jain"
                        title="Managing Director"
                        companyLogo={c_4_company}
                    />
                </div>
            </div>
        </div>
    );
};

export default Consulting_Speakers;
