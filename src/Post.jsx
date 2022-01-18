import React from "react";

class Post extends React.Component {

  constructor(){
    super();
    this.state = {
      full_content : false
    }
  }

  handleButton = () => {
    this.setState({
      full_content : !this.state.full_content
    })
  }

  render() {

    if(this.props.children.length < 150){
      return (
        <>
        <h3>Title : {this.props.title}</h3>
        <p>{this.props.children}</p>
        <p>Author : {this.props.author}</p>
        <hr/>
        </>
      );
    }else{
      return (
        <>
        <h3>Title : {this.props.title}</h3>
        <p>
        {
          this.state.full_content
           ?
          this.props.children
           :
          this.props.children.substring(0, 150)
        }
        </p>
        <button onClick={this.handleButton}>
          {
            this.state.full_content
             ?
            "Read Less"
           :
           "Read More"
          }
           </button>
           <p>Author : {this.props.author}</p>
        <hr/>
        </>
      );
    }


  }
}

export default Post;
