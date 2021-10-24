import React from "react"
import "./sign-in-styles.scss"
import FormInput from "../../Component/form-input/form-input.component.jsx";

class SignInComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email:"",
            password:""
        }
    }
    handleSubmit = event => {
        event.preventDefault();
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
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        handleChange={this.handleChange} 
                        Value={this.state.email}
                        label = "email"
                        required />
                    <FormInput 
                        name="password" 
                        type ="password"
                        Value={this.state.password}
                        handleChange = {this.handleChange}
                        label = "password"
                        required />
                    <input type="submit" value="Sign in"/>
                </form>
                </div>
            </div>
        )
    }
}

export default SignInComponent