import React from "react"
import { Link } from 'react-router-dom'
import "./sign-in-styles.scss"
import FormInput from "../../Component/form-input/form-input.component.jsx";
import CustomButton from "../../Component/custom-button/custom-button.component";

 import {auth, signInWithGoogle} from "../../firebase/firebase.utils"


class SignInComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email:"",
            password:""
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email: "", password:""})
        }catch(error){
            console.error(error)
        }

        this.setState({email: "", password:""})

    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
     }
    
    render() {
        return( 
            <div className="sign-in-outer">
                <div className="sign-in-inner">
                <h2>Already Have An Account?</h2>
                <span>Sign In With Email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label = "email"
                        required />
                    <FormInput 
                        name="password" 
                        type ="password"
                        value={this.state.password}
                        handleChange = {this.handleChange}
                        label = "password"
                        required />
                        <div className="buttons">
                            <CustomButton type="submit">Sign in</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                        </div>
                        <div className="buttons">
                          <Link className="Link-To-Sign-Up" to="/SignUp">Don't Have An Account? Sign Up!</Link>
                        </div>

                </form>
                </div>
            </div>
        )
    }
}

export default SignInComponent