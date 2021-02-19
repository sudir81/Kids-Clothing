import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../Components/Checkout-Item/checkout-item'
import StripeButton from '../../Components/Stripe/stripe-button'
import { selectCartItems, selectCartTotal } from '../../Redux/Selectors/cart.selectors'

import './checkoutPage.scss'
const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} item={cartItem} />))
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payments
                <br />
                VISA - 4242 4242 4242 4242 Exp: 01/25 CVV: 123 
                MASTER - 5555 5555 5555 4444 Exp: 01/25 CVV: 456
            </div>
            <StripeButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
