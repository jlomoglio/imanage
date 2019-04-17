import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import profileImg from '../../../assets/Me_Vector.jpg';

@inject('AppStore')
@observer
class Profile extends Component {
  render() {

    const AppStore = this.props.AppStore;

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
        margin: 0!important;
        border-bottom: 1px solid #525151;
        cursor: pointer;
      }

      .photo {
        width: 50px;
        height: 50px;
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

      .linkItem {
        cursor: pointer;
        color: white;
        font-size: .9em;
        padding: 10px;
      }
    `;

    return (
      <Styles>
        <div 
          className="profile-box"
          onClick={() => AppStore.toggleProfileCollapse()}
        >
          <div className="row">
            <div className="col-sm-4">
              <img src={profileImg} className="photo" alt="Avatar" />
            </div>
            <div className="col-sm-8 pt-2">
              <div className="name">Joe LoMoglio</div>
              <div className="title">Front End Developer</div>
            </div>
          </div>
        </div>

        <div style={{ 
          display: AppStore.profileMenuOpen ? 'block' : 'none',
          borderBottom: AppStore.profileMenuOpen ? '1px solid #2b2b2b' : ''
        }}>
          <div className="linkItem" onClick={() => AppStore.setView('User Profile')}>
            <i className="fas fa-user mr-2" /> User Profile
          </div>
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