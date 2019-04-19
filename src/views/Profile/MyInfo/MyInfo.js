import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('UserProfileStore')
@observer
class MyInfo extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
      }

      hr {
        color: #1A1817;
        margin: 0;
        padding: 0;
      }

       .profile-leftcol {
        position: absolute;
        top: 185px;
        left: 0;
        width: 220px;
        border-right: 1px solid #ccc;
        min-height: 100%;

        .wrapper {
          margin-top: 50px;

          .contact-info {
            width: 100%;
            padding: 20px;
            font-size: 14px;

            .phone, .cell-phone {
              color: #1A1817;
              padding-bottom: 5px;
            }

            .icons {
              color: #1A1817;
              display: inline;
              font-size: 18px;
              cursor: pointer;

              .icon {
                margin-right: 10px;
              }
            }
          }

          .hire-info {
            width: 100%;
            padding: 20px;

            .label {
              color: blue;
              font-size: 12.5px;
              font-weight: 400;
            }

            .date {
              color: #1A1817;
              font-size: 16.5px;
              font-weight: bold;
            }

            .length {
              color: #1A1817;
              font-size: 10.5px;
              font-weight: 200;
            }
          }

          .job-info {
            width: 100%;
            padding: 20px;

            .emp-type, .dept, .location {
              color: #1A1817;
              font-size: 14px;
            }
          }

          .management-info {
            width: 100%;
            padding: 20px;

            .label {
              color: blue;
              font-size: 12.5px;
              font-weight: 400;
            }

            .manager {
              color: #1A1817;
              font-size: 14px;

              .name {
                font-size: 16.5px;
              }
            }
          }
        }
          
      }

      .profile-rightcol {
        width: 240px;
      }
    `;

    return (
      <Styles>
        <div className="profile-leftcol">
          <div className="wrapper">
            <div className="contact-info">
              <div className="phone">
                <i className="fas fa-phone-square" /> (813) 555-5555 Ext 229
              </div>
              <div className="cell-phone">
                <i className="fas fa-mobile-alt" /> (813) 750-4621
              </div>
              <div className="icons">
                <i className="fas fa-envelope icon" />
                <i className="fab fa-linkedin icon" />
                <i className="fab fa-facebook icon" />
                <i className="fas fa-globe icon" />
              </div>
            </div>
            <hr />
            <div className="hire-info">
              <div className="label">Hire Date</div>
              <div className="date">Aug 28, 2009</div>
              <div className="length">10y - 2m - 10d</div>
            </div>
            <hr />
            <div className="job-info">
              <div className="emp-type"><i className="fas fa-user" /> Full-time</div>
              <div className="dept"><i className="fas fa-building" /> Software Development</div>
              <div className="location"><i className="fas fa-map-marker-alt" /> Tampa, FL</div>
            </div>
            <hr />
            <div className="management-info">
              <div className="label">Manager</div>
              <div className="manager">
                <div className="name">Richard Watson</div>
                <div className="title">VP, Development</div>
              
                <div className="label mt-2 mb-1">Direct Reports</div>
                <div className="person"><i className="fas fas fa-user" /> Jim Davis</div>
                <div className="person"><i className="fas fas fa-user" /> Mike Reeves</div>
                <div className="person"><i className="fas fas fa-user" /> Allen Wilson</div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="profile-rightcol">
          <div className="sub-menubar">

          </div>
        </div>
      </Styles>
    );
  };
};

export default MyInfo;