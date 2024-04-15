import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FavoritesCard = (props) => {
  const { id, name, type } = props;
  const { actions } = useContext(Context); // Get the actions object from the context
  const imgUrl = `https://starwars-visualguide.com/assets/img/${type}s/${id}.jpg`;
  let linkPath;

  if (type === "character") {
    linkPath = `/single/${id}`;
  } else if (type === "planet") {
    linkPath = `/single-planet/${id}`;
  } else if (type === "vehicle") {
    linkPath = `/vehicles/${id}`;
  }

  useEffect(() => {
    actions.addToFavorites({ id, name, type }); // Call the  action with the necessary data
  }, [id, name, type]); // dependency array added

  return (
    <div className="card-container" key={id}>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <Link className="btn btn-primary" to={linkPath}>
        View Details
      </Link>
    </div>
  );
};

FavoritesCard.propTypes = {
  match: PropTypes.object,

};

export default FavoritesCard;
