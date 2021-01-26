import * as actionTypes from './actionTypes';
import axios from '../../axiosInstances/fetchProducts';

export const fetchItemsFail = () => {
    return {
        type: actionTypes.FETCH_ITEMS_FAIL,

    };
};

export const fetchItemsSuccess = () => {
    return {
        type: actionTypes.FETCH_ITEMS_FAIL,

    };
};

export const fetchItemsStart = () => {
    return {
        type: actionTypes.FETCH_ITEMS_START,

    };
};

export const initItems = () => {
    return dispatch => {
        dispatch(fetchItemsStart());
        axios.get('/products')
        .then(res => {
            dispatch(fetchItemsSuccess(res.data));
        } )
        .catch(e => {
            console.log(e)
            dispatch(fetchItemsFail(e));
        } )
    };
};