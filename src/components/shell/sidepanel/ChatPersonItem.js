import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';


const ChatPersonItem = inject('ChatStore')(observer(props => {

  const ChatStore = props.ChatStore;

  const Styles = styled.div`
    .view-contents {
      padding: 20px;
    }

    .person-item {
        display: inline-block;
        width: 100%;
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
        cursor: pointer;

        &:hover {
          background: #252526;
        }

        .photo {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-left: 10px;
          margin-top: 10px;
        }

        .person-item-name {
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: .2px;
          color: white;
        }

        .person-item-title {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: .2px;
          color: #ccc;
        }

        .num-msg {
          margin-right: 45px;
          margin-top: 14px;
          float: left;
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
        className="person-item" 
        onClick={() => ChatStore.selectMember(props.name, props.status, props.img)}
      >
        <div style={{ width: '55px', float: 'left' }}>
          <img src={props.img} className="photo" alt="Avatar" />
        </div>
        <div style={{ width: '170px', float: 'left' }}>
          <div className="person-item-name mt-1">{ props.name }</div> 
          <div className="person-item-title">{ props.title }</div>
        </div>
        <div style={{ width: '45px', float: 'left' }}>
          <Badge 
            variant="danger" 
            className="num-msg" 
            style={{ display: props.numMsg !== '' ? 'display' : 'none' }}
          >
            { props.numMsg }
          </Badge>
          { props.numMsg === '' && '&nbsp;' }
        </div>
        <div style={{ width: '15px', float: 'left' }}>
        <i 
          className={`
            ${props.status === 'online' ? 'group-status-online' : 'group-status-offline'} 
            fas fa-circle mr-3 mt-3`
          } 
        />
        </div>
      </div>
    </Styles>
  )
}));

export default ChatPersonItem;