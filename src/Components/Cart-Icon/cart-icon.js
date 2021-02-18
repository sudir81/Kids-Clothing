import React from 'react'

import { ReactComponent as ShoppingCartIcon } from '../../assets/images/shopping-bag.svg'
import './cart-icon.scss'

import { connect } from 'react-redux'
import { toggleCartViewHidden } from '../../Redux/Actions/cart.action'

const CartIcon = ({toggleCartViewHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartViewHidden}>
            <ShoppingCartIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartViewHidden: () => dispatch(toggleCartViewHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
