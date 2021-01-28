import * as actionTypes from './actionTypes';
import axios from '../../axiosInstances/fetchProducts';

export const fetchItemsFail = (error) => {
    return {
        type: actionTypes.FETCH_ITEMS_FAIL,
        error: error
    };
};

export const fetchItemsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        data: data
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
            dispatch(fetchItemsFail(e));
        } )
    };
};