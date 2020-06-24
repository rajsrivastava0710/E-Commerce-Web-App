import { createSelector } from 'reselect';

const selectShop = state => state.shop; //input selector

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.collections
);


