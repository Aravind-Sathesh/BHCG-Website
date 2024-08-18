import React from "react";
import { Link } from "react-router-dom";
import teal_logo from "../assets/teal_logo.png";
import white_logo from "../assets/white_logo.png";

const Header = (props) => {
    return (
        <header className={props.type + " HEADER"}>
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
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
