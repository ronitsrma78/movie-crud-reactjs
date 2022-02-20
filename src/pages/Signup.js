import { Component } from "react";
import { context } from "../context";

class Signup extends Component {
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
    this.context.signup(this.state.email, this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="email" onChange={this.changeHandler} />
        <input type="text" name="password" onChange={this.changeHandler} />
        <button type="submit">Signup</button>
      </form>
    );
  }
}

export default Signup;

Signup.contextType = context;
