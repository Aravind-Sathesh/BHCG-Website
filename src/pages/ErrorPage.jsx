import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="ERRORPAGE">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <h3>The page you are looking for does not exist.</h3>
            <Link to="/home" className="button">
                Return to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
