import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import m1 from '../../assets/profile-avatar/m1.png';
import m2 from '../../assets/profile-avatar/m2.png';
import m3 from '../../assets/profile-avatar/m3.png';
import m6 from '../../assets/profile-avatar/m6.png';
import m7 from '../../assets/profile-avatar/m7.png';
import m8 from '../../assets/profile-avatar/m8.png';
import f1 from '../../assets/profile-avatar/f1.png';
import f3 from '../../assets/profile-avatar/f3.png';

@inject('UserProfileStore')
@observer
class WhosOutCard extends Component {
  componentDidMount() {
    let whosOutCardWidth = this.elDiv.offsetWidth;
    this.props.UserProfileStore.whosOutCardWidth = this.elDiv.offsetWidth;
  }

  render() {
    const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div`
      .whos-out-card {
        margin-top: 16px;
        padding: 10px;
        text-align: left !important;
        border: 1px solid #ccc;
        margin-right: 10px;
      }

      .avatar-row {
        width: 100%;

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 8px;
          border: 2px solid #ccc;
        }
      }

      .brd-l {
        border-left: 1px solid #ccc;
      }

      .bold {
        font-weight: 600;
      }

      .md-text {
        font-size: 14px;
      }
    `;

    let elDiv;

    return (
      <Styles>
        <div 
          className={`whos-out-card row mr-4
            ${
              UserProfileStore.whosOutCardWidth > 280 && 
              UserProfileStore.whosOutCardWidth < 600 ? 'ml-3' : ''
            }
          `} 
          ref={el => this.elDiv = el}
        >
          <div className="row">
            <div className="col-sm-12">
              <h5 className="">Who's Out</h5>
              <span className="sm-text bold">TODAY (3)</span>
              <br />
              <div className="avatar-row mt-3 mb-3">
                <img src={f1} className="avatar" />
                <img src={m1} className="avatar" />
                <img src={m3} className="avatar" />
              </div>

              <span className="sm-text bold">TOMORROW (8)</span>
              <br />
              <div className="avatar-row mt-3">
                <img src={m1} className="avatar" />
                <img src={m2} className="avatar" />
                <img src={m3} className="avatar" />
                <img src={f1} className="avatar" />
                <img src={f3} className="avatar" />
                <img src={m6} className="avatar" />
                <img src={m7} className="avatar" />
                <img src={m8} className="avatar" />
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  };
};

export default WhosOutCard;