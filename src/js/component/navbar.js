import React from "react";
import { Link } from "react-router-dom";

import FavoritesCounter from "./favoritesCounter"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light mb-3 justify-content-evenly ">
           
            <Link to="/">
                <img
                    className="starWarsLogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1041px-Star_Wars_Logo.svg.png"
                    alt="Star Wars Logo"
                    style={{ width: "100px", height: "auto" }}
                />
            </Link>
            
            <div className="ml-3">
                <Link to="/demo">
                    <Link className="btn btn-danger m-3" to="/favorites">View Favorites</Link>
                </Link>
            </div>

            <FavoritesCounter></FavoritesCounter>
        </nav>
    );
};