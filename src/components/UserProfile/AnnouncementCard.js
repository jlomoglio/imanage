import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('UserProfileStore')
@observer
class AnnouncementCard extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`
      .announcement-card {
        max-width: 100%;
        min-height: 100px;
        margin-right: 20px;
        margin-left: 12px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        padding: 15px;
        -webkit-box-shadow: 6px 4px 10px -2px rgba(0,0,0,0.53); 
        box-shadow: 6px 4px 10px -2px rgba(0,0,0,0.53);

        .text {
          padding-left: 15px;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          border: 2px solid #ccc;

          &::before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -0.25em;
          }

          .icon {
            font-size: 30px;
            margin: auto;
            text-align: center;
            vertical-align: middle;
          }

          .img {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            margin: auto;
            text-align: center;
            vertical-align: middle;
            margin-right: -0.25em;
          }           
        }
      }
    `;

    return (
      <Styles>
        <div className="announcement-card row">
          <div className="col-sm-1 text-dark">
            <div className="avatar">
              {
                props.avatar && <img src={props.avatar} className="img" alt="avatar" />
              }
              {
                props.icon && <i className={`${props.icon} icon`} alt="avatar" />
              }
            </div>
          </div>
          <div className="col-sm-11">
            <span className="text-dark text">{ props.text }</span>
            <br />
            <span className="time-ago text">{ props.time }</span>
          </div>
        </div>
      </Styles>
    );
  };
};

export default AnnouncementCard;