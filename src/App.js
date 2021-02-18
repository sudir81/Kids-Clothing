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
import Header from "./Components/Header/header";
import SignInSignUp from "./Screens/Authentication/signInSignUp";

import { auth } from './firebase/firebase.util'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser : user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route path={"/signin"} component={SignInSignUp} />
          <Route path={"/hats"} component={HatsPage} />
          <Route path={"/jackets"} component={JacketsPage} />
          <Route path={"/sneakers"} component={SneakersPage} />
          <Route path={"/girls"} component={GirlsClothingPage} />
          <Route path={"/boys"} component={BoysClothingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
