import * as actionTypes from './actionTypes';

export const toggleCart = () => {
    return {
        type: actionTypes.TOGGLE_CART,

    };
};

export const addToCart = () => {
    return {
        type: actionTypes.ADD_TO_CART,

    };
};

export const deleteFromCart = () => {
    return {
        type: actionTypes.DELETE_FROM_CART,

    };
};
