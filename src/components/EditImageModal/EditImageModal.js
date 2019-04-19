import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import AvatarSelector from './AvatarSelector';
import BackgroundSelector from './BackgroundSelector';

const EditProfileModal = inject('UserProfileStore')(observer(props => {
  
  const UserProfileStore = props.UserProfileStore;
  
  const Styles = styled.div`
    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .border-1 {
      border: 1px solid #ccc;
    }

     .ui-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      z-index: 50000 !important;

      .ui-modal-dialog {
        position: fixed;
        top: 5%;
        left: 12%;
        right: 10%;
        bottom: 5%;
        background: white;
        border-radius: 10px;
        z-index: 60000 !important;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
      }

      .ui-modal-content {
        padding: 20px;

        .ui-modal-header {

          .ui-modal-title {

          }

        }

        .ui-modal-body {
          position: absolute;
          top: 60px;
          left: 20px;
          right: 20px;
          bottom: 70px;

          .title {
            font-weight: 600;
            letter-spacing: .2px;
          }
        }

        .ui-modal-footer {
          position: absolute;
          bottom: 20px;
          right: 20px;
        }
      }
    }
  `;


  return (
    <Styles>
      <div 
        className="ui-modal" 
        style={{ display: UserProfileStore.showEditBillboardModal ? 'block' : 'none' }}
      >
        <div className="ui-modal-dialog">
          <div className="ui-modal-content">
            <div className="ui-modal-header">
              <h5 className="ui-modal-title" ref="exampleModalScrollableTitle">Edit Profile Images</h5>
            </div>
            <div className="ui-modal-body row">
              <div className="col-5">
                <span className="title">Select an Avatar</span>
                <AvatarSelector />
              </div>
              
              <div className="col-7">
                <span className="title">Select a Background Image</span>
                <BackgroundSelector />
              </div>
            </div>
            <div className="ui-modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary mr-2"
                onClick={() => UserProfileStore.closeEditBillBoardModal()}
              >
                Close
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => UserProfileStore.saveProfileImages(
                  UserProfileStore.selectedAvatar,
                  UserProfileStore.selectedBg
                )}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
  
}));

export default EditProfileModal;