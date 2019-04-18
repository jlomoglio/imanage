import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';

const ChatGroupItem = inject('ChatStore')(observer(props => {

  const ChatStore = props.ChatStore;

  const Styles = styled.div`
    .view-contents {
      padding: 20px;
    }

    .group-item {
      display: inline-block;
      width: 100%;
      padding-top: 5px;
      padding-left: 15px;
      padding-right: 35px;
      padding-bottom: 5px;
      cursor: pointer;
      color: #ccc;

      &:hover {
        color: white;
      }

      .group-item-text {
        font-size: 13.5px;
        font-weight: 600;
        letter-spacing: .2px;
      }

      .group-status-offline {
        color: red;
        font-size: 10.5px;
      }

      .group-status-online {
        color: green;
        font-size: 10.5px;
      }
    }
  `;

  return (
    <Styles>
      <div 
        className="group-item pull-left" 
        onClick={() => ChatStore.selectChatGroup(props.label)}
      >
        <i className="fab fa-slack-hash mr-3" /> 
        <span className="group-item-text">{ props.label }</span>
      </div>
    </Styles>
  );
}));

export default ChatGroupItem;