import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NAvbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { context } from "./context";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    //console.log(this.context.data.current_user);
    const { current_user } = this.context.data;
    console.log(current_user);

    return (
      <BrowserRouter>
        <NAvbar />
        <Routes>
          <Route path="/home" element={current_user ? <Home /> : <Login />} />
          <Route path="/login" element={current_user ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

App.contextType = context;
