import { useState } from 'react';
import '../Styles/NavBar.css'
import { coinIcon, rightArrow, userIcon } from '../assets'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../actions/authAction';

export default function NavBar() {

    const { user } = useSelector(state => state.auth);
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='nav_bar'>
            <div className='user_box'>
                <img src={user.photoURL || userIcon} alt="" className='user_icon' onClick={()=>setClicked(c=>!c)} />
                {clicked && <div onClick={()=>{
                    dispatch(removeUser())
                }} className='signout_pop'>
                        Sign out
                </div>}
                <div>
                    <div>Welcome back</div>
                    <h2>Hi {user.displayName}, Good Afternoon!</h2>
                </div>
            </div>
            <div className='score_box'>
                <div className='coin_box'>
                    <img src={coinIcon} alt="" />
                    {120}
                </div>
                <div className='seforim_link'>
                    Go to Seforim Collection
                    <img src={rightArrow} alt="" />
                </div>
            </div>

        </div>
    )
}
