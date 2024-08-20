import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import facebookIcon from "../assets/footer/facebook.png";
import instagramIcon from "../assets/footer/instagram.png";
import twitterIcon from "../assets/footer/twitter.png";
import linkedinIcon from "../assets/footer/linkedin.png";

import white_logo from "../assets/white_logo.png";
import divider from "../assets/footer/divider.png";
import mailIcon from "../assets/footer/mail.png";
import phoneIcon from "../assets/footer/phone.png";
import locationIcon from "../assets/footer/location.png";

const Footer = ({ footerRef }) => {
    const year = dayjs().year();
    const phno = "+91 99999 99999";

    return (
        <footer className="FOOTER" ref={footerRef}>
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
                            <Link
                                to="mailto:bhcg@hyderabad.bits-pilani.ac.in"
                                rel="noopener"
                                target="_blank"
                                className="footerLink"
                            >
                                bhcg@hyderabad.bits-pilani.ac.in
                            </Link>
                        </p>
                        <p className="flex">
                            <img src={phoneIcon} alt="Phone" />
                            <Link
                                to={`tel:${phno.replace(/\s/g, "")}`}
                                rel="noopener"
                                target="_blank"
                                className="footerLink"
                            >
                                {phno}
                            </Link>
                        </p>
                        <p className="flex">
                            <img src={locationIcon} alt="Location" />
                            <Link
                                to="https://maps.app.goo.gl/NRoC46SqYqvmWwN2A"
                                rel="noopener"
                                target="_blank"
                                className="footerLink"
                            >
                                Hyderabad, IN
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="end flex">{`© BHCG ${year}`}</div>
        </footer>
    );
};

export default Footer;
