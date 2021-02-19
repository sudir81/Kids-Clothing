import { createSelector } from 'reselect'
import { COLLECTION_ID_MAP } from '../constants';
import memoize from 'lodash.memoize'

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop.shopData
)

export const selectCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    ))