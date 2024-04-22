import React from "react";
import { Context } from "../store/appContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function favoritesCounter() {
    const { store, actions } = React.useContext(Context);
  
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpen = () => {
      if (store?.favorites?.length > 0) {
        setIsOpen(!isOpen);
      }
    };
  
    return (
      <div className="ml-3" onClick={handleOpen}>
        <Link className="btn btn-danger m-3" to="/favorites">
          added favorites:
          <span className="badge badge-light">{store?.favorites?.length}</span>
        </Link>
  
        {isOpen && (
          <div
            className="dropdown-menu show"
            aria-labelledby="dropdownMenuButton"
          >
            {store?.favorites?.map?.length > 0 &&
              store?.favorites?.map((favorite, index) => (
                <button
                  className="dropdown-item"
                  key={index}
                  onClick={() => {
                    actions.removeFromFavorites(favorite);
                    setIsOpen(false);
                  }}
                >
                  {favorite.name} <i className="fas fa-times"></i>
                </button>
              ))}
          </div>
        )}
      </div>
    );
  }
  