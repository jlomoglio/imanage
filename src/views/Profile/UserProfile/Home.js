import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import AnnouncementCard from '../../../components/UserProfile/AnnouncementCard';
import m1 from '../../../assets/profile-avatar/m1.png';
import m2 from '../../../assets/profile-avatar/m2.png';
import m3 from '../../../assets/profile-avatar/m3.png';
import m4 from '../../../assets/profile-avatar/m4.png';
import m5 from '../../../assets/profile-avatar/m5.png';
import m6 from '../../../assets/profile-avatar/m6.png';
import m7 from '../../../assets/profile-avatar/m7.png';
import m8 from '../../../assets/profile-avatar/m8.png';
import f1 from '../../../assets/profile-avatar/f1.png';
import f2 from '../../../assets/profile-avatar/f2.png';
import f3 from '../../../assets/profile-avatar/f3.png';
import f4 from '../../../assets/profile-avatar/f4.png';

@inject('UserProfileStore')
@observer
class Home extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 180px;
      }

      .center {
        text-align: center;
      }

      .align-right {
        text-align: right;
      }

      .time-ago {
        font-size: 12.5px;
      }

      hr {
        color: #1A1817;
        margin: 0;
        padding: 0;
      }

      .brd-r {
        border-right: 1px solid #ccc;
      }

      .brd-l {
        border-left: 1px solid #ccc;
      }

      .bold {
        font-weight: 600;
      }

      .sm-text {
        font-size: 12.5px;
      }

      .md-text {
        font-size: 14px;
      }

      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 8px;
        border: 2px solid #ccc;
      }

    
      .icon-celeabrate {
        font-size: 35px;
        margin-right: 10px;
        margin-top: 10px;
        float: left;
      }


      .header {
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 25px;
      
        .colleft {
          float: left;
        }
        
        .colright {
          float: right;
        }
      }

      .timeoff-card {
        margin-top: 36px;
        padding: 10px;
        text-align: center;
        border: 1px solid #ccc;
        margin-left: 10px;
      }

      .whos-out-card, .celebrating-card {
        margin-top: 36px;
        padding: 10px;
        text-align: left !important;
        border: 1px solid #ccc;
        margin-left: 10px;
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
    `;

    return (
      <Styles bg={UserProfileStore.bg}>
        <div className="view-contents row">
          <div className="col-sm-4">
            <div className="timeoff-card row">
              <div className="col-sm-6">
                <h5>Vacation</h5>
                <hr />
                <h2 className="mt-2"><i className="fas fa-plane-departure" /> 22.7</h2>
                <span className="md-text bold">HOURS AVAILABLE</span>
               </div>
              <div className="col-sm-6 brd-l">
                <h5>Sick Leave</h5>
                <hr />
                <h2 className="mt-2"><i className="fas fa-band-aid" /></h2>
                <span className="md-text bold">4 DAYS USED (YTD)</span>
              </div>
              <button className="btn btn-dark w-100 mt-3"><i className="far fa-calendar-times" /> Request Time Off</button>
            </div>

            <div className="whos-out-card row mt-3">
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

            <div className="celebrating-card row col-sm-12">
              <h5 className="w-100">Celebrating This Month (5)</h5>
              <div className="3-col-card row">
                <div className="col-sm-2">
                  <img src={m1} className="avatar" alt="avatar" />
                </div>
                <div className="col-sm-8">
                  <div className="pl-3">
                    <h6 className="mb-0 mt-2">Antonio James</h6>
                    <span className="sm-text">April 12th - Happy Birthday!</span>
                  </div>
                  </div>
                <div className="col-sm-2">
                  <i className="fas fa-birthday-cake icon-celeabrate" />
                </div>
              </div>
              <hr />
              <div className="3-col-card row">
                <div className="col-sm-2">
                  <img src={f3} className="avatar" alt="avatar" />
                </div>
                <div className="col-sm-8">
                  <div className="pl-3">
                    <h6 className="mb-0 mt-2">Jane Smith</h6>
                    <span className="sm-text">April 19th - Happy Birthday!</span>
                  </div>
                  </div>
                <div className="col-sm-2">
                  <i className="fas fa-birthday-cake icon-celeabrate" />
                </div>
              </div>
              <hr />
              <div className="3-col-card row">
                <div className="col-sm-2">
                  <img src={m3} className="avatar" alt="avatar" />
                </div>
                <div className="col-sm-8">
                  <div className="pl-3">
                    <h6 className="mb-0 mt-2">Jim Blanchard</h6>
                    <span className="sm-text">10 yr Employee Anniversary!</span>
                  </div>
                  </div>
                <div className="col-sm-2">
                  <i className="fas fa-birthday-cake icon-celeabrate" />
                </div>
              </div>
              <hr />
              <div className="3-col-card row">
                <div className="col-sm-2">
                  <img src={f4} className="avatar" alt="avatar" />
                </div>
                <div className="col-sm-8">
                  <div className="pl-3">
                    <h6 className="mb-0 mt-2">Amy Jones</h6>
                    <span className="sm-text">30 yr Employee Anniversary!</span>
                  </div>
                  </div>
                <div className="col-sm-2">
                  <i className="fas fa-birthday-cake icon-celeabrate" />
                </div>
              </div>
              <hr />
              <div className="3-col-card row">
                <div className="col-sm-2">
                  <img src={m4} className="avatar" alt="avatar" />
                </div>
                <div className="col-sm-8">
                  <div className="pl-3">
                    <h6 className="mb-0 mt-2">Mike Reed</h6>
                    <span className="sm-text">April 11th - Happy Birthday!</span>
                  </div>
                  </div>
                <div className="col-sm-2">
                  <i className="fas fa-birthday-cake icon-celeabrate" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="header">
              <div className="colleft text-dark"><strong>WHAT'S HAPPENING AT YOUR COMPANY</strong></div>
              <div className="colright text-dark align-right pr-2">Announcements</div>
            </div>
            {
              UserProfileStore.announcements.map((ann, index) => (
                <AnnouncementCard avatar={ann.avatar} icon={ann.icon} text={ann.text} time={ann.time} />
              ))  
            }

            
          </div>
        </div>

      </Styles>
    );
  };
};

export default Home;