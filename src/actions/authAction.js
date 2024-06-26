import { signInWithPopup } from 'firebase/auth';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { REMOVE_USER, SET_USER } from '../actionTypes/authType';
import { db } from "../Auth/Config.js";
import {
    bookIcon,
    headSuitIcon,
    paperIcon,
    plusIconGreen,
    plusIconRed, plusIconYellow,
} from "../assets/index.js";
import { apples, bread, butter, eggs, lollies, milk, oil, peanut, water, yoghurt } from "../assets/foodItems/index.js";
import { toast } from "react-hot-toast";

export const setUser = (user) => ({
    type: SET_USER,
    payload: {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
    },
});

export const removeUser = () => ({
    type: REMOVE_USER,
    payload: {

    },
});

export const handleAuth = (auth, provider) => {
    return async (dispatch) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const userRef = doc(db, 'users', result.user.uid);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                // User document does not exist, create a new one
                await setDoc(userRef, {
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
                        { name: 'Bread', image: bread, streak: 0 },
                        { name: 'Butter', image: butter, streak: 0 },
                        { name: 'Eggs', image: eggs, streak: 0 },
                        { name: 'Lollies', image: lollies, streak: 0 },
                        { name: 'Yoghurt', image: yoghurt, streak: 0 },
                    ],
                    draggedItem: null,
                    dropBoxes: [
                        { color: 'green', icon: plusIconGreen, item: 'תפוחים', actual_name: 'Apples' },
                        { color: 'red', icon: plusIconRed, item: 'שמן', actual_name: 'Oil' },
                        { color: 'yellow', icon: plusIconYellow, item: 'מים', actual_name: 'Water' }
                    ]
                });

                toast.success('Welcome to the app!');
                console.log("User document created with ID: ", result.user.uid);
            } else {
                // User document already exists, do not create a new one
                console.log("User document already exists with ID: ", result.user.uid);
            }

            dispatch(setUser(result.user));
        } catch (error) {
            console.error('Authentication error:', error);
            toast.error('Authentication error:', error.message);
            // Handle the error, e.g., show an error message to the user
        }
    };
};

