import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark  mb-2 ">
			<Link to="/" className="btn btn-primary m-3">
				<span className="navbar-brand text-light  mb-0 h1">Home page</span>
			</Link>
			<div className="ml-3">
				<Link to="/demo">
				<Link className="btn btn-primary m-3" to="/favorites">View Favorites</Link>
				</Link>
			</div>
		</nav>
	);
};
