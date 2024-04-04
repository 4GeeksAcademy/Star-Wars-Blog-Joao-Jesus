import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	console.log(params)

	useEffect = (() => {
		actions.getOneCharacters(theid)
	}, [])
	return (
		<div className="container">
			<div className="card">
				<p>Name:{store.singleCharacter?.properties?.name}</p>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
