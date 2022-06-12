import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Documentation from './Documentation';
import Fib from './Fib';
import Main from './Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Przykładowa realizacja zadania nr 2</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/fib">Kalkulator liczb Fibonacciego</Nav.Link>
                <Nav.Link href="/documentation">Dokumentacja</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Switch>
            <Route path="/fib" component={Fib} />
            <Route path="/documentation" component={Documentation} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
