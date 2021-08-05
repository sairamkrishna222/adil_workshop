import "./form.css";

const userInputChange = (e) => {
  e.target.style.color = "blue";
  console.log(e.target.value);
  let pass = document.querySelector("#pass");
  pass.value = e.target.value;
};

const passwordclick = (e) => {
  e.target.style.border = "2px solid blue";
};

const ssubmit = (e) => {
  e.preventDefault();
};

const Form = () => {
  return (
    <form>
      <h2>Login Form</h2>

      <div className="user">
        <label htmlFor="user">UserName</label>
        <input id="user" className="user" onChange={userInputChange}></input>
      </div>
      <div className="pass">
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" onClick={passwordclick}></input>
      </div>
      <input className="radio" type="radio"></input>
      <p className="terms">Accept Terms</p>
      <br />
      <input className="checkbox" type="checkbox"></input>
      <p className="conditions">Accept Conditons</p>

      <button type="submit" onClick={ssubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
