import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: null,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ITEMS_START: return fetchItemsStart(state)
        case actionTypes.FETCH_ITEMS_FAIL: return fetchItemsFail(state, action)
        case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemsSuccess(state, action)

        default: return state;
    }
}

const fetchItemsStart = (state) => {
    return {
        ...state,
        error: false,
    };
}

const fetchItemsFail = (state, action) => {
    return {
        ...state,
        error: action.error,
    };
}

const fetchItemsSuccess = (state, action) => {
    return {
        ...state,
        items: action.data,
        error: false,
    };
}

export default reducer;