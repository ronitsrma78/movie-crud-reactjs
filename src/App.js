

import axios from 'axios';
import React, { Component } from 'react'
import styled from 'styled-components'
import ChildA from './ChildA';

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            count : 0,
            users : []
        }
    }


    // componentWillMount(){
    //     console.log("App Will Mount");
    //     const fetchData = async () => {
    //           const res = await axios.get("https://jsonplaceholder.typicode.com/users");  /// async task promise return 

    //           console.log(res.data)

    //           this.setState({
    //               users : res.data
    //           })
    //     }

    //     fetchData();
    // }

    
    componentDidMount(){
        console.log("App Did Mount");

        axios.get("https://jsonplaceholder.typicode.com/users").then( (res) => {
            this.setState({
                users : res.data
            })
        }).catch(e => console.log(e))
    
    }



    componentDidUpdate(){
        console.log("App Update Mount")
    }

    
    componentWillUnmount(){
        console.log("App Will UnMount")
    }

    render() {

        console.log("renderr ")
        return (
            <Container>
                <p>App Component</p>

                {
                    this.state.users.map((user) => {
                        return (
                            <div>
                                <h4>{user.name}</h4>
                                <p>{user.email}</p>
                            </div>
                        )
                    })
                }

                <hr/>
                <div>
                    <h3>{this.state.count}</h3>
                    <button onClick={() => this.setState({ count : this.state.count + 1})}>Inc</button>
                </div>
                { this.state.count > 2  ? <ChildA data={this.state.count}/> : null }  
            </Container>
        )
    }
}


const Container = styled.div`` ;
