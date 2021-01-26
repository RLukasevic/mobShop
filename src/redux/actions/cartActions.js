import * as actionTypes from './actionTypes';

export const toggleCart = () => {
    return {
        type: actionTypes.TOGGLE_CART,

    };
};

export const addToCart = (id) => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: id,
    };
};

export const deleteFromCart = (id) => {
    return {
        type: actionTypes.DELETE_FROM_CART,
        id: id,
    };
};
