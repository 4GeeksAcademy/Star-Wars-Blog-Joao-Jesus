import React from "react";
import { Link } from "react-router-dom";

const MainCard = (props) => {
  const { id, name, type } = props;
  const imgUrl = `https://starwars-visualguide.com/assets/img/${type}s/${id}.jpg`;
  const imageClass = type === "character" ? "character-image" : type === "planet" ? "planet-image" : type === "vehicle" ? "vehicle-image" : "";
  return (
    <div className="card" key={id}>
     <img src={imgUrl} alt={name} className={imageClass} />
      <h5>{name}</h5>
      <Link className="btn btn-light" to={`/single-${type}/${id}`}>
        View Details
      </Link>
    </div>
  );
};

export default MainCard;

