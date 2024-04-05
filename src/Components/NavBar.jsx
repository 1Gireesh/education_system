import '../Styles/NavBar.css'
import { coinIcon, rightArrow, userIcon } from '../assets'
import { useSelector } from 'react-redux';

export default function NavBar() {

    const { user } = useSelector(state => state.auth);

    return (
        <div className='nav_bar'>
            <div className='user_box'>
                <img src={ user.photoURL || userIcon} alt="" className='user_icon' />
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
