import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('user', JSON.stringify(store.getState()));
    return result;
};

const persistedState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};

const rootReducer = combineReducers({
    auth: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
