import {
    bookIcon,
    headSuitIcon,
    paperIcon,
    plusIconGreen,
    plusIconRed, plusIconYellow,
} from "../assets/index.js";
import {GET_ITEMS, INCREMENT_STREAK, SET_DRAGGED_ITEM, SET_LOADING} from "../actionTypes/itemTypes.js";
import {db} from "../Auth/Config.js";
import {doc, updateDoc,} from "firebase/firestore";


const initialState = {
    levels: [
        {icon: bookIcon, title: 'Chassidisher Bochur', progress: 20, locked: false},
        {icon: paperIcon, title: 'Shliach', progress: 18, locked: false},
        {icon: headSuitIcon, title: ' Head Shliach', progress: 10, locked: true}
    ],
    items: [],
    draggedItem: null,
    dropBoxes: [
        {color: 'green', icon: plusIconGreen, item: 'תפוחים', actual_name: 'Apples'},
        {color: 'red', icon: plusIconRed, item: 'שמן', actual_name: 'Oil'},
        {color: 'yellow', icon: plusIconYellow, item: 'מים', actual_name: 'Water'}
    ],
    loading: false
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRAGGED_ITEM:
            return {...state, draggedItem: action.payload};
        case INCREMENT_STREAK:
            const {itemName, uid} = action.payload;
            const updated = state.items.map(item =>
                item.name === itemName && item.streak < 5
                    ? {...item, streak: item.streak + 1}
                    : item
            );
            (async () => {
                const userRef = doc(db, 'users', uid);
                await updateDoc(userRef, {
                    items: updated
                });
            })();
            return {...state, items: updated};
        default:
            return state;
        case GET_ITEMS:
            return {...state, items: action.payload};
        case SET_LOADING:
            return {...state, loading: action.payload};
    }
};

export default itemsReducer;
