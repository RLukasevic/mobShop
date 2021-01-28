import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    cartShow: false,
    cartSubTotal: 0.00,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART: return toggleCart(state)
        case actionTypes.ADD_TO_CART: return addToCart(state, action)
        case actionTypes.DELETE_FROM_CART: return deleteFromCart(state, action)
        case actionTypes.REMOVE_ITEM_FROM_CART: return removeItemFromCart(state,action)
        case actionTypes.CHECKOUT_CART_WHIPE: return checkOutCartWhipe(state)

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

    let newSubTotal = Number(Number(state.cartSubTotal) + Number(action.price)).toFixed(2)

    return {
        ...state,
        cart: newCart,
        cartShow: true,
        cartSubTotal: newSubTotal,
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

    let newSubTotal = Number(Number(state.cartSubTotal) - Number(action.price)).toFixed(2)


    return {
        ...state,
        cart: newCart,
        cartSubTotal: newSubTotal,
    };
}

const removeItemFromCart = (state, action) => {
    let newCart = [...state.cart]
    let arrayID = newCart.findIndex(e => e.id === action.id)

    newCart.splice(arrayID,1)

    let newSubTotal = Number(Number(state.cartSubTotal) - Number(action.price * action.quantity)).toFixed(2)


    return {
        ...state,
        cart: newCart,
        cartSubTotal: newSubTotal,
    };
}

const checkOutCartWhipe = (state) => {
    return {
        ...state,
        cart: [],
        cartSubTotal: 0.00,
        cartShow: false
    }
}

export default reducer;