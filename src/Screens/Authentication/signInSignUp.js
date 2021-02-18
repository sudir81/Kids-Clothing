import React from 'react'
import SignIn from '../../Components/SignIn/signIn'
import SignUp from '../../Components/SignUp/singUp'

import './signInSignUp.scss'

const SignInSignUp = () => {
    return (
        <div className="signin-signup">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp
