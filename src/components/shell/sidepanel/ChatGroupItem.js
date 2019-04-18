import React from 'react';

import styled from 'styled-components';

const ChatGroupItem = (props) => {

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
      <div className="group-item">
        <i className="fab fa-slack-hash mr-3" /> 
        <span className="group-item-text">{ props.label }</span>
      </div>
    </Styles>
  );
};

export default ChatGroupItem;