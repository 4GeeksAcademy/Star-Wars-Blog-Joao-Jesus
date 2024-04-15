import React from "react";
import { Link } from "react-router-dom";

export default function FavoritesCard(props) {
  const { id, name, type } = props;

  const imgUrl = `https://starwars-visualguide.com/assets/img/${type}s/${id}.jpg`;

  return (
    <div className="card-container" key={id}>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <Link className="btn btn-light text-center" to={`/single-${type}/${id}`}>
        View Details
      </Link>
    </div>
  );
}