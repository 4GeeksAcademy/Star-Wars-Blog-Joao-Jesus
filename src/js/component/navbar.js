import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark  mb-3">
			<Link to="/">
				<span className="navbar-brand bg-dark text-light mb-0 h1">Home page</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<Link className="btn btn-primary" to="/favorites">View Favorites</Link>
				</Link>
			</div>
		</nav>
	);
};
