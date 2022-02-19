import "./styles.css";
import {Container} from "react-bootstrap";

import Todo from "./components/Todo"

export default function App() {
  return (
    <Container>
    <h1 className="text-center">MY TODOS</h1>
     <Todo text="React is cool"/>
      <Todo text="React is amaizing"/>
       <Todo text="React is awesome"/>
    </Container>
  );
}
