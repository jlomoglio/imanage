import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const ChatSettingsWindow = inject('ChatStore', 'AppStore')(observer(props => {

  const ChatStore = props.ChatStore;
  const AppStore = props.AppStore;

  const Styles = styled.div`
    .pull-right {
      float: right;
    }

    .chat-settings {
      position: fixed;
      top: 0px;
      right: 0px;
      width: 310px;
      bottom: 0px;
    }

    .chat-section-text {
      color: #808285;
      font-size: 10.5px;
      font-weight: 600;
      letter-spacing: .2px;
      padding-left: 10px;
      padding-right: 31px;
      text-transform: uppercase;
    }

    .chat-section-text-large {
      color: #808285;
      font-size: 15.5px;
      font-weight: 600;
      letter-spacing: .2px;
      padding-left: 10px;
      padding-right: 31px;
      text-transform: uppercase;
    }

    .close {
      font-size: 16px;
      margin-right: -10px;
      margin-top: 10px;
      color: #ccc;
      font-weight: 200;
      cursor: pointer;
    }

    .chat-window {
      position: absolute;
      top: 110px;
      bottom: 40px;
      width: 286px;
      overflow-y: scroll;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      ::-webkit-scrollbar { 
        width: 0 !important 
      }
    }

    input {
      background: #0d0f12;
      border: transparent;
      width: 75%;
      padding: 8px; 
      margin: 10px;
      font-size: 14px;
      color: white;
    }

    .user-list-item {
      color: white;
      font-size: 14px;
    }

    .user-name {
      text-align: left;
    }

    .user-input-box {
      margin-top: -30px !important;
    }

    .user-name-input {
      background: transparent;
    }
  `;

  let groupName = '';
  const handleChange = ({ target }) => {
    groupName = target.value;
  }

  let textInput = null;
  let userDiv = [];

  return (
    <Styles>
      <div
        className="chat-settings" 
        style={{ display: ChatStore.showChatSettingsScreen ? 'display' : 'none', marginLeft: '-10px' }}
      >
        <div 
          className="chat-section-text-large"
          style={{ display: AppStore.sidePanelOpen ? 'display' : 'none' }}
        >
          <i className="fas fa-cog mr-1 ml-3 mt-3" />
          Settings

          <i 
            className="far fa-times-circle pull-right close mt-3"
            onClick={() => ChatStore.closeChatWindow()}
          />
        </div>

        <div 
          className="add-group"
          style={{ display: AppStore.sidePanelOpen ? 'display' : 'none' }}
        >
          <div className="chat-section-text mt-3">
            <i className="fab fa-slack-hash mr-1 ml-3 mt-3" />
            ADD GROUP
          </div>
          <div className="ml-3">
            <input 
              type="text" 
              ref={(input) => { textInput = input; }}
              placeholder="Group Name" 
              onChange={handleChange}
             />
            <button 
              className="btn btn-sm btn-dark"
              onClick={ (event) => { 
                ChatStore.addGroup(groupName); 
                textInput.value = '';
              }}
            >
              Add
            </button>
          </div>
        </div>

        <div 
          className="invite-users mt-3"
          style={{ display: AppStore.sidePanelOpen ? 'display' : 'none' }}
        >
          <div className="chat-section-text mt-3 mb-4">
            <i className="fas fa-user mr-1 ml-3 mt-3" /> INVITE USERS
          </div>
          {
            ChatStore.users.map((member, index) => (
              <div 
                className="ml-3 mb-0 mt-0 user-input-box" 
                key={index}
                ref={(ref) => userDiv[index] = ref}
              >
                <input 
                  disabled
                  type="text" 
                  value={member.name}
                  className="user-name-input text-white p-3"
                />
                <button 
                  className="btn btn-sm btn-dark"
                  onClick={ () => {
                    ChatStore.addUser(member.img, member.name, member.title, member.status); 
                    userDiv[index].style.display = 'none';
                  }}
                >
                  Add
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </Styles>
  );
}));

export default ChatSettingsWindow;