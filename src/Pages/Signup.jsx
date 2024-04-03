import React from 'react'
import { auth, provider } from '../Auth/Config'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import '../Styles/Signup.css'
import { googleIcon } from '../assets'

export default function Signup() {
    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user)
            })
    }
    return (
        <div className='signup_page'>
            <h1 className='signup_wellcome'>Welcome to YTT</h1>
            <button className='login_button' onClick={handleAuth}>
                <img src={googleIcon} alt="" />
                <span>
                    Continue with Google
                </span>
            </button>
        </div>
    )
}
