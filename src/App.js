import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Screens/HomePage/homepage";
import JacketsPage from "./Screens/JacketsPage/jacketsPage";
import HatsPage from "./Screens/HatsPage/hatspage";
import SneakersPage from "./Screens/SneakersPage/sneakerspage";
import GirlsClothingPage from "./Screens/GirlsClothing/girlsclothingpage";
import BoysClothingPage from "./Screens/BoysClothing/boysclothingpage";
import ShopPage from "./Screens/ShopPage/shoppage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/hats"} component={HatsPage} />
        <Route path={"/jackets"} component={JacketsPage} />
        <Route path={"/sneakers"} component={SneakersPage} />
        <Route path={"/girls"} component={GirlsClothingPage} />
        <Route path={"/boys"} component={BoysClothingPage} />
        <Route path={"/shop"} component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
