import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop
)

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    ))