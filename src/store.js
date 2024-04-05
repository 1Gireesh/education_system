import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import itemsReducer from "./reducers/itemsReducer.js";

const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('user', JSON.stringify(store.getState().auth));
    return result;
};

const persistedAuthState = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {};

const rootReducer = combineReducers({
    auth: authReducer,
    items: itemsReducer,
});

const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        auth: persistedAuthState,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
