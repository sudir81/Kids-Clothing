import React from 'react'
import CustomButton from '../Custom-UI/Button/button'

import './cartView.scss'

const CartView = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartView
