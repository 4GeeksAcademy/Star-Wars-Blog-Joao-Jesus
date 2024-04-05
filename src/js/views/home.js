import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import MainCard from "../component/mainCard";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      start
      <input className="input"></input>
      {store?.characters?.length > 0 &&
        store.characters.map((el) => (
          <MainCard id={el.uid} name={el.name}></MainCard>
        ))}
    </div>
  );
};
