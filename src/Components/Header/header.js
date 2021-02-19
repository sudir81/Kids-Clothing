import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'
import { ReactComponent as Logo} from '../../assets/images/crown.svg'
import { auth } from '../../firebase/firebase.util'

import { connect } from 'react-redux'
import { removeCartItemsOnSignOut } from '../../Redux/Actions/cart.action'

import CartIcon from '../Cart-Icon/cart-icon'
import CartView from '../Cart-Overlay/cartView'

const Header = ({ currentUser, cartViewToggle, removeCartItemsOnSignOut }) => {

    const signOut = () => {
        auth.signOut();
        // removeCartItemsOnSignOut()
    }
    return (
        <div className="header">
            <Link className="logo_container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <div className="option" onClick={() => signOut()}>
                            SIGN OUT
                        </div>
                    ): (
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link>
                    )
                }
                <CartIcon />
            </div>
            {
                cartViewToggle && (<CartView />)
            }
        </div>
    )
}

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser: currentUser,
    cartViewToggle: hidden
})


const mapDispatchToProps = dispatch => ({
    removeCartItemsOnSignOut: () => dispatch(removeCartItemsOnSignOut())
  })

export default connect(mapStateToProps, mapDispatchToProps) (Header)
