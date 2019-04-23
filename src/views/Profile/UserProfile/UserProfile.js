import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Home from './Home';
import MyInfo from './MyInfo/MyInfo';
import JobOpenings from './JobOpenings';

@inject('AppStore', 'UserProfileStore')
@observer
class UserProfile extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const AppStore = this.props.AppStore;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;

        hr {
          color: #1A1817;
          margin: 0;
          padding: 0;
        }

        .profile-menu {
          height: 30px;
          color: white;
          position: fixed;
          top: 90px;
          min-width: 100%;
          z-index: 10000;

            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              overflow: hidden;
              background-color: #333333;
            }

            li {
              float: left;
              cursor: pointer;
            }

            li span {
              display: block;
              color: #ccc;
              text-align: center;
              padding: 16px;
              text-decoration: none;
            }

            li span:hover {
              color: white;
            }

            li span.active {
              color: white;
              font-weight: bold;
            }
        }

        .profile-billboard {
          position: absolute;
          top: 35px;
          left: 0;
          right: 0;
          min-width: 100%;
          height: 150px;
          background: url(${props => props.bg});
          padding-right: 15px;
        

          .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 2px solid #000;
            z-index: 5;
            position: absolute;
            top: 30px;
            left: 45px;
          }

          .profile-billboard-info {
            width: 500px;
            height: 200px;
            position: absolute;
            top: 55px;
            left: 160px;
            color: white;
          }

          .row {
            margin-right: 0 !important;
            margin-left: 0 !important;
          }

          .action-buttons {
            width: 70px;
            height: 30px;
            border: 1px solid #ccc;
            position: absolute;
            bottom: 10px;
            right: 20px;
            color: #ccc;
            font-size: 12px;
            padding: 8px;
            text-align: center;
            cursor: pointer;

            &:hover {
              color: white;
              border: 1px solid white;
            }
          }
        }
      }
    `;

    return (
      <Styles bg={UserProfileStore.bg}>
        <div className="view-contents">
          
          {/* BILLBOARD */}
          <div className="profile-billboard row">
            <div className="col-sm-12">
              <img src={UserProfileStore.avatar} className="avatar" alt="avatar" />
              <div className="profile-billboard-info">
                <h2>Joe LoMoglio</h2>
                <h5 className="mt-n2">Front End Developer</h5>
              </div>
              <div 
                className="action-buttons pt-1" 
                onClick={() => UserProfileStore.showEditBillBoardModal()}
              >
                <i className="far fa-edit mr-1" /><span>Edit</span>
              </div>
            </div>
          </div>

          {/* PROFILE MENU (Keep below Billboard) */}
          <div className="profile-menu">
            <ul>
              <li onClick={() => AppStore.setSubView('User Profile', 'Home') }>
                <span className={`${AppStore.appSubView === 'Home' ? 'active' : '' }`}>Home</span>
              </li>
              <li onClick={() => AppStore.setSubView('User Profile', 'My Info') }>
                <span className={`${AppStore.appSubView === 'My Info' ? 'active' : ''}`}>My Info</span>
              </li>
              <li onClick={() => AppStore.setSubView('User Profile', 'Job Openings') }>
                <span className={`${AppStore.appSubView === 'Job Openings' ? 'active' : ''}`}>Job Openings</span>
              </li>
            </ul>
          </div>
        </div>

        { AppStore.appSubView === 'Home' && <Home /> }
        { AppStore.appSubView === 'My Info' && <MyInfo /> }
        { AppStore.appSubView === 'Job Openings' && <JobOpenings />} 
          
      </Styles>
    );
  };
};

export default UserProfile;