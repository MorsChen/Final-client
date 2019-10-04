import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { Button, Navbar, FormControl, Form, Nav} from 'react-bootstrap';


function Home() {
  return <div> HOME </div>
}

function User() {
  return <div> HOME </div>
}
function About() {
  return <div> HOME </div>
}

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link href="/">Home</Link>
            <Link href="#features">User</Link>
            <Link href="#pricing">About</Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={User} />

      </Router>
    </div>
  );
}

export default App;
