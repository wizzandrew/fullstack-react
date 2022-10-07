import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


//comments
//-------------------------------------------------------
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
}

export const commentsFailed = (errmessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmessage
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//dishes
//-------------------------------------------------------
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(res => res.json())
        .then(dishes => dispatch(addDishes(dishes)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmessage
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


//promotions
//-------------------------------------------------------
export const fetchPromotions = () => (dispatch) => {
    dispatch(promotionsLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(res => res.json())
        .then(promotions => dispatch(addPromotions(promotions)))
}

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = (errmessage) => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errmessage
});

export const addPromotions = (promotions) => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});