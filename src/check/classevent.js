import React,{Component} from 'react';
class ClassEvent extends Component{
    constructor(){
        super()
        this.state={
            message:"hidding in state message"
        }
        this.cont=this.cont.bind(this);
    }
    swap(){
        this.setState({
            message:"hidding in state message"
    })
    }

    add(){
        this.setState({
        message:"this change state is from handler.this bind method"
        
        }) }
    sub(){
        this.setState({
            message:"this change state is from arrow function  bind method"
        })
    }
    cont(){
        this.setState({
            message:"this change state is from constructor.this bind method"
         } )
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={(this.add).bind(this)}>bind.this</button><br></br>
                <button onClick={()=>this.sub()}>ArrowFun()</button><br></br>
                <button onClick={this.cont}>constructor</button>
            </div>
        );
    }
    
} 

export default ClassEvent;