import * as actionTypes from './actionTypes';

export const toggleCart = () => {
    return {
        type: actionTypes.TOGGLE_CART,

    };
};

export const addToCart = (id,price) => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: id,
        price: price,
    };
};

export const deleteFromCart = (id,price) => {
    return {
        type: actionTypes.DELETE_FROM_CART,
        id: id,
        price: price,
    };
};

export const removeItemFromCart = (id,quantity,price) => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        id: id,
        quantity: quantity,
        price: price,
    }
}

export const checkOutCartWhipe = () => {
    return {
        type: actionTypes.CHECKOUT_CART_WHIPE,
        
    }
}
