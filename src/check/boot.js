import Button from 'react-bootstrap/Button';
import React from 'react'
import { useNavigate } from 'react-router';
function Example() {
  const [C,setC]=useState(0)
  
  const handler=()=>{
console.log("hello Saikumar")

  }
  return (

    <>
      <Button variant="primary" onClick={()=>{setC(C+1)}}>Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link" onClick={handler}>Link</Button>
      <h1>{C}</h1>
    </>
  );
}

export default Example;