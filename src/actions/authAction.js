// actions.js
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { SET_USER, GET_USER, REMOVE_USER } from '../actionTypes/authType';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const removeUser = () => ({
    type: REMOVE_USER,
});

export const getUser = () => ({
    type: GET_USER,
});

export const handleAuth = (auth, provider) => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const serializedUser = JSON.parse(JSON.stringify(result.user));
                dispatch(setUser(serializedUser));
            })
            .catch((error) => {
                console.error('Authentication error:', error);
            });
    };
};
