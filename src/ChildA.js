

import React, { Component } from 'react'

export default class ChildA extends Component {

    
    componentWillMount(){
        console.log("Child Will Mount")
    }

    
    componentDidMount(){
        console.log("Child Did Mount")
    }

    shouldComponentUpdate(){
        if(this.props.data < 6){
            return false ;
        }else{
            return true ;
        }
        
    }

    componentDidUpdate(){
        console.log("Child Update Mount")
    }

    
    componentWillUnmount(){
        console.log("Child Will UnMount")
    }

    render() {
        return (
            <div>
                Child A Components
            </div>
        )
    }
}
