import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center mt-5">
            start
            {store.characters && store.characters.map(el => 
            <MainCard
            id={el.uid}
            name={el.name} >   
              </MainCard>  )}
        </div>
    );
};

