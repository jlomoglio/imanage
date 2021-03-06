import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const ChatUserMessage = inject('ChatStore')(observer(props => {
   
  const Styles = styled.div`
    .user-details-wrapper {
      display: block;
      margin: 8px;
      padding: 10px;
      border-radius: 3px;

      .user-profile {
        float: right;
        border-radius: 100px 100px 100px 100px;
        height: 35px;
        overflow: hidden;
        width: 35px;
        margin-left: 13px;
        margin-right: -15px;
      }

      .user-details {
        float: right;

        .bubble {
          position: relative;
          width: 185px;
          min-height: 40px;
          padding: 0;
          background: #e5e9ec;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          color: #22262e;
          padding: 10px;
          line-height: 18px;
          font-size: 12.5px;
        }

        .bubble:after {
          content: '';
          position: absolute;
          border-style: solid;
          border-width: 9px 7px 9px 0px;
          border-color: transparent #e5e9ec;
          display: block;
          width: 0;
          z-index: 1;
          right: -7px;
          top: 12px;
          transform: rotate(180deg);
        }
      }
    }
  `;

  return (
    <Styles>
      <div className="user-details-wrapper ">
        <div className="user-profile">
          <img src={props.img} alt="" width="35" height="35" />
        </div>
        <div className="user-details">
          <div className="bubble">
            { props.msg }
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </Styles>
  ) 
}));

export default ChatUserMessage;