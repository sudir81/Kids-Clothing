import React from "react";
import CustomButton from "../../Custom-UI/Button/button";
import "./collectionitem.scss";

const CollectionItem = ({ id, imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted>Add to Cart</CustomButton>
    </div>
  );
};

export default CollectionItem;
