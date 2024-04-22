import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import FavoritesCard from "../component/favoritesCard";

const FavoritesView = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <div className="card">
       
      {store?.favorites?.length > 0 ? (
        store.favorites.map((favorite) => {
          const { id, name, type } = favorite;
          return (
            <FavoritesCard
              key={id}
              id={id}
              name={name}
              type={type}
            ></FavoritesCard>
          );
        })
      ) : (
        <h2>No favorites</h2>
        
      )}</div>
      
    </div>
  );
};

FavoritesView.propTypes = {
  match: PropTypes.object,
};

export default FavoritesView;
