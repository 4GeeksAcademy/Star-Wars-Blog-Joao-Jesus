import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  const [isInFavorites, setIsInFavorites] = React.useState(false);

  const imgUrl = store.singleCharacter
    ? `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`
    : "";
  const name = store.singleCharacter
    ? store.singleCharacter.properties.name
    : "";

  const handleAddToFavorites = () => {
    const favoriteItem = {
      id: theid,
      name: store.singleCharacter.properties.name,
      type: "character",
    };

    actions.addToFavorites(favoriteItem);
  };

  const handleRemoveFromFavorites = () => {
    const favoriteItem = {
      id: theid,
      type: "character",
    };

    actions.removeFromFavorites(favoriteItem);
  };

  useEffect(() => {
    actions.getOneCharacters(theid);
  }, []);

  useEffect(() => {
    const doesItExist =
      store?.favorites?.filter((favorite) => {
        return favorite?.id === theid && favorite.type == "character";
      })?.length > 0;

    setIsInFavorites(doesItExist);
  }, [store?.favorites, theid]);

  return (
    <>
      <div className="card bg-dark p-3">
        <div className="card-body text-light text-center">
          {imgUrl && <img src={imgUrl} alt={name} />}
          <p>Name: {store.singleCharacter?.properties?.name}</p>
          <p>Heigth: {store.singleCharacter?.properties?.height}</p>
          <p>Gender: {store.singleCharacter?.properties?.gender}</p>
          <p>Eye color: {store.singleCharacter?.properties?.eye_color}</p> 
          {!isInFavorites ? (
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        ) : (
          <button onClick={handleRemoveFromFavorites}>
            Remove from Favorites
          </button>
        )}
        </div>
      </div>
      <div>
       
      </div>
    </>
  );
};

SingleCharacter.propTypes = {
  match: PropTypes.object,
};