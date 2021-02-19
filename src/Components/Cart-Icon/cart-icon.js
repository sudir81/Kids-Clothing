import React from 'react'

import { ReactComponent as ShoppingCartIcon } from '../../assets/images/shopping-bag.svg'
import './cart-icon.scss'

import { connect } from 'react-redux'
import { toggleCartViewHidden } from '../../Redux/Actions/cart.action'
import { selectCartItemsCount } from '../../Redux/Selectors/cart.selectors'

const CartIcon = ({toggleCartViewHidden, itemsCount}) => {

    return (
        <div className="cart-icon" onClick={toggleCartViewHidden}>
            <ShoppingCartIcon className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemsCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    toggleCartViewHidden: () => dispatch(toggleCartViewHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
