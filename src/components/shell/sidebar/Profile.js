import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('AppStore', 'UserProfileStore')
@observer
class Profile extends Component {
  render() {

    const AppStore = this.props.AppStore;
    const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div`
      .profile-box {
        padding: 10px;
        color: white;
        border: solid transparent;
        border-width: 1px 0;
        box-shadow: 
          inset 1px 1px 0 rgba(0,0,0,.1), 
          inset 0 -1px 0 rgba(0,0,0,.07);
        width: 100%;
        margin: 0 !important;
        border-bottom: 1px solid #525151;
        cursor: pointer;
      }

      .photo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .name {
        font-size: .8em;
        color: white;
      }

      .title {
        font-size: .6em;
        color: white;
      }

      .status {
        font-size: .6em;
        color: white;
      }

      .linkItem {
        cursor: pointer;
        color: #ccc;
        font-size: .9em;
        padding: 10px;

        &:hover {
          color: white;
        }
      }

      .available.fa-stack[data-count]:after{
        position: absolute;
        right: -40%;
        top: 95%;
        content: '';
        font-size: 9px;
        padding: 1em;
        border-radius: 999px;
        line-height: .75em;
        text-align: center;
        min-width: 2em;
        font-weight: bold;
        margin-left: 5px;
        background: green !important;
      }

      .away.fa-stack[data-count]:after{
        position: absolute;
        right: -40%;
        top: 95%;
        content: '';
        font-size: 9.5px;
        padding: 1em;
        border-radius: 999px;
        line-height: .75em;
        text-align: center;
        min-width: 2em;
        font-weight: bold;
        margin-left: 5px;
        background: orange !important;
      }

      .inactive.fa-stack[data-count]:after{
        position: absolute;
        right: -40%;
        top: 95%;
        content: '';
        font-size: 9.5px;
        padding: 1em;
        border-radius: 999px;
        line-height: .75em;
        text-align: center;
        min-width: 2em;
        font-weight: bold;
        margin-left: 5px;
        background: grey !important;
      }

      .offline.fa-stack[data-count]:after{
        position: absolute;
        right: -40%;
        top: 95%;
        content: '';
        font-size: 9.5px;
        padding: 1em;
        border-radius: 999px;
        line-height: .75em;
        text-align: center;
        min-width: 2em;
        font-weight: bold;
        margin-left: 5px;
        background: red !important;
      }
    `;

    return (
      <Styles>
        <div 
          className="profile-box pt-4"
          onClick={() => AppStore.toggleProfileCollapse()}
        >
          <div className="row">
            <div className="col-sm-4">
            <span 
              className="fa-stack fa-1x has-badge available" 
              data-count="0"
              onClick={() => AppStore.toggleSidePanelCollapse()}
            >
              <i className="fas fa-circle fa-stack-2x" />
              <img src={UserProfileStore.avatar} className="photo fa-stack-1x" alt="Avatar" />
            </span>
            </div>
            <div className="col-sm-8 pt-1">
              <div className="name">Joe LoMoglio</div>
              <div className="title">Front End Developer</div>
              <div className="status">Available</div>
            </div>
          </div>
        </div>

        <div style={{ 
          display: AppStore.profileMenuOpen ? 'block' : 'none',
          borderBottom: AppStore.profileMenuOpen ? '1px solid #2b2b2b' : ''
        }}>
          <div className="linkItem" onClick={() => AppStore.setSubSubView('User Profile', 'Home', 'Personal')}>
            <i className="fas fa-user mr-2" /> User Profile
          </div>
          {/* <div className="linkItem" onClick={() => AppStore.setStatus()}>
            <i className="fas fa-user mr-2" /> Set Status
          </div> */}
          <div className="linkItem" onClick={() => AppStore.setView('Settings')}>
            <i className="fas fa-cog mr-2" /> Settings
          </div>
          <div className="linkItem" onClick={() => AppStore.setView('Help')}>
            <i className="fas fa-question-circle mr-2" /> Help
          </div>
          <div className="linkItem" onClick={() => AppStore.setView('Logout')}>
            <i className="fas fa-sign-out-alt mr-2" /> Logout
          </div>
        </div>
      </Styles>
    );
  }
}

export default Profile;