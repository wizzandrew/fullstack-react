import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            
            //concat() creates new arr, adds obj and returns the arr
            //push() modifies existing arr by adding obj to its end and returns its length
            return state.concat(comment);

        default:
            return state;
    }
}