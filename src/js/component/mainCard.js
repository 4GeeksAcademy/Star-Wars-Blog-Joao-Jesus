import React from "react";
import { Link } from "react-router-dom";

const MainCard = (props) => {
  const { id, name, type } = props;
  const imgUrl = `https://starwars-visualguide.com/assets/img/${type}s/${id}.jpg`;
  let linkPath;

  if (type === "character") {
    linkPath = `/single/${id}`;
  } else if (type === "planet") {
    linkPath = `/single-planet/${id}`;
  } else if (type === "vehicle") {
    linkPath = `/vehicles/${id}`;
  }

  return (
    <div className="card" key={id}>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <Link className="btn btn-primary" to={linkPath}>
        View Details
      </Link>
    </div>
  );
};

export default MainCard;

