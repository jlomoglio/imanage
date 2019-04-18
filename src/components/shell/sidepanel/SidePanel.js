import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ChatPersonList from './ChatPersonList';
import ChatPersonWindow from './ChatPersonWindow';

@inject('AppStore', 'ChatStore')
@observer
class SidePanel extends Component {
  render() {

    const AppStore = this.props.AppStore;
    //const ChatStore = this.props.ChatStore;

    const Styles = styled.div`
      .side-panel {
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        border-left: 1px solid #4c4b4b;
        background: #1b1e24;

        ::-webkit-scrollbar { 
          width: 0 !important 
        }
      }

      .pull-right {
        float: right;
      }

      .search-box input {
        background: #0d0f12;
        border: transparent;
        width: 80%;
        padding: 8px; 
        margin: 10px;
      }

      .search-box i {
        color: #ccc;
        cursor: pointer;
      }

      .chat-section {
        margin: 0;
        padding: 0;
      }
    `;

    return (
      <Styles>
        <div 
          className="side-panel"
          style={{ 
            width: AppStore.sidePanelOpen ? "300px" : "0px",
            boxShadow: AppStore.sidePanelOpen ? "0 0 8px 3px rgba(0, 0, 0, 0.5)" : ""
          }}
        >
          <div className="search-box">
            <input type="text" placeholder="search" /> 
            <i className="fas fa-cog pl-2" />
          </div>

          <div className="chat-section">
            <ChatPersonList />
            <ChatPersonWindow />
          </div>
        </div>
      </Styles>
    );
  }
}

export default SidePanel;