import React from "react";
import history from "../../history";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css'

class NavExample extends React.Component {
    constructor(props) {
      super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }

    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

    render() {
      return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">QuizMe</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink onClick= {()=>history.replace("/home")}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick= {()=>history.replace("/quizzes")}>View Quizzes</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick= {()=>history.replace("/newquiz")}>Create a Quiz</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

export default NavExample;
