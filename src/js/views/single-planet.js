import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
  console.log(theid); // corrected
  const imgUrl = store.singlePlanet ? `https://starwars-visualguide.com/assets/img/planets/${theid}.jpg` : '';
  const name = store.singlePlanet ? store.singlePlanet.properties.name : '';
 
  useEffect(() => {
    
    actions.getOnePlanet(theid);
  }, [theid]); // dependency array added
  console.log(store.singlePlanet);
  return (
    <div className="container">
       {imgUrl && <img src={imgUrl} alt={name} />}
      <div className="card">
        <p>Name:{store.singlePlanet?.properties?.name}</p>
        <p>Diameter:{store.singlePlanet?.properties?.diameter}</p>
        <p>Rotation:{store.singlePlanet?.properties?.rotation_period}</p>
        <p>Gravity:{store.singlePlanet?.properties?.gravity}</p>
        <p>Population:{store.singlePlanet?.properties?.population}</p>
        <p>Terrain:{store.singlePlanet?.properties?.terrain}</p>
      </div>
    </div>
  );
};

SinglePlanets.propTypes = {
  match: PropTypes.object,
};
