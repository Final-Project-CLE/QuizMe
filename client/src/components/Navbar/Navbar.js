import React from "react";
import history from "../../history";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Button } from 'reactstrap';
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
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
          <Navbar color="blue" light>
          {
              !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                  </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                  </Button>
              )
            }
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink onClick={() => history.replace("/")}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => history.replace("/quizzes")}>View Quizzes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => history.replace("/newquiz")}>Create a Quiz</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavExample;
