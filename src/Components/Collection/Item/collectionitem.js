import React from "react";
import CustomButton from "../../Custom-UI/Button/button";
import "./collectionitem.scss";

import { connect } from 'react-redux'
import { addItemToCart } from '../../../Redux/Actions/cart.action'

const CollectionItem = ({ item, addItemToCart }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>Add to Cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
