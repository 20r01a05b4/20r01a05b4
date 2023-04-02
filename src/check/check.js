import React,{Component} from 'react';

class Check extends Component{
    render(){
        const {a,b}=this.props;
        
        return(<h1>Hello {a} to class component {b} </h1>);
    }
}

export default Check;