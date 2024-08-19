import React from "react";
import { Link } from "react-router-dom";

import facebookIcon from "../assets/footer/facebook.png";
import instagramIcon from "../assets/footer/instagram.png";
import twitterIcon from "../assets/footer/twitter.png";
import linkedinIcon from "../assets/footer/linkedin.png";

import white_logo from "../assets/white_logo.png";
import divider from "../assets/footer/divider.png";
import mailIcon from "../assets/footer/mail.png";
import phoneIcon from "../assets/footer/phone.png";
import locationIcon from "../assets/footer/location.png";

const Footer = () => {
    return (
        <footer className="FOOTER">
            <div className="lastdiv flex">
                <div className="icons flex">
                    <Link
                        to="https://www.instagram.com/the_bhcg/"
                        rel="noopener"
                        target="_blank"
                    >
                        <img src={instagramIcon} alt="Instagram" />
                    </Link>
                    <Link
                        to="https://www.facebook.com/TheBHCG"
                        rel="noopener"
                        target="_blank"
                    >
                        <img src={facebookIcon} alt="Facebook" />
                    </Link>
                    <Link
                        to="https://x.com/the_bhcg"
                        rel="noopener"
                        target="_blank"
                    >
                        <img src={twitterIcon} alt="Twitter" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/company/bits-hyderabad-consulting-group/"
                        rel="noopener"
                        target="_blank"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </Link>
                </div>

                <div className="navigations flex">
                    <img
                        src={white_logo}
                        alt="BHCG Logo"
                        className="footer-logo"
                    />
                    <img src={divider} alt="Divider" />

                    <div className="contacts flex-col">
                        <p className="flex">
                            <img src={mailIcon} alt="Mail" />
                            bhcg@hyderabad.bits-pilani.ac.in
                        </p>
                        <p className="flex">
                            <img src={phoneIcon} alt="Phone" />
                            +91 99999 99999
                        </p>
                        <p className="flex">
                            <img src={locationIcon} alt="Location" />
                            Hyderabad, IN
                        </p>
                    </div>
                </div>
            </div>
            <div className="end flex">© BHCG 2024</div>
        </footer>
    );
};

export default Footer;
