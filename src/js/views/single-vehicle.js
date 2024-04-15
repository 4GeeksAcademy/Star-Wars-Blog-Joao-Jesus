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
      <div className="card bg-dark p-3">
      <div className="card-body bg-dark p-3  text-light text-center">
          {imgUrl && <img src={imgUrl} alt={name} />}
          <p>Model: {store.singleVehicle?.properties?.model}</p>
          <p>Vehicle_class: {store.singleVehicle?.properties?.vehicle_class}</p>
          <p>Crew: {store.singleVehicle?.properties?.crew}</p>
          <p>
            Max_atmosphering_speed:
             {store.singleVehicle?.properties?.max_atmosphering_speed}
          </p>
          <p>Pilots: {store.singleVehicle?.properties?.pilots}</p>
        </div></div>
      
      <div>
        {!isInFavorites ? (
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        ) : (
          <button onClick={handleRemoveFromFavorites}>
            Remove from Favorites
          </button>
        )}
      </div>
    </>
  );
};

SingleVehicle.propTypes = {
  match: PropTypes.object,
};