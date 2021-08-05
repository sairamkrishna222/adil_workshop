import React from "react";
import SignupForm from "./SignupFun";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: "",
      Email: "",
      Mobile: null
    };
  }

  inputHandlerName = (e) => {
    this.setState ( {
      FullName: e.target.value
    });
  };
  inputHandlerEmail = (e) => {
    this.setState( {
      Email: e.target.value
    });
  };
  inputHandlerMobile = (e) => {
    
    this.setState({
      Mobile: e.target.value
    });
    
  };


  submitHandler=(e)=>{
    e.preventDefault()
    console.log(e);
    console.log(this.state);

  }
  render() {
    return (
      <SignupForm
       
        inputHandlerName={this.inputHandlerName}
        inputHandlerEmail={this.inputHandlerEmail}
        inputHandlerMobile={this.inputHandlerMobile}
        submitHandler={this.submitHandler}
      />
    );
  }
}

export default Signup;
