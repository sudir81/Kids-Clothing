import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart, removeCartItemFromCart, removeSelectedCartItemFromCart } from '../../Redux/Actions/cart.action'

import './checkout-item.scss'

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
    const {imageUrl, name, quantity, price} = item

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeCartItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeSelectedCartItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
