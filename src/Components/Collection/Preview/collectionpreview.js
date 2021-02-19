import React from "react";
import "./collectionpreview.scss";

import CollectionItem from "./../Item/collectionitem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            // <div key={item.id}>{item.name}</div>
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
