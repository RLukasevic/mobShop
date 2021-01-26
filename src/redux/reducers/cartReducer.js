import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    cartShow: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART: return toggleCart(state)
        case actionTypes.ADD_TO_CART: return addToCart(state, action)
        case actionTypes.DELETE_FROM_CART: return deleteFromCart(state, action)

        default: return state;
    }
}

const toggleCart = (state) => {
    return {
        ...state,
        cartShow: !state.cartShow,
    };
}

const addToCart = (state, action) => {
    let newCart = [...state.cart]

    if (newCart.some(e => e.id === action.id)) {
        let arrayID = newCart.findIndex(e => e.id === action.id)
        newCart[arrayID].quantity += 1;
    } else {
        newCart.push({id: action.id, quantity: 1})
    }

    return {
        ...state,
        cart: newCart,
        cartShow: true,
    };
}

const deleteFromCart = (state, action) => {
    let newCart = [...state.cart]
    let arrayID = newCart.findIndex(e => e.id === action.id)

    if (newCart[arrayID].quantity > 1) {
        let arrayID = newCart.findIndex(e => e.id === action.id)
        newCart[arrayID].quantity -= 1;
    } else {
        newCart.splice(arrayID,1)
    }

    return {
        ...state,
        cart: newCart,
    };
}

export default reducer;