import React, { Component } from "react";
import { Provider } from "./context";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/auth_config";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      users: [{ name: "rohit", username: "rohit", password: "1234" }],
      current_user: "",
      posts: [],
    };
  }

  componentWillMount() {}

  signup = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      this.setState({
        current_user: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      this.setState({
        current_user: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  logout = async () => {
    try {
      await signOut(auth);
      this.setState({ current_user: null });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.users);
    const { users, current_user, posts } = this.state;
    const { login, logout, signup } = this;
    return (
      <Provider
        value={{
          users,
          current_user,
          posts,
          login,
          logout,
          signup,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default Store;
