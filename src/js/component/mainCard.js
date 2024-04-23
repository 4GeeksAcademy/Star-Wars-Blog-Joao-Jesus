import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/maincard.css";
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
      <img class="card-img-top" src={imgUrl} alt={name} className={imageClass} />
      <div className="card-body" key={id}>
        <h5 class="card-title">{name}</h5>
      <div className=" d-flex justify-content-evenly ">
        
         <Link className="btn btn-danger text-dark text-center" 
         to={`/single-${type}/${id}`}>
          View Details
        </Link>
        {store?.favorites?.filter((favorite) => favorite.name == name)?.length >
        0 ? (
          <i
            className="fa fa-skull m-3"
            onClick={() => actions.removeFromFavorites({ id, name, type })}
          ></i>
        ) : (
          <i
            className="fa fa-heart m-3"
            onClick={() => actions.addToFavorites({ id, name, type })}
          ></i>
        )}
       
      </div>
      </div>
    </div>
  );
};

export default MainCard;


