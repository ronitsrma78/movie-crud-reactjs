import { Component } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../context";

class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          padding: "1rem"
        }}
      >
        <NavLink to="/home">Home</NavLink>
        {this.context.data.current_user ? (
          <button onClick={this.context.logout}>LogOut</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    );
  }
}

export default NAvbar;

Navbar.contextType = context;
