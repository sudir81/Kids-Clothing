import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'
import { ReactComponent as Logo} from '../../assets/images/crown.svg'
import { auth } from '../../firebase/firebase.util'

import { connect } from 'react-redux'
import CartIcon from '../Cart-Icon/cart-icon'
import CartView from '../Cart-Overlay/cartView'

const Header = ({ currentUser, cartViewToggle }) => {
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
                        <div className="option" onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps) (Header)
