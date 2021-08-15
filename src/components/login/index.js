import React, { useState, useEffect } from 'react'
import './login.css'
import SignupScreen from '../signup'
function Login() {
    const [signIn, setSignIn] = useState(false)
    useEffect(() => {

    }, []);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="" />
                <button className="loginScreen__button"
                    onClick={() => setSignIn(true)}
                >
                    Sign in
                  </button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {
                    !signIn ? (
                        <>
                            <h1>Unlimted films, TV programmes and more</h1>
                            <h2>Watch anywhere . Cancel at any time.</h2>
                            <h3>Ready to watch ? enter you email to create or restart your membership.</h3>
                            <div className="loginScreen__input">
                                <form>
                                    <input type="text" placeholder="Email Address" />
                                    <button className="loginScreen__getStarted">GET STARTED</button>
                                </form>
                            </div>
                        </>
                    )
                        :
                        <SignupScreen />
                }
            </div>
        </div>
    )
}

export default Login
