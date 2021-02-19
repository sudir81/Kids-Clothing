import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from "../../Components/Collection/Preview/collectionpreview";
import { selectCollections } from "../../Redux/Selectors/shop.selectors";

const ShopPage = ({ shopItems }) => {
  return (
    <div className="shoppage">
      {shopItems.map(({ id, ...otherShopitems }) => (
        <CollectionPreview key={id} {...otherShopitems} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  shopItems: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
