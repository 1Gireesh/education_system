import {tickIcon} from "../assets/index.js";
import {useSelector} from "react-redux";
const streakCoatPerStreak = {
    0: 'You are just getting started!',
    1: 'You are making nice progress!',
    2: 'You are getting close!',
    3: 'You have almost mastered this word!',
    4: 'You have mastered this word!',
    5: 'You have mastered this word!'
};
export default function Streaks() {

    const items = useSelector(state => state?.items?.items);

    return (
        <div className='streaks'>
            <div className='level_head'>Streaks</div>
            {
                items?.length && items?.map((item, index) => item?.streak ? (
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
    )
}