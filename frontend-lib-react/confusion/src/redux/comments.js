import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    isLoading: true,
    error: null,
    comments: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, error: null, comments: action.payload}

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, error: action.payload, comments: []}

        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.comments.length;                
            comment.date = new Date().toISOString();
        
           //concat() creates new arr, adds obj and returns the arr
           //push() modifies existing arr by adding obj to its end and returns its length
           return {...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
}