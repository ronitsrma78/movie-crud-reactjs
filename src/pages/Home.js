import React, { Component } from "react";
import { context } from "../context";

export default class Home extends Component {
  render() {
    const { current_user } = this.context;
    return (
      <div>
        Home
        <button onClick={this.context.logout}>Logout</button>
      </div>
    );
  }
}

Home.contextType = context;
