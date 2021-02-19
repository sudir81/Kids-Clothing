import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import './cartView.scss'
import CartItem from '../Cart-Item/cart-item'
import CustomButton from '../Custom-UI/Button/button'
import { selectCartItems } from '../../Redux/Selectors/cart.selectors'
import { toggleCartViewHidden } from '../../Redux/Actions/cart.action'

const CartView = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    ) : (
                        <span className="empty-message">Your cart is empty.</span>
                    )
                }
            </div>
            <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartViewHidden())
                }
                }>
                    GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps) (CartView))
