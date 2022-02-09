import { Component } from "react";
import { context } from "../context";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

Login.contextType = context;
