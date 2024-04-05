import {doc, getDoc} from "firebase/firestore";
import {db} from "../Auth/Config.js";

export const getFireStoreItems = async (uid) => {
    const userRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userRef);
    return userDoc.data().items;
}