import React from "react";
import { Link } from "react-router-dom";
import teal_logo from "../assets/teal_logo.webp";
import white_logo from "../assets/white_logo.webp";

const Header = (props) => {
    const scrollToFooter = () => {
        props.footerRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className={props.type + " HEADER"} ref={props.headerRef}>
            <nav className="navbar">
                <div className="logo">
                    <img
                        src={props.type == "light" ? teal_logo : white_logo}
                        alt="BHCG Logo"
                    />
                </div>
                <div className="nav-container">
                    <ul className="nav-links">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/consulting">Consulting</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link onClick={scrollToFooter}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
