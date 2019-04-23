import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Personal from './Personal';
import PayInfo from './PayInfo';
import Benefits from './Benefits';
import TimeOff from './Timeoff';
import Files from './Files';

@inject('AppStore', 'UserProfileStore')
@observer
class MyInfo extends Component {
  render() {
    //const UserProfileStore = this.props.UserProfileStore;
    const AppStore = this.props.AppStore;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 185px;
      }

      .col-xl-3 {
        max-width: 240px !important;
        min-width: 240px !important;
      }

      .col-xl-9 {
        min-width: calc(100% - 240px) !important;
        max-width: calc(100% - 240px) !important;
        padding: 0;
      }

      .center {
        text-align: center;
      }

      hr {
        color: black;
        margin: 0;
        padding: 0;
      }

      .brd-l {
        border-left: 1px solid #ccc;
      }

      .brd-r {
        border-right: 1px solid #ccc;
      }

      .wrapper { 
        padding: 10px;
        text-align: left !important;
        margin-left: 0px;
        font-size: 14px;
 
        .contact-info-card {
          padding: 10px;
          text-align: left !important;

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

        .hire-info-card {
          padding: 10px;
          text-align: left !important;

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

        .job-info-card {
          padding: 10px;
          text-align: left !important;

          .emp-type, .dept, .location {
            color: #1A1817;
            font-size: 14px;
          }
        }

        .management-info-card {
          padding: 10px;
          text-align: left !important;

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

      .submenu-bar {
        color: #333333;

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            background-color: #fcfcfc;
            display: inline-block;
            padding-top: 8px;
            margin-right: 0px;
            margin-left: -15px;
            position: relative;
            width: 600px;
          }

          li {
            float: left;
            cursor: pointer;
            width: 100px;
           }

          li span {
            display: block;
            color: #333333;
            text-align: center;
            padding-bottom: 10px;
            padding-top: 10px;
            text-decoration: none;
            font-size: 14px;
            width: 100px;
            text-align: center;
            font-weight: 400;
          }

          li span:hover {
            color: #111111;
          }

          li:after {
            position: absolute;
            width: 100px;
            content: "";
            top: 0;
            margin-left: 0;
          }

          li.active:after {
            position: absolute;
            width: 100px;
            content: "";
            top: 0;
            margin-left: 0;
            border-top: 4px solid blue;
          }

          li:hover:after {
            border-top: 4px solid #000;
          }
      }
    `;

    return (
      <Styles>
        <div className="view-contents row">
          {/* LEFT COL */}
          <div className="col-xl-3">
            <div className="wrapper">
              {/* CONTACT INFO CARD */}
              <div className="contact-info-card">
                <div className="phone">
                  <i className="fas fa-phone pr-1" /> (813) 555-5555 Ext 229
                </div>
                <div className="cell-phone">
                  <i className="fas fa-mobile-alt pr-2" /> (813) 750-4621
                </div>
                <div className="icons">
                  <i className="fas fa-envelope icon" />
                  <i className="fab fa-linkedin icon" />
                  <i className="fab fa-facebook icon" />
                  <i className="fab fa-twitter icon" />
                  <i className="fab fa-instagram icon" />
                  <i className="fas fa-globe icon" />
                </div>
              </div>

              <hr />

              {/* HIRE INFO CARD */} 
              <div className="hire-info-card">
                <div className="label">Hire Date</div>
                <div className="date">Aug 28, 2009</div>
                <div className="length">10y - 2m - 10d</div>
              </div>

              <hr />

              {/* JOB INFO CARD */} 
              <div className="job-info-card">
                <div className="emp-type"><i className="fas fa-user pr-1" /> Full-time</div>
                <div className="dept"><i className="fas fa-building pr-1" /> Software Development</div>
                <div className="location"><i className="fas fa-map-marker-alt pr-1" /> Tampa, FL</div>
              </div>

              <hr />

              {/* MANAGEMENT INFO CARD */}
              <div className="management-info-card">
                <div className="label">Manager</div>
                <div className="manager">
                  <div className="name">Richard Watson</div>
                  <div className="title">VP Development</div>
                
                  <div className="label mt-2 mb-1">Direct Reports</div>
                  <div className="person"><i className="fas fas fa-user pr-1" /> Jim Davis</div>
                  <div className="person"><i className="fas fas fa-user pr-1" /> Mike Reeves</div>
                  <div className="person"><i className="fas fas fa-user pr-1" /> Allen Wilson</div>
                </div>
              </div>
             </div>
          </div> 

          {/* RIGHT COL */}
          <div className="col-xl-9 brd-l pl-3">
            {/* PROFILE SUB MENU */}
            <div className="submenu-bar">
              <ul>
                <li 
                  className={AppStore.showPersonal ? 'active' : ''}
                  onClick={() => AppStore.setSubSubView('User Profile', 'My Info', 'Personal') 
                }>
                  <span>Personal</span>
                </li>
                <li 
                  className={AppStore.showPayInfo ? 'active' : ''}
                  onClick={() => AppStore.setSubSubView('User Profile', 'My Info', 'Pay Info') 
                }>
                  <span>Pay Info</span>
                </li>
                <li 
                  className={AppStore.showBenefits ? 'active' : ''}
                  onClick={() => AppStore.setSubSubView('User Profile', 'My Info', 'Benefits') 
                }>
                  <span>Benefits</span>
                </li>
                <li 
                  className={AppStore.showTimeOff ? 'active' : ''}
                  onClick={() => AppStore.setSubSubView('User Profile', 'My Info', 'Time Off') 
                }>
                  <span>Time Off</span>
                </li>
                <li
                  className={AppStore.showFiles ? 'active' : ''} 
                  onClick={() => AppStore.setSubSubView('User Profile', 'My Info', 'Files') 
                }>
                  <span>Files</span>
                </li>
              </ul>
            </div>

            <Personal show={AppStore.showPersonal} />
            <PayInfo show={AppStore.showPayInfo} />
            <Benefits show={AppStore.showBenefits} />
            <TimeOff show={AppStore.showTimeOff} />
            <Files show={AppStore.showFiles} />

          </div>
        </div>
      </Styles>
    );
  };
};

export default MyInfo;