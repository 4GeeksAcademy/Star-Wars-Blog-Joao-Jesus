import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
  console.log(theid); // corrected

  useEffect(() => {
    
    actions.getOnePlanet(theid);
  }, []); // dependency array added

  return (
    <div className="container">
      <div className="card">
        <p>Name:{store.singlePlanet?.properties?.diameter}</p>
        <p>Heigth:{store.singlePlanet?.properties?.rotation_period}</p>
        <p>Heigth:{store.singlePlanet?.properties?.gravity}</p>
        <p>gender:{store.singlePlanet?.properties?.population}</p>
        <p>eye_color:{store.singlePlanet?.properties?.surface_watereye}</p>
      </div>
    </div>
  );
};

SinglePlanets.propTypes = {
  match: PropTypes.object,
};
