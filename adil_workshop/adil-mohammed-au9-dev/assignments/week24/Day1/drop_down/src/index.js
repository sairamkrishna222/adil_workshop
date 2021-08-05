import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Hyderabad is very Hot'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Whether is : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Choose the city to check the whether News:</h1>
            <label/>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Hyderabad is very Hot">Hyderabad</option>
              <option value="Mumbai has Humidity">Mumbai</option>
              <option value="Banglore is Chill">Banglore</option>
              <option value="Delhi polutated ">Delhi</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
ReactDOM.render(<App />, document.querySelector('#root'));
