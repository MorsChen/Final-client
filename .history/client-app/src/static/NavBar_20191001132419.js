import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";


export default class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {...props}
    console.log('check props Navbar isSignin', this.props.user)
}

isSignin(){
    if (this.state.token !== null){
      this.setState({ isSignin : true})
  }}

  render () {
    console.log('check props Navbar isSignin 2', this.state.isSignin)
      return [
          <Navbar bg="light" expand="lg">
          <Link class="navbar-brand" to="/">ART NOTE</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link class="nav-link" to="/">
                    Home
                  </Link>
                  <Link class="nav-link" to="/events/">
                    Events
                  </Link>
                  <Link class="nav-link" to="/studio/">
                    Studio
                  </Link>
                  <Link class="nav-link" to="/workshop/">
                    WorkShop
                  </Link>
                  <Link class="nav-link" to="/courses/">
                    Courses
                  </Link>
                  <Link class="nav-link" to="/profile/">
                    Profile
                  </Link>
                  <Link class="nav-link" to="/about/">
                    About
                  </Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav className="mr-0">
                <Link class="nav-link" to="/login">
                    Login
                  </Link>
                  <Link class="nav-link" to="/register">
                    Sign Up
                  </Link>
                  <Link class="nav-link" to="/logout">
                    Logout
                  </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

      ]
  }
}