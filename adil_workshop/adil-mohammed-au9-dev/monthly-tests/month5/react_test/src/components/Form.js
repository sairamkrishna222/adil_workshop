import './Form.css';
import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            password :'',
            nameError: '',
            passwordError: ''
        }
    }
    valid(){
        if(!this.state.name.includes('@') && this.state.password.length<10) {
            this.setState(
                {nameError:"Invalid Email ", passwordError:"Password length should be more that 10 character"}
            )
        }
        else if(!this.state.name.includes('@')) {
            this.setState(
                {nameError:"Invalid Email "}
            )
        }
        else if(this.state.password.length<10) {
            this.setState(
                {passwordError:"Password length should be more that 10 character"}
            )
        }

    }

    submit(){
        console.log("Email :"+this.state.name)
        console.log("Message: "+this.state.password)
        if(this.valid()){
            alert('form submitted')
        }
        
    }

    render(){
        return(
            <div className="contactForm">
                <h1>Contact page</h1>
                Email:<br/><input type="text" onChange={(event)=>{
                    this.setState({name:event.target.value})
                }} />
                <p style={{color:"red", fontSize:"14px"}}>{this.state.nameError}</p>

                Message:<br/><textarea  onChange={(event)=>{
                    this.setState({password:event.target.value})
                }} />
                <p style={{color:"red", fontSize:"14px"}}>{this.state.passwordError}</p>
                <button onClick={()=>this.submit()}>submit</button>
            </div>
        )
    }
}

export default Form;