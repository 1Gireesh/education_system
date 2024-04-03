import { SET_USER, REMOVE_USER } from '../actionTypes/authType';

const initialState = {
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case REMOVE_USER:
            localStorage.removeItem('user');
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
