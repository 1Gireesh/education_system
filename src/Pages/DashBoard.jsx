import {useSelector, useDispatch} from 'react-redux';
import {setDraggedItem, incrementStreak, getItems, setLoading} from '../actions/itemAction';
import '../Styles/Home.css';
import ColoredTag from '../Components/ColoredTag';
import {toast} from 'react-hot-toast';
import {background,} from '../assets';
import Streaks from "../Components/Streaks.jsx";
import Levels from "../Components/Levels.jsx";
import {useEffect} from "react";
import {getFireStoreItems} from "../firestore/fetchItems.js";
import {ImageLoader, LevelLoader, StreakLoader} from "../Components/Skeleton.jsx";

const positions = [
    {top: '0%', left: '0%'},
    {top: '50%', left: '30%'},
    {top: '40%', left: '50%'},
    {top: '10%', left: '70%'},
    {top: '60%', left: '80%'},
    {top: '60%', left: '80%'},
    {top: '60%', left: '80%'},
    {top: '60%', left: '80%'},
];


const DashBoard = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state?.items?.items);
    const draggedItem = useSelector(state => state?.items?.draggedItem);
    const dropBoxes = useSelector(state => state?.items?.dropBoxes);
    const {user} = useSelector(state => state.auth);
    const loading = useSelector(state => state?.items?.loading);
    const handleDragStart = (item) => {
        dispatch(setDraggedItem(item));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (box) => {
        if (draggedItem?.name === box.actual_name && draggedItem?.streak < 5) {
            dispatch(incrementStreak(box.actual_name, user.uid));
            toast.success(`You have almost mastered this word!`);
        } else if (draggedItem?.name !== box.actual_name && draggedItem?.streak < 5) {
            toast.error('You have dropped on the wrong box');
        }
    };

    useEffect(() => {
        dispatch(setLoading(true));
        getFireStoreItems(user.uid).then((items) => {
            dispatch(getItems(items));
        }).catch((error) => {
            console.log(error);
            toast.error('Error fetching items');
        }).finally(() => {
            dispatch(setLoading(false));
        });
    }, []);

    return (
        <div className='dashboard'>
            <div className='dashboard_left'>
                <div className='question_title'>Question</div>
                <div className='question'>
                    This is Laibel at the supermarket, buying food for a party at his house. Can you help Laibel find
                    the <ColoredTag text={"Oil"} color='#F03636'/>, <ColoredTag text='Bread' color='#706EEB'/> bread
                    and <ColoredTag text='Water' color='#40916C'/> water?
                </div>
                <div className='food_list'>
                    {loading?<ImageLoader/>:<img src={background} className='food_background' alt=""/>}
                    <div className='food_items'>
                        {
                           !loading && !!items?.length && items?.map((item, index) => (
                                <div key={index} className='img_box'
                                     onDragStart={() => handleDragStart(item)}
                                     draggable
                                >
                                    <img key={index} style={{
                                        top: positions[index]?.top,
                                        left: positions[index]?.left
                                    }} className='food_img' src={item?.image} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='dashboard_collection'>
                    {dropBoxes?.length && dropBoxes?.map((box, index) => (
                        <div key={index}
                             onDragOver={handleDragOver}
                             onDrop={() => handleDrop(box)}
                        >
                            <div className={`drop_box drop_${box.color}`}>
                                <img src={box.icon} alt=""/>
                                <div className='drop_text'>Drag and Drop here</div>
                            </div>
                            <div className='item_name'>
                                {box.item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='dashboard_right'>
                {loading ? <LevelLoader/> : <Levels/>}

                {loading ?<StreakLoader/>: <Streaks/>}
            </div>
        </div>
    );
};

export default DashBoard;
