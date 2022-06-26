import React from 'react';
import '../style/style.css'
import {Col, Container, Row} from "reactstrap";
import PokeGame from "./pokeGame";

function App() {
  return (
    <>
        <Container  fluid>
            <Row>
                <PokeGame url="" title="" id={1} thumbnailUrl=""/>
            </Row>
        </Container>
    </>
  );
}

export default App;
