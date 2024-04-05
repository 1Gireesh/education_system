// eslint-disable-next-line no-unused-vars
import {useState} from 'react'
import '../Styles/Home.css'
import ColoredTag from '../Components/ColoredTag'
import {toast} from 'react-hot-toast'
import {
    apples, background,
    bookIcon, bread, eggs,
    headSuitIcon,
    milk,
    oil,
    paperIcon,
    peanut,
    plusIconGreen,
    plusIconRed,
    plusIconYellow,
    tickIcon,
    water
} from '../assets'

export default function Home() {

    const levels = [
        {icon: bookIcon, title: 'Chassidisher Bochur', progress: 20, locked: false},
        {icon: paperIcon, title: 'Shliach', progress: 18, locked: false},
        {icon: headSuitIcon, title: ' Head Shliach', progress: 10, locked: true}
    ];

    const [items, setItems] = useState([
        {name: 'Apples', image: apples, streak: 2},
        {name: 'Peanut', image: peanut, streak: 0},
        {name: 'Water', image: water, streak: 3},
        {name: 'Oil', image: oil, streak: 1},
        {name: 'Milk', image: milk, streak: 0},
        {name: 'Bread', image: bread, streak: 0},
        {name: 'Eggs', image: eggs, streak: 0},
    ]);

    const positions = [{top: '10%', left: '10%'}, {top: '30%', left: '10%'}, {top: '50%', left: '10%'}, { top: '70%', left: '10%'}, {top: '10%', left: '30%'}, {top: '30%', left: '30%'}, {top: '50%', left: '30%'}];

    const streakCoatPerStreak = {
        0: 'You are just getting started!',
        1: 'You are making nice progress!',
        2: 'You are getting close!',
        3: 'You have almost mastered this word!',
        4: 'You have mastered this word!',
        5: 'You have mastered this word!'
    };

    const dropBoxes = [
        {color: 'green', icon: plusIconGreen, item: 'תפוחים', actuval_name: 'Apples'},
        {color: 'red', icon: plusIconRed, item: 'שמן', actuval_name: 'Oil'},
        {color: 'yellow', icon: plusIconYellow, item: 'מים', actuval_name: 'Water'}
    ];

    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (box) => {
        setItems(items.map(item => {
            if (draggedItem?.name === box.actuval_name && item?.name === box.actuval_name && item?.streak < 5) {
                toast.success(streakCoatPerStreak[item?.streak + 1])
                return {...item, streak: item?.streak + 1}
            }
            // if droped on wrong box give error
            if (draggedItem?.name !== box.actuval_name && item?.name === box.actuval_name && item?.streak < 5) {
                toast.error('You have droped on wrong box')
            }
            return item;
        }));
        setDraggedItem(null);
    };


    return (
        <div className='dashboard'>
            <div className='dashboard_left'>
                <div className='question_title'>Question</div>
                <div className='question'>
                    This is Laibel at the supermarket, buying food for a party at his house. Can you help Laibel find
                    the {<ColoredTag text={"Oil"} color='#F03636'/>}, {<ColoredTag text='Bread' color='#706EEB'/>} bread
                    and {<ColoredTag text='Water' color='#40916C'/>} water?
                </div>
                <div className='food_list'>
                    <img src={background} className='food_background' alt=""/>
                    <div className='food_items'>
                        {
                            items.map((item, index) => (
                                <div key={index} className='img_box'
                                     onDragStart={() => setDraggedItem(item)}
                                >
                                    <img key={index} style={{
                                        // generate random position for each item in increasing order according to index in percentage
                                        top: `${positions[index].top}`,
                                        left: `${positions[index].left}`
                                    }} className='food_img' src={item?.image} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='dashboard_collection'>
                    {dropBoxes.map((box, index) => (
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
                <div className='dashboard_level'>
                    <div className='word_level_board'>
                        <div className='level_head'>Levels</div>
                        {levels.map((level, index) => (
                            <div className='word_level' key={index}>
                                <img src={level.icon} alt=""/>
                                <div className='level_progress'>
                                    <div className='level_name'>{level.title}</div>
                                    <div className='level_progress_box'>
                                        <div>
                                            <span>{level.progress}/33 words </span>
                                            <span>{level.locked ? 'Locked' : `${33 - level.progress} words left`}</span>
                                        </div>
                                        <div className='level_progress_bar'>
                                            <div className='level_progress_complete'
                                                 style={{width: `${(level.progress / 33) * 100}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='streaks'>
                    <div className='level_head'>Streaks</div>
                    {
                        items.map((item, index) => item?.streak ? (
                            <div className='streak' key={index}>
                                <div className='streak_text'>
                                    <div className='streak_name'>{item?.name}</div>
                                    <div className='streak_count'>{item?.streak}/5 streaks</div>
                                    <div className='streak_coat'>{streakCoatPerStreak[item?.streak]}</div>
                                </div>
                                <div className='streak_progress'>
                                    {
                                        item?.streak && Array.from({length: 5}, (_, index) => (
                                            index < item?.streak ?
                                                <img key={index} className='streak_complete' src={tickIcon} alt=""/> :
                                                <span key={index} className='streak_incomplete'></span>
                                        ))
                                    }
                                </div>
                            </div>
                        ) : null)
                    }
                </div>
            </div>
        </div>
    )
}
