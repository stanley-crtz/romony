import * as t from '../types'

const initialState = {
    shoppingCart: {

    },

}

const main = (state = initialState, action) => {
    switch (action.type) {
        case t.ADD_SHOPPING_CART:
            return {
                ...state.shoppingCart,
                ...action.payload
            }
        case t.SET_SHOPPING_CART:
            return {
                ...initialState,
                shoppingCart: action.payload
            }
        default:
            return { ...state }
    }
}

export default main
