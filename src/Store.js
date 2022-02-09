import App from "./App";

import { Component } from "react";
import { Provider } from "./context";

class Store extends Component {
  state = {
    users: [
      { username: "rakesh", password: "1234" },
      { username: "john", password: "3456" }
    ],
    current_user: ""
  };

  login = (username, password) => {
    const getUser = this.state.users.find(
      (user) => user.username == username && user.password == password
    );
    //console.log(getUser);
    this.setState({ current_user: getUser });
  };

  logout = () => {
    this.setState({ current_user: "" });
  };

  render() {
    return (
      <Provider
        value={{
          data: this.state,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default Store;
