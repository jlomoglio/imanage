import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
  render() {

    const Styles = styled.div`
  
    `;

    return (
      <Styles>
        <Navbar 
          expand="lg" 
          fixed="top" 
          bg="dark" 
          variant="dark"
        >
          <Navbar.Brand href="/">
            <strong style={{color: 'white'}}>iManage</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <i className="fas fa-bars" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default Header;