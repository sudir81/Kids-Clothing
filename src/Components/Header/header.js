import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.util'
import { removeCartItemsOnSignOut } from '../../Redux/Actions/cart.action'


import { ReactComponent as Logo} from '../../assets/images/crown.svg'
import CartIcon from '../Cart-Icon/cart-icon'
import CartView from '../Cart-Overlay/cartView'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import { selectCurrentUser } from '../../Redux/Selectors/user.selector'
import { selectCartHidden } from '../../Redux/Selectors/cart.selectors'

const Header = ({ currentUser, cartViewToggle, removeCartItemsOnSignOut }) => {

    const signOut = () => {
        auth.signOut();
        // removeCartItemsOnSignOut()
    }
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/contact">
                    CONTACT
                </OptionLink>
                {
                    currentUser ? (
                        <OptionLink as="div" onClick={() => signOut()}>
                            SIGN OUT
                        </OptionLink>
                    ): (
                        <OptionLink to="/signin">
                            SIGN IN
                        </OptionLink>
                    )
                }
                <CartIcon />
            </OptionsContainer>
            {
                cartViewToggle && (<CartView />)
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartViewToggle: selectCartHidden
})


const mapDispatchToProps = dispatch => ({
    removeCartItemsOnSignOut: () => dispatch(removeCartItemsOnSignOut())
  })

export default connect(mapStateToProps, mapDispatchToProps) (Header)
