import "../components/form.css";
const Form = () => {
  return (
    <div className="login">
      <h2>Login Form</h2>
      <form>
        <div className="user">
          <label className="userName" htmlFor="name">
            UserName
          </label>
          <input className="UserName" type="text" id="name"></input>
        </div>
        <div className="pass">
          <label className="password" htmlFor="nam">
            Password
          </label>
          <input className="password" type="password" id="nam"></input>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
