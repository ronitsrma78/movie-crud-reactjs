import { Component } from "react";
import { context } from "../context";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.context.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="email" onChange={this.changeHandler} />
        <input type="text" name="password" onChange={this.changeHandler} />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;

Login.contextType = context;
