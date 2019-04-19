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
        height: 50px !important;
        padding-right: 5px !important;
        z-index: 100 !important;;
      }

      .chat-icon {
        font-size: 20px;
      }

      .fa-stack[data-count]:after{
        position: absolute;
        right: 0%;
        top: 1%;
        content: attr(data-count);
        font-size: 9.5px;
        padding: .6em;
        border-radius: 999px;
        line-height: .75em;
        color: white;
        background: rgba(255,0,0,.85);
        text-align: center;
        min-width: 2em;
        font-weight: bold;
        margin-left: 5px;
      }

    }
    `;

    return (
      <Styles>
        <Navbar 
          expand="lg" 
          fixed="top" 
          bg="dark" 
          variant="dark"
          style={{ right: AppStore.sidePanelOpen ? "300px" : "0px", zIndex: '500' }}
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
                  <span 
                    className="fa-stack fa-1x has-badge" 
                    data-count="7"
                    onClick={() => AppStore.toggleSidePanelCollapse()}
                  >
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fas fa-comment-dots chat-icon fa-stack-1x fa-inverse" />
                  </span>
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