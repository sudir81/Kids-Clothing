import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./Screens/HomePage/homepage";
// import JacketsPage from "./Screens/JacketsPage/jacketsPage";
// import HatsPage from "./Screens/HatsPage/hatspage";
// import SneakersPage from "./Screens/SneakersPage/sneakerspage";
// import GirlsClothingPage from "./Screens/GirlsClothing/girlsclothingpage";
// import BoysClothingPage from "./Screens/BoysClothing/boysclothingpage";
import ShopPage from "./Screens/ShopPage/shoppage";
import Header from "./Components/Header/header";
import SignInSignUp from "./Screens/Authentication/signInSignUp";

import { auth, createUserProfileDoc } from './firebase/firebase.util'

import { connect } from 'react-redux'
import { setCurrentUser } from './Redux/Actions/user.action'
import { selectCartHidden } from "./Redux/Selectors/cart.selectors";
import CheckoutPage from "./Screens/CheckoutPage/checkoutPage";

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDoc(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route path={"/signin"} render={() => this.props.currentUser ? (<Redirect to="/" /> ): <SignInSignUp />} />
          <Route path={"/checkout"} component={CheckoutPage} />
          {/* <Route path={"/hats"} component={HatsPage} />
          <Route path={"/jackets"} component={JacketsPage} />
          <Route path={"/sneakers"} component={SneakersPage} />
          <Route path={"/girls"} component={GirlsClothingPage} />
          <Route path={"/boys"} component={BoysClothingPage} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: selectCartHidden(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
