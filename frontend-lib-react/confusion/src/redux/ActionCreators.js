import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


//comments
//-------------------------------------------------------
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(res => {
        if(res.ok) return res;

        // error handling
        // case: error while communication with server
        else {
            let err = new Error('Error ' + res.status + ': ' + res.statusText);
            err.response = res;
            throw err;
        }
    },

    // error handling
    // case: server didnt respond
    error => {
        let errMessage = new Error(error.message);
        throw errMessage;
    })
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(err => dispatch(commentsFailed(err.message)));
}

export const commentsFailed = (errmessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmessage
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
    });

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId, 
        rating: rating,
        author: author, 
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(res => {
        if(res.ok) return res;

        // error handling
        // case: error while communication with server
        else {
            let err = new Error('Error ' + res.status + ': ' + res.statusText);
            err.response = res;
            throw err;
        }
    },

    // error handling
    // case: server didnt respond
    error => {
        let errMessage = new Error(error.message);
        throw errMessage;
    })
        .then(res => res.json())
        .then(comment => dispatch(addComment(comment)))
        .catch(err => {
            console.log('Post comment ' + err.message);
            alert('Comment couldnt be posted\nError: ' + err.message);
        });
}

//dishes
//-------------------------------------------------------
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(res => {
            if(res.ok) return res;

            // error handling
            // case: error while communication with server
            else {
                let err = new Error('Error ' + res.status + ': ' + res.statusText);
                err.response = res;
                throw err;
            }
        },

        // error handling
        // case: server didnt respond
        error => {
            let errMessage = new Error(error.message);
            throw errMessage;
        })
        .then(res => res.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishesFailed(err.message)));
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
    .then(res => {
        if(res.ok) return res;

        // error handling
        // case: error while communication with server
        else {
            let err = new Error('Error ' + res.status + ': ' + res.statusText);
            err.response = res;
            throw err;
        }
    },

    // error handling
    // case: server didnt respond
    error => {
        let errMessage = new Error(error.message);
        throw errMessage;
    })
        .then(res => res.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(err => dispatch(promotionsFailed(err.message)));
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


//leaders
//-------------------------------------------------------
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
    .then(res => {
        if(res.ok) return res;

        // error handling
        // case: error while communication with server
        else {
            let err = new Error('Error ' + res.status + ': ' + res.statusText);
            err.response = res;
            throw err;
        }
    },

    // error handling
    // case: server didnt respond
    error => {
        let errMessage = new Error(error.message);
        throw errMessage;
    })
        .then(res => res.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(err => dispatch(leadersFailed(err.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmessage) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmessage
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});


//leaders
//-------------------------------------------------------

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname, 
        lastname: lastname,
        telnum: telnum, 
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(res => {
        if(res.ok) return res;

        // error handling
        // case: error while communication with server
        else {
            let err = new Error('Error ' + res.status + ': ' + res.statusText);
            err.response = res;
            throw err;
        }
    },

    // error handling
    // case: server didnt respond
    error => {
        let errMessage = new Error(error.message);
        throw errMessage;
    })
        .then(res => res.json())
        .then(feedback => {
            alert('Feedback posted\n' + JSON.stringify(feedback));
        })
        .catch(err => {
            console.log('Post feedback ' + err.message);
            alert('Feedback couldnt be posted\nError: ' + err.message);
        });
}