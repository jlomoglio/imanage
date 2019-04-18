import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

@inject('AppStore') 
@observer
class Header extends Component {
  render() {

    const AppStore = this.props.AppStore;
    
    const Styles = styled.div`
      .fixed-top {
        height: 40px !important;
        padding-right: 5px !important;
      }
    `;

    return (
      <Styles>
        <Navbar 
          expand="lg" 
          fixed="top" 
          bg="dark" 
          variant="dark"
          style={{ right: AppStore.sidePanelOpen ? "300px" : "0px" }}
        >
          <Navbar.Brand href="/">
            <strong style={{color: 'white'}}>
              { AppStore.appTitle }
            </strong> 
            <small className="ml-1">{ AppStore.appVersion }</small>
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
                  <i 
                    className="fas fa-comment-dots" 
                    onClick={() => AppStore.toggleSidePanelCollapse()}
                  />
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