import React, { Component } from "react";
import ShopItems from "./shopdata";

import CollectionPreview from "../../Components/Collection/Preview/collectionpreview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ShopItems: ShopItems
    };
  }
  render() {
    const { ShopItems } = this.state;
    return (
      <div className="shoppage">
        {ShopItems.map(({ id, ...othercollectionitems }) => (
          <CollectionPreview key={id} {...othercollectionitems} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
