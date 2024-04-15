import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const { 
    
   } = useParams();
 
  const imgUrl = store.singleCharacter ? `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg` : '';
  const name = store.singleCharacter ? store.singleCharacter.properties.name : '';
  
  const handleAddToFavorites = () => {
    const favoriteItem = { id: theid, name: store.singleCharacter.properties.name };
    console.log("favoriteItem")
    console.log(favoriteItem)
    // actions.addToFavorites(favoriteItem);
  };
  
  useEffect(() => {
    actions.getOneCharacters(theid);
    
  }, []); // dependency array added

  return (
    <>
     
      <div className="card" >
       
        <div className="card-body"> 
        {imgUrl && <img src={imgUrl} alt={name} />}
        <p>Name:{store.singleCharacter?.properties?.name}</p>
        <p>Heigth:{store.singleCharacter?.properties?.height}</p>
        <p>gender:{store.singleCharacter?.properties?.gender}</p>
        <p>eye_color:{store.singleCharacter?.properties?.eye_color}</p>
      </div></div>
      <div>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
    </>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
