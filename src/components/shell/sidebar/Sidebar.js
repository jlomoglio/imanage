import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Profile from './Profile';
import NavItem from './NavItem';
import NavSubItem from './NavSubItem';

@inject('AppStore')
@observer
class Sidebar extends Component {
  render() {

    const AppStore = this.props.AppStore;

    const Styles = styled.div`
      .sidebar {
        position: fixed;
        top: 40px;
        left: 0;
        bottom: 0;
        background: #1A1817;
        overflow-y: scroll;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        ::-webkit-scrollbar { 
          width: 0 !important 
        }
      }

      .pull-right {
        float: right;
      }
    `;

    return (
      <Styles>
        <div 
          className="sidebar"
          style={{ width: AppStore.sidebarOpen ? "200px" : "0px" }}
        >
          <Profile />
          <NavItem label="Dashboard" icon="fa-tachometer-alt" view="Dashboard"></NavItem>
          
          {/* <NavItem sub ref="sub" label="UI Elements" icon="fa-desktop" view="UI Elements">
            <NavSubItem label="General Elements" view="UI Elements" subview="General Elements" />
            <NavSubItem label="Buttons" view="UI Elements" subview="Buttons" />
            <NavSubItem label="Icons" view="UI Elements" subview="Icons" />
          </NavItem> */}

          <NavItem label="Projects" icon="fa-project-diagram" view="Projects"></NavItem>
          <NavItem label="Backlog" icon="fa-list-alt" view="Backlog"></NavItem>
          <NavItem label="Board" icon="fa-chalkboard-teacher" view="Board"></NavItem>
          <NavItem label="Issues" icon="fa-exclamation-triangle" view="Issues"></NavItem>
        </div>
      </Styles>
    );
  }
}

export default Sidebar;