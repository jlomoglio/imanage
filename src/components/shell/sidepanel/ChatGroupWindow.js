import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ChatPersonMessage from './ChatPersonMessage';

const ChatGroupWindow = inject('ChatStore')(observer(props => {

  const ChatStore = props.ChatStore;

  const Styles = styled.div`
    .pull-right {
      float: right;
    }

    .status-offline {
      color: red;
      font-size: 10.5px;
    }

    .status-online {
      color: green;
      font-size: 10.5px;
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
      top: 40px;
      bottom: 40px;
      width: 286px;
      overflow-y: scroll;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      ::-webkit-scrollbar { 
          width: 0 !important 
        }

      .timestamp {
        text-align: center;
        color: #ccc;
        font-size: 12.5px;
        width: 100%;
      }
    }

    .chat-text-field {
      position: fixed;
      bottom: -10px;
      width: 286px;
      height: 37px;
      font-size: 14px;
      padding: 5px;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box;    /* Firefox, other Gecko */
      box-sizing: border-box;         /* Opera/IE 8+ */
    }
  `;


  return (
    <Styles>
      <div style={{ display: ChatStore.showGroupChatScreen ? 'display' : 'none', marginLeft: '-10px' }}>
        <div className="chat-section-text">
          <i className="fab fa-slack-hash mr-1 ml-3 mt-3" />
          { ChatStore.currentChatGroup }

          <i 
            className="far fa-times-circle pull-right close"
            onClick={() => ChatStore.closeChatWindow()}
          />
        </div>

        <div className="chat-window ml-1 mr-2">
          {
            ChatStore.currentChatGroup === 'General' &&
            ChatStore.groupMessagesGeneral.map((msg, index) => (
              <React.Fragment>
                <div 
                  className="timestamp" 
                  style={{ display: index === 0 ? 'block' : 'none' }}
                  key={`${index}_${Math.random()}`}
                >
                  <span>Today 11:30 am</span>
                </div>
                <ChatPersonMessage
                  msg={msg.msg} 
                  img={msg.image}
                  key={`${index}_${Math.random()}_${Math.random()}`}
                />
              </React.Fragment>
            ))
          }
          {
            ChatStore.currentChatGroup === 'Sales' &&
            ChatStore.groupMessagesSales.map((msg, index) => (
              <React.Fragment>
                <div 
                  className="timestamp" 
                  style={{ display: index === 0 ? 'block' : 'none' }}
                  key={`${index}_${Math.random()}`}
                >
                  <span>Today 2:30 pm</span>
                </div>
                <ChatPersonMessage
                  msg={msg.msg} 
                  img={msg.image}
                  key={`${index}_${Math.random()}_${Math.random()}`}
                />
              </React.Fragment>
            ))
          }
          {
            ChatStore.currentChatGroup === 'Development' &&
            ChatStore.groupMessagesDevelopment.map((msg, index) => (
              <React.Fragment>
                <div 
                  className="timestamp" 
                  style={{ display: index === 0 ? 'block' : 'none' }}
                  key={`${index}_${Math.random()}`}
                >
                  <span>Today 3:30 pm</span>
                </div>
                <ChatPersonMessage
                  msg={msg.msg} 
                  img={msg.image}
                  key={`${index}_${Math.random()}_${Math.random()}`}
                />
              </React.Fragment>
            ))
          }
        </div>

        <input 
          className="chat-text-field ml-3 mr-2 mb-3" 
          type="text" 
          placeholder="Type your message"
        />
      </div>
    </Styles>
  );
}));

export default ChatGroupWindow;