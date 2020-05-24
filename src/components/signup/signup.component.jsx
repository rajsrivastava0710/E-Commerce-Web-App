import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.style.scss';

class Signup extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirm_password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName,email,password,confirm_password} = this.state;

        if(password !== confirm_password){
            alert('Passwords do not match');
            return;
        }
        try{

            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName,password});

            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirm_password:''
            })

        }catch(error){
            console.log(error);
        }
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        const {displayName,email,password,confirm_password} = this.state;
        return(
            <div className='signup-container'>
            <span>Signup with your E-mail and Password</span>
            <form className='signup-form' onSubmit={this.handleSubmit}>
            <FormInput 
                name='displayName' 
                type='text' 
                // placeholder='Your E-Mail' 
                value={displayName} 
                label='Display Name' 
                handleChange={this.handleChange} 
                required 
            />
             <FormInput 
                name='email' 
                type='email' 
                // placeholder='Your E-Mail' 
                value={email} 
                label='E-Mail' 
                handleChange={this.handleChange} 
                required 
            />
             <FormInput 
                name='password' 
                type='password' 
                // placeholder='Your E-Mail' 
                value={password} 
                label='Password' 
                handleChange={this.handleChange} 
                required 
            />
             <FormInput 
                name='confirm_password' 
                type='password' 
                // placeholder='Your E-Mail' 
                value={confirm_password} 
                label='Confirm Password' 
                handleChange={this.handleChange} 
                required 
            />
            <CustomButton type='submit'>SignUp</CustomButton>
            </form>
            </div>
        )
    }
}

export default Signup;