import * as t from '../types'

// ShoppingCart
export const setShoppingCart = (shoppingCart) => (dispatch) =>
    dispatch({
        type: t.SET_SHOPPING_CART,
        payload: shoppingCart,
    })