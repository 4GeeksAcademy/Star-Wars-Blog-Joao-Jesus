import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  const [isInFavorites, setIsInFavorites] = React.useState(false);


  const imgUrl = store.singlePlanet
    ? `https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`
    : "";
  
    const name = store.singlePlanet ? 
    store.singlePlanet.properties.name 
    : "";


  const handleAddToFavorites = () => {
    const favoriteItem = {
      id: theid,
      name: store.singlePlanet.properties.name,
      type: "planet",
    };

    actions.addToFavorites(favoriteItem);
  };


  const handleRemoveFromFavorites = () => {
    const favoriteItem = {
      id: theid,
      type: "planet",
      name: store.singlePlanet.properties.name,
    };

    actions.removeFromFavorites(favoriteItem);
  };

  useEffect(() => {
    actions.getOnePlanet(theid);
  }, [theid]); 

  useEffect(() => {
    const doesItExist =
      store?.favorites?.filter((favorite) => {
        return favorite?.id === theid && favorite.type == "planet";
      })?.length > 0;

    setIsInFavorites(doesItExist);
  }, [store?.favorites, theid]);


  return (
    <>
       <div className="container">
       <div className="card-body text-center text-light ">
       
        <h4>Name: {store.singlePlanet?.properties?.name}</h4> 
        {imgUrl && <img src={imgUrl} alt={name} />}
        <p>Diameter: {store.singlePlanet?.properties?.diameter}</p>
        <p>Rotation: {store.singlePlanet?.properties?.rotation_period}</p>
        <p>Gravity: {store.singlePlanet?.properties?.gravity}</p>
        <p>Population: {store.singlePlanet?.properties?.population}</p>
        <p>Terrain: {store.singlePlanet?.properties?.terrain}</p>
        {!isInFavorites ? (
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        ) : (
          <button onClick={handleRemoveFromFavorites}>
            Remove from Favorites
          </button>
        )}
      </div></div>
      <div>
        
      </div>
    </>
  );
};

SinglePlanet.propTypes = {
  match: PropTypes.object,
};