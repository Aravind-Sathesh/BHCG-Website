import React, { useState } from "react";
import { Link } from "react-router-dom";
import teal_logo from "../assets/teal_logo.webp";
import white_logo from "../assets/white_logo.webp";

const Header = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToFooter = () => {
        props.footerRef.current.scrollIntoView({ behavior: "smooth" });
        if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close the menu if open
    };

    return (
        <header className={props.type + " HEADER"} ref={props.headerRef}>
            <nav className="navbar">
                <div className="logo">
                    <img
                        src={props.type === "light" ? teal_logo : white_logo}
                        alt="BHCG Logo"
                    />
                </div>
                <div className="nav-container">
                    <ul
                        className={`nav-links ${
                            isMobileMenuOpen ? "open" : ""
                        }`}
                    >
                        <li>
                            <Link
                                to="/home"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/team"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/consulting"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Consulting
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/product"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link onClick={scrollToFooter}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
