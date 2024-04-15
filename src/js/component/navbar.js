import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark mb-3 ">
            <Link to="/" className="btn btn-danger m-3">
                <span className="navbar-brand text-light h1">Home page</span>
            </Link>
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <img
                    className="starWarsLogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1041px-Star_Wars_Logo.svg.png"
                    alt="Star Wars Logo"
                    style={{ width: "200px", height: "auto" }} // Set the width and let the height auto-adjust to maintain aspect ratio
                />
            </div>
            <div className="ml-3">
                <Link to="/demo">
                    <Link className="btn btn-danger m-3" to="/favorites">View Favorites</Link>
                </Link>
            </div>
        </nav>
    );
};
