import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ChatGroupItem from './ChatGroupItem';
import ChatPersonItem from './ChatPersonItem';

const ChatPersonList = inject('ChatStore')(observer(props => {

  const ChatStore = props.ChatStore;

  const Styles = styled.div`
    .chat-section-text {
      color: #808285;
      font-size: 10.5px;
      font-weight: 600;
      letter-spacing: .2px;
      padding-left: 10px;
      padding-right: 31px;
      text-transform: uppercase;
    }
  `;

  return (
    <Styles>
      <div style={{ 
        display: ChatStore.showChatList ? 'display' : 'none'
      }}>
        <div className="chat-section-text">CHAT GROUPS</div>
        {
          ChatStore.chatGroups.map((group, index) => (
            <ChatGroupItem key={index} label={group} />
          ))
        }
        
        <div className="chat-section-text mt-3 mb-3">DIRECT MESSAGES</div>
        {
          ChatStore.teamMembers.map((member, index) => (
            <ChatPersonItem 
              key={index}
              img={member.img} 
              name={member.name}
              title={member.title} 
              status={member.status}
              numMsg={member.numMsg}
            />
          ))
        }
      </div>
    </Styles>
  );
}));

export default ChatPersonList;