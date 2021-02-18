import React, { Component } from "react";
import ShopItems from "./shopdata";

import CollectionPreview from "../../Components/Collection/Preview/collectionpreview";

class ShopPage extends Component {
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
        {ShopItems.map(({ id, ...otherShopitems }) => (
          <CollectionPreview key={id} {...otherShopitems} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
