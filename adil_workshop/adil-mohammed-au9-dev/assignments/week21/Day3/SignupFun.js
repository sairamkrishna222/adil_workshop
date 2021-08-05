

import "./signup.css";
import React from "react";
const SignupForm = (props) => {
  const { inputHandlerName,inputHandlerEmail,inputHandlerMobile ,submitHandler} = props;
  return (
    <form onSubmit={submitHandler} style={{ border: "1px solid #ccc" }}>
      <div className="container">
        <label htmlFor="name">FullName</label>
        <input  id="name" name="name"
        onChange={inputHandlerName}
        ></input>
      </div>
      <div className="container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={inputHandlerEmail}
          
        ></input>
      </div>
      <div className="container">
        <label htmlFor="mobile">Mobile</label>
        <input
          type="number"
          id="mobile"
          name="mobile"
          onChange={inputHandlerMobile}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default React.memo(SignupForm);
