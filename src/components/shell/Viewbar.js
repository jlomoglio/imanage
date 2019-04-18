import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('AppStore')
@observer
class Viewbar extends Component {
  render() {
    
    const AppStore = this.props.AppStore;
    
    const Styles = styled.div`
      .view-bar {
        position: fixed;
        top: 50px;
        right: 0;
        height: 40px;
        background: #4c4b4b;
        color: white;
        padding: 8px;
      }

      .clickable {
        cursor: pointer;
      }
    `;


    return (
      <Styles>
        <div 
          className="view-bar"
          style={{ 
            left: AppStore.sidebarOpen ? "200px" : "0px",
            right: AppStore.sidePanelOpen ? "300px" : "0px" 
          }}
        >
        <i 
          className="fas fa-bars mr-2 clickable" 
          style={{ transform: AppStore.sidebarOpen ? "rotate(0deg)" : "rotate(90deg)" }}
          onClick={() => AppStore.toggleSidebarCollapse()} 
        />
        <span>
          { AppStore.appView }
        </span>
        </div>
      </Styles>
    );
  }
}

export default Viewbar;