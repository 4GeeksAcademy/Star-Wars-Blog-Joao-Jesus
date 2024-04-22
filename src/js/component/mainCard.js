import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const MainCard = (props) => {
  const { store, actions } = React.useContext(Context);

  const { id, name, type } = props;

  const imgUrl = `https://starwars-visualguide.com/assets/img/${type}s/${id}.jpg`;
  const imageClass =
    type === "character"
      ? "character-image"
      : type === "planet"
      ? "planet-image"
      : type === "vehicle"
      ? "vehicle-image"
      : "";

  return (
    <div className="card" key={id}>
      <img src={imgUrl} alt={name} className={imageClass} />
      <h5>{name}</h5>
      <div>
        <Link className="btn btn-light" to={`/single-${type}/${id}`}>
          View Details
        </Link>

        {store?.favorites?.filter((favorite) => favorite.name == name)?.length >
        0 ? (
          <i
            className="fa fa-skull"
            onClick={() => actions.removeFromFavorites({ id, name, type })}
          ></i>
        ) : (
          <i
            className="fa fa-heart"
            onClick={() => actions.addToFavorites({ id, name, type })}
          ></i>
        )}
      </div>
    </div>
  );
};

export default MainCard;


