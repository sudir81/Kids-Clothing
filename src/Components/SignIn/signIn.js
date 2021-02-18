import React, {useState} from 'react'
import { signInWithGoogel } from '../../firebase/firebase.util'
import CustomButton from '../Custom-UI/Button/button'
import FormInput from '../Custom-UI/Form-Input/formInput'

import './signIn.scss'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        const { value, name } = e.target;

        name === "email" ? setEmail(value) : setPassword(value);
    }

    return (
        <div className="sign-in">
            <h2>Already have an account!</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" value={email} label="Email" handleChange={handleChange} required/>
                <FormInput type="password" name="password" value={password} label="Password" handleChange={handleChange} required/>

                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogel} isGoogleSignIn>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
