import {Card,Button} from "react-bootstrap";
import {useState} from "react";

import ModalComp from "./ModalComp"

export default function Todo({text}) {
  const [show, setShow] = useState(false);

  const clickDeleteHandler=()=>{
      setShow(true)
  }
  return (
<Card bg={'success'} className="m-4">
<ModalComp show={show} setShow={setShow}/>
  <Card.Body>
     <Card.Title >{text}</Card.Title>
       <Button variant="primary" className="m-2">Edit</Button>
       <Button variant="danger" onClick={clickDeleteHandler}>Delete</Button>
  </Card.Body>
</Card>   
  );
}