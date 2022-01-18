import React from "react";
import styled from "styled-components";
import Post from "./Post";

import "./styles.css";

import {data} from "./data.js" 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nightmode: false,
      posts : data
    };
  }

  render() {
    return (
      <Container className="App" nightmode={this.state.nightmode}>
        <Header nightmode={this.state.nightmode}>Hello World</Header>
        <button
          onClick={() => this.setState({ nightmode: !this.state.nightmode })}
        >
          Night Mode On
        </button>


        {
          this.state.posts && this.state.posts.map( (p) => {
             return (
               <Post title={p.title} author={p.author}>
                  { p.content }
               </Post>  
             )
          })
        }


      </Container>
    );
  }
}












export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => (props.nightmode ? "black" : "white")};
`;

const Header = styled.h1`
  color: ${(props) => (props.nightmode ? "white" : "black")};
`;
