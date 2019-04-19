import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('UserProfileStore')
@observer
class AvatarSelector extends Component { 
  componentDidUpdate() {
    this.refs.avatarSelector.scrollTop = this.props.UserProfileStore.avatarSelectorScrollPosition;
  }

  render() {
    const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div`
      .avatar-selector {
        overflow-y: auto;
        overflow-x: hidden;
        position: absolute;
        top: 25px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        padding-right: 10px;

        .scrollbar {
          margin-left: 30px;
          float: left;
          height: 300px;
          width: 65px;
          background: #F5F5F5;
          overflow-y: scroll;
          margin-bottom: 25px;
        }

        &::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
          border-radius: 10px;
          background-color: #F5F5F5;
        }

        &::-webkit-scrollbar {
          width: 12px;
          background-color: #F5F5F5;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          background-color: #555;
        }

        .overlay {
          position: absolute;
          top: 30%;
          bottom: 30%;
          left: 30%;
          right: 30%;
          height: 50%;
          width: 50%;
          opacity: 1;
          transition: .3s ease;
          background-color: green;
          border-radius: 50%;

          .icon {
            color: white;
            font-size: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;
          }
        }

        .avatar-img {
          width: 80%;
          height: auto;
          margin: 5px;
          z-index: 1;
          cursor: pointer;
          border: 2px solid white;

          &.selected {
            border: 2px solid yellow;
          }
        }
      }
    `;


    return (
      <Styles>
        <div className="avatar-selector border-1 scrollbar" ref="avatarSelector">
          <div className="row">
          {
            UserProfileStore.row1.map((img, index) => (
              <div 
                key={index}
                className="col-3"
                onClick={() => UserProfileStore.toggleAvatarSelected(img.toString(), this.refs.avatarSelector.scrollTop)}
              >
                <img
                  key={img.toString()}
                  src={img}
                  alt="avatar" 
                  className={`avatar-img ${UserProfileStore.selectedAvatar === img ? 'selected' : ''}`} 
                />
              </div>
            ))
          }
          </div>
          <div className="row">
          {
              UserProfileStore.row2.map((img, index) => (
                <div 
                  key={index}
                  className="col-3"
                  onClick={() => UserProfileStore.toggleAvatarSelected(img.toString())}
                >
                  <img 
                    key={img.toString()}
                    src={img} 
                    alt="avatar" 
                    className={`avatar-img ${UserProfileStore.selectedAvatar === img ? 'selected' : ''}`}
                  />
                </div>
              ))
            }
          </div>
          <div className="row">
          {
              UserProfileStore.row3.map((img, index) => (
                <div 
                  key={index}
                  className="col-3"
                  onClick={() => UserProfileStore.toggleAvatarSelected(img.toString())}
                >
                  <img
                    key={img.toString()}
                    src={img} 
                    alt="avatar" 
                    className={`avatar-img ${UserProfileStore.selectedAvatar === img ? 'selected' : ''}`}
                  />
                </div>
              ))
            }
          </div>
          <div className="row">
          {
              UserProfileStore.row4.map((img, index) => (
                <div 
                  key={index}
                  className="col-3"
                  onClick={() => UserProfileStore.toggleAvatarSelected(img.toString())}
                >
                  <img 
                    key={img.toString()}
                    src={img} 
                    alt="avatar" 
                    className={`avatar-img ${UserProfileStore.selectedAvatar === img ? 'selected' : ''}`}
                  />
                </div>
              ))
            }
          </div>
          <div className="row">
          {
              UserProfileStore.row5.map((img, index) => (
                <div 
                  key={index}
                  className="col-3"
                  onClick={() => UserProfileStore.toggleAvatarSelected(img.toString())}
                >
                  <img 
                    key={img.toString()}
                    src={img} 
                    alt="avatar" 
                    className={`avatar-img ${UserProfileStore.selectedAvatar === img ? 'selected' : ''}`}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </Styles>
    );
  };
};

export default AvatarSelector;