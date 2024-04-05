import {
    apples,
    bookIcon,
    headSuitIcon,
    milk,
    oil,
    paperIcon,
    peanut,
    plusIconGreen,
    plusIconRed, plusIconYellow,
    water
} from "../assets/index.js";
import {INCREMENT_STREAK, SET_DRAGGED_ITEM} from "../actionTypes/itemTypes.js";


const initialState = {
    levels: [
        { icon: bookIcon, title: 'Chassidisher Bochur', progress: 20, locked: false },
        { icon: paperIcon, title: 'Shliach', progress: 18, locked: false },
        { icon: headSuitIcon, title: ' Head Shliach', progress: 10, locked: true }
    ],
    items: [
        { name: 'Apples', image: apples, streak: 2 },
        { name: 'Peanut', image: peanut, streak: 0 },
        { name: 'Water', image: water, streak: 3 },
        { name: 'Oil', image: oil, streak: 1 },
        { name: 'Milk', image: milk, streak: 0 },
    ],
    draggedItem: null,
    dropBoxes: [
        { color: 'green', icon: plusIconGreen, item: 'תפוחים', actual_name: 'Apples' },
        { color: 'red', icon: plusIconRed, item: 'שמן', actual_name: 'Oil' },
        { color: 'yellow', icon: plusIconYellow, item: 'מים', actual_name: 'Water' }
    ]
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRAGGED_ITEM:
            return { ...state, draggedItem: action.payload };
        case INCREMENT_STREAK:
            return {
                ...state,
                items: state.items.map(item =>
                    item.name === action.payload && item.streak < 5
                        ? { ...item, streak: item.streak + 1 }
                        : item
                )
            };
        default:
            return state;
    }
};

export default itemsReducer;
