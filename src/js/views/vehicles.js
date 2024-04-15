import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SingleVehicle = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  const imgUrl = store.singleVehicle ? `https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg` : '';
  const name = store.singleVehicle ? store.singleVehicle.properties.name : '';
  const handleAddToFavorites = () => {
    const favoriteItem = { id: 1, name: 'Favorite Item' }; // Replace with your favorite item
    actions.addToFavorites(favoriteItem);}
  
  useEffect(() => {
    actions.getOneVehicle(theid);
  }, [theid]); // dependency array added
  console.log(store.singleVehicle);
  return (
    <>
      
      <div className="card">
        <div className="card-body">
       {imgUrl && <img src={imgUrl} alt={name} />}
        <p>Model:{store.singleVehicle?.properties?.model}</p>
        <p>Vehicle_class:{store.singleVehicle?.properties?.vehicle_class}</p>
        <p>Crew:{store.singleVehicle?.properties?.crew}</p>
        <p>Max_atmosphering_speed:{store.singleVehicle?.properties?.max_atmosphering_speed}</p>
        <p>Pilots:{store.singleVehicle?.properties?.pilots}</p>
      </div></div>
      <div>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
    </>
  );
};

SingleVehicle.propTypes = {
  match: PropTypes.object,
};
