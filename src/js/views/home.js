import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import MainCard from "../component/mainCard";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
    <div className="text-center mt-5">
      start
      <input className="input"></input>
      {store?.characters?.length > 0 &&
        store.characters.map((el) => (
          <MainCard id={el.uid} name={el.name} type="character"></MainCard>
          
        ))}
        
    </div>
    <>
    <div className="text-center mt-5 planets">
      {store?.planets?.length > 0 &&
        store.planets.map((el) => (
          <MainCard id={el.uid} name={el.name} type="planet"></MainCard>
        ))}
      
    </div></>
    </div>
  );
};
