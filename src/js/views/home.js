import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import MainCard from "../component/mainCard";


export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    
    <div className="container">
      <div className=" d-flex justify-content-end text-center mt-5">
      {store?.characters?.length > 0 &&
        store.characters.map((el) => (
          <MainCard key={el.uid}  id={el.uid} name={el.name} type="character" actions={actions}></MainCard>
          
        ))}
        </div>
        
    </div>
    <div className="container">
      <div className="d-flex justify-content-end text-center mt-5 planets ">
      {store?.planets?.length > 0 &&
        store.planets.map((el) => (
          <MainCard key={el.uid}  id={el.uid} name={el.name} type="planet" actions={actions}> </MainCard>
        ))}
      
      </div>
    </div>
    <div className="container">
      <div className=" d-flex justify-content-end text-center mt-5 vehicle">
        {store?.vehicles?.length > 0 &&
        store.vehicles.map((el) => (
          <MainCard key={el.uid}  id={el.uid} name={el.name} type="vehicle" actions={actions}></MainCard>
        ))}
      
      </div>
    </div>
  
    </ >
  );
};
