import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
    isLoading: true,
    error: null,
    promotions: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, error: null, promotions: action.payload}

        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading: true, error: null, promotions: []}

        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, error: action.payload, promotions: []}

        default:
            return state;
    }
}