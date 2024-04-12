import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
  console.log(theid); // corrected

  useEffect(() => {
    
    actions.getOneVehicle(theid);
  }, [theid]); // dependency array added
  console.log(store.singleVehicle);
  return (
    <div className="container">
      <div className="card">
        <p>Model:{store.singleVehicle?.properties?.model}</p>
        <p>Vehicle_class:{store.singleVehicle?.properties?.vehicle_class}</p>
        <p>Crew:{store.singleVehicle?.properties?.crew}</p>
        <p>Max_atmosphering_speed:{store.singleVehicle?.properties?.max_atmosphering_speed}</p>
        <p>Pilots:{store.singleVehicle?.properties?.pilots}</p>
      </div>
    </div>
  );
};

SingleVehicle.propTypes = {
  match: PropTypes.object,
};
