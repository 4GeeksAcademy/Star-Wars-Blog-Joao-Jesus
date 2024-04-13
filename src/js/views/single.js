import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
 
  const imgUrl = store.singleCharacter ? `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg` : '';
  const name = store.singleCharacter ? store.singleCharacter.properties.name : '';
  

  useEffect(() => {
    actions.getOneCharacters(theid);
    
  }, []); // dependency array added

  return (
    <div className="container">
     {imgUrl && <img src={imgUrl} alt={name} />}
      <div className="card">
        <p>Name:{store.singleCharacter?.properties?.name}</p>
        <p>Heigth:{store.singleCharacter?.properties?.height}</p>
        <p>gender:{store.singleCharacter?.properties?.gender}</p>
        <p>eye_color:{store.singleCharacter?.properties?.eye_color}</p>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
