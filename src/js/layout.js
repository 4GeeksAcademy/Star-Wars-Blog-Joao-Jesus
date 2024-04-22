import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { SingleCharacter} from "./views/single-character";
import { SinglePlanet } from "./views/single-planet";
import { SingleVehicle } from "./views/single-vehicle";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import FavoritesCard from "./views/favorites";

//create your first component
const Layout = ({ store, actions }) => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single-character/:theid" element={<SingleCharacter />} />
            <Route path="/single-planet/:theid" element={<SinglePlanet />} />
            <Route path="/single-vehicle/:theid" element={<SingleVehicle />} />
            <Route path="/favorites" element={<FavoritesCard />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
