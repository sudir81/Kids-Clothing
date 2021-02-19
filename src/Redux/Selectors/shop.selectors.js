import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop
)

export const selectCollectionsFroPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    ))