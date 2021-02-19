import React from 'react'
import CustomButton from '../Custom-UI/Button/button'

import { connect } from 'react-redux'
import './cartView.scss'
import CartItem from '../Cart-Item/cart-item'
import { selectCartItems } from '../../Redux/Selectors/cart.selectors'

const CartView = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps) (CartView)
