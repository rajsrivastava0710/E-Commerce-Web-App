import React from 'react';

import './signin.style.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

class Signin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        try{

            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email:'',password:''})

        }catch(error){
            console.log(error);
        }
        this.setState({email:'',password:''})
    }
    render(){
        return (
            <div className='signin-container'>
                <span>Signin with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>                    
                    <FormInput 
                        name='email' 
                        type='email' 
                        // placeholder='Your E-Mail' 
                        value={this.state.email} 
                        label='email' 
                        handleChange={this.handleChange} 
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        // placeholder='Your Password' 
                        value = {this.state.password} 
                        handleChange={this.handleChange} 
                        label='password' 
                        required
                    />
                    <CustomButton type='submit'>Signin</CustomButton>
                    <CustomButton type='button' isGoogleLogin onClick={signInWithGoogle}>Signin with Google</CustomButton>
                    
                </form>
                </div>
        )
    }
}

export default Signin;