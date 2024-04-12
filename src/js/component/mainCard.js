import React from "react";
import { Link } from "react-router-dom";

const MainCard = (props) => {
  const { id, name, type } = props;
  const imgUrl = type === "character" ? 
    `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` : 
    `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

  return (
    <div className="card" key={id}>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <Link className="btn btn-primary" to={`/single/${id}`}>
        View Details
      </Link>
    </div>
  );
};

export default MainCard;
