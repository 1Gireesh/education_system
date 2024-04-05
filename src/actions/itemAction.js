// actions.js

import {SET_DRAGGED_ITEM, INCREMENT_STREAK, GET_ITEMS, SET_LOADING} from '../actionTypes/itemTypes';

export const setDraggedItem = (item) => ({
    type: SET_DRAGGED_ITEM,
    payload: item,
});

export const incrementStreak = (itemName, uid) => ({
    type: INCREMENT_STREAK,
    payload: {itemName, uid},
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload: payload
});

export const getItems = (payload) => ({
    type: GET_ITEMS,
    payload: payload
});
