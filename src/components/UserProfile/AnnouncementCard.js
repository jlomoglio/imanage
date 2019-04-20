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
        margin-left: 20px;
        margin-bottom: 15px;
        border: 1px solid #ccc;

        .time-ago {
          font-size: 12.5px;
        }


        .col-sm-2 {
          max-width: 80px !important;
        }

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

        .border {
          border: 1px solid black;
        }

        .center {
          text-align: center;
        }
      }
    `;

    return (
      <Styles>
        <div className="announcement-card">
          <div className="row">
            <div className="col-sm-2 text-dark">
              <div className="avatar">
                {
                  props.avatar && <img src={props.avatar} className="img" alt="avatar" />
                }
                {
                  props.icon && <i className={`${props.icon} icon `} alt="avatar" />
                }
              </div>
            </div>
            <div className="col-sm-10 pt-2">
              <p className="text-dark text m-0 p-0">
                { props.text }
                <br />
                { props.time }
              </p>
            </div>
          </div>
        </div>
      </Styles>
    );
  };
};

export default AnnouncementCard;