import React,{Component} from 'react';
class Message extends Component{
    constructor(){
        super()
        this.state={
            c:0
        }
    }
    increment(){
        this.setState((prevState)=>({
            c:prevState.c+1
            
    }),()=>{console.log("the count is"+this.state.c)})
    console.log("the count is"+this.state.c)
}

        
        
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
    }
    render(){
        return(
            <div>
                <h1>count is {this.state.c}</h1>
                <button onClick={()=>{this.incrementFive()}}>INCREMENT</button>
            </div>
        )
    }
}
export default Message