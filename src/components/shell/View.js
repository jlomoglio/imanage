import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

// PROFILE 
import UserProfile from '../../views/Profile/UserProfile/UserProfile';
import Settings from '../../views/Profile/Settings';
import Help from '../../views/Profile/Help';

import Dashboard from '../../views/Dashboard/Dashboard';
import Projects from '../../views/Projects/Projects';
import Backlog from '../../views/Backlog/Backlog';
import Board from '../../views/Board/Board';
import Issues from '../../views/Issues/Issues';


@inject('AppStore')
@observer
class View extends Component {
  render() {

    const AppStore = this.props.AppStore;

    const Styles = styled.div`
      .view {
        position: fixed;
        top: 90px;
        right: 0;
        bottom: 0;
        background: #fcfcfc;
        overflow-y: auto;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
    `;

    return (
      <Styles>
        <div 
          className="view"
          style={{ 
            left: AppStore.sidebarOpen ? "200px" : "0px",
            right: AppStore.sidePanelOpen ? "300px" : "0px" 
          }}
        >
          { AppStore.appView === 'User Profile' && <UserProfile /> }
          { AppStore.appView === 'Settings' && <Settings /> } 
          { AppStore.appView === 'Help' && <Help /> }  
          
          
          { AppStore.appView === 'Dashboard' && <Dashboard /> } 

          {/* { 
            AppStore.appView === 'UI Elements' &&
            AppStore.appSubView === 'General Elements' &&
            <GeneralElements /> 
          } */}
          

          { AppStore.appView === 'Projects' && <Projects /> }
          { AppStore.appView === 'Backlog' && <Backlog /> }
          { AppStore.appView === 'Board' && <Board /> }
          { AppStore.appView === 'Issues' && <Issues /> }
        </div>
      </Styles>
    )

  }
}

export default View;