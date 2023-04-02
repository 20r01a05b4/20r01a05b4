import React from 'react'

const Event = () => {
    var message=function(){
        <div><h1>Event handler is working</h1></div>
        console.log("Event handler is working");
    };
  return (
    <div>
        <button onClick={message}>Click</button>
    </div>
  )
}

export default Event;

