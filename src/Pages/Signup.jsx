import { auth, provider } from '../Auth/Config';
import '../Styles/Signup.css';
import { googleIcon } from '../assets';
import { handleAuth } from '../actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);

    if (user) navigate('/');

    return (
        <div className='signup_page'>
            <div>
                <h1 className='signup_wellcome'>Welcome to YTT</h1>
                <button className='login_button' onClick={() => {
                    dispatch(handleAuth(auth, provider));
                }}>
                    <img src={googleIcon} alt="" />
                    <span>
                        Continue with Google
                    </span>
                </button>
            </div>
        </div>
    )
}
