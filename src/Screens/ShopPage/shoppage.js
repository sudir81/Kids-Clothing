import React from "react";
import { Route } from 'react-router-dom'
import CollectionOverview from "../../Components/Collection-Overview/collection-overview";
import CollectionPage from "../CollectionPage/collectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shoppage">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
