

import axios from 'axios';
import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {

    constructor(){
        super()
        this.state = {
           users : [],
           fontFamilies : ["Roboto", "Lato", "Poppins", "Dongle", "Comforter"],
           colors : ["#15d31b", "#2d2657", "#850630", "#837420"],
           fontFamily : "",
           color : "",
           searchText : ""
        }
    }

    componentDidMount(){
        const fetchData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            this.setState({
              users: res.data
            });
          };
      
          fetchData();
    }


    filterUsers = () => {
        const filteredUsers = this.state.users.filter(user => user.name.includes(this.state.searchText) || user.email.includes(this.state.searchText) || user.username.includes(this.state.searchText)) ;
        console.log(filteredUsers);
        return filteredUsers ;
    }



    

    render() {

        return (
            <Container>
                <Wrapper>
                    <SearchBar>
                        <span>search : </span>
                        <input type="text" placeholder="search by Id, name, username, email ..."  onChange={(e) => this.setState({searchText : e.target.value})}/>
                    </SearchBar>
                    <SelectFonts>
                        <span>set Fonts : </span>
                        <select onChange={(e) => this.setState({fontFamily : e.target.value})}>
                            {
                                this.state.fontFamilies.map(font => <option value={font}>{font}</option>)
                            }
                        </select>
                        <span>set Fonts : </span>
                        <select onChange={(e) => this.setState({color : e.target.value})}>
                            {
                                this.state.colors.map(color => <option value={color}>{color}</option>)
                            }
                        </select>
                    </SelectFonts>
                    <List>
                        <Row color={"black"} fw={700}>
                            <Col>
                                Name
                            </Col>
                            <Col>
                                Username
                            </Col>
                            <Col>
                                Email
                            </Col>    
                        </Row>
                        <tbody>
                        {
                            this.filterUsers()?.map(user => (
                                <Row key={user.id} font={this.state.fontFamily} color={this.state.color}>
                            <Col>
                                {user.name}
                            </Col>
                            <Col>
                                {user.username}
                            </Col>
                            <Col>
                                {user.email}
                            </Col>
                        </Row>
                            ))
                        }
                        </tbody>
                    </List>
                </Wrapper>
            </Container>
        )
    }
}


const Container = styled.div`
   width : 100vw ;
   height : 100vh ;
   background-color: aliceblue;
   display: flex;
   justify-content: center;
   align-items: center;
` ;

const Wrapper = styled.div`
  background-color: #fadeda;
  padding : 1rem 2rem;
` ;

const SearchBar = styled.div`
 padding: 1rem;
 input {
     margin-top: 1rem;
     width : 100%;
     height : 2rem;
     border-radius: 0.5rem;
     border:none;
     padding: 0.5rem;
     text-align: center;

     &::placeholder{
         font-weight: 100;
         color : red;
         opacity: 0.2;
     }
 }
`;

const SelectFonts = styled.div`
  padding: 1rem ;
  select{
      width : 8rem;
      height : 2rem;
      padding: 0.5rem;
      border:none;
      border-radius: 1rem;
      margin-right: 1rem;
  }
` ;

const List = styled.table`
  background-color: #f19f94;
  padding : 1rem 2rem;
  box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.5) ;
  font-weight: 500;
  ` ;

const Row = styled.tr`
  font-weight: ${(props) => props.fw ? props.fw : 400} ;
  font-family: ${({font}) => font ? font : "sans-serif" };
  color: ${({color}) => color ? color : "white" };
` ;

const Col = styled.td` 
  font-family: inherit;     // inherits property from their parent "Row"
  padding: 0.5rem 2rem;
` ;
