import React, { Component } from 'react'
import { auth, createUserProfileDoc } from '../../firebase/firebase.util'
import CustomButton from '../Custom-UI/Button/button'
import FormInput from '../Custom-UI/Form-Input/formInput'

import './singUp.scss'

class SignUp extends Component {
    constructor(){
        super()

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { userName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("Password didn't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDoc(user, {userName})

            this.setState({
                userName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({[name]: value})
    }

  render() {
    const { userName, email, password, confirmPassword } = this.state
    return (
        <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with Email & password for new account!</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput type="text" name="userName" value={userName} label="Name" handleChange={this.handleChange} required/>
            <FormInput type="email" name="email" value={email} label="Email" handleChange={this.handleChange} required/>
            <FormInput type="password" name="password" value={password} label="Password" handleChange={this.handleChange} required/>
            <FormInput type="password" name="confirmPassword" value={confirmPassword} label="Confirm Password" handleChange={this.handleChange} required/>

            <CustomButton type="submit"> Sign Up </CustomButton>
        </form>
    </div>
    )
  }
}

export default SignUp
