import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  const [isInFavorites, setIsInFavorites] = React.useState(false);

  const imgUrl = store.singleVehicle
    ? `https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`
    : "";
  const name = store.singleVehicle ? store.singleVehicle.properties.name : "";

  const handleAddToFavorites = () => {
    const favoriteItem = {
      id: theid,
      name: store.singleVehicle.properties.name,
      type: "vehicle",
    };

    actions.addToFavorites(favoriteItem);
  };

  const handleRemoveFromFavorites = () => {
    const favoriteItem = {
      id: theid,
      type: "vehicle",
    };

    actions.removeFromFavorites(favoriteItem);
  };

  useEffect(() => {
    actions.getOneVehicle(theid);
  }, [theid]);

  useEffect(() => {
    const doesItExist =
      store?.favorites?.filter((favorite) => {
        return favorite?.id === theid && favorite.type == "vehicle";
      })?.length > 0;

    setIsInFavorites(doesItExist);
  }, [store?.favorites, theid]);

  return (
    <>
      <div className="container">
      <div className="card-body text-center text-light">
          
          <h5>Model: {store.singleVehicle?.properties?.model}</h5>
          {imgUrl && <img src={imgUrl} alt={name} />}
          <p>Vehicle class: {store.singleVehicle?.properties?.vehicle_class}</p>
          <p>Crew: {store.singleVehicle?.properties?.crew}</p>
          <p>
            Max atmosphering speed:
             {store.singleVehicle?.properties?.max_atmosphering_speed}
          </p>
          <p>Pilots: {store.singleVehicle?.properties?.pilots}</p> 
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

SingleVehicle.propTypes = {
  match: PropTypes.object,
};