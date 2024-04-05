// actions.js

import { SET_DRAGGED_ITEM, INCREMENT_STREAK } from '../actionTypes/itemTypes';

export const setDraggedItem = (item) => ({
    type: SET_DRAGGED_ITEM,
    payload: item,
});

export const incrementStreak = (itemName) => ({
    type: INCREMENT_STREAK,
    payload: itemName,
});
