import React from "react";
import Layout from "./layout";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userData: {},
      },
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userkey"));
    console.log("usage", user);
    if (user)
      this.setState({
        user: user,
      });
    else {
      localStorage.removeItem("user");
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <Layout />

        <h1>User Profile</h1>
        <div>
          <label>Name: </label>
          <label>{this.state.user.userData.name}</label>
        </div>
        <div>
          <label>Email: </label>
          <label>{this.state.user.userData.email}</label>
        </div>
      </div>
    );
  }
}

export default Profile;
