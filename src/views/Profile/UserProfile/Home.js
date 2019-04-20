import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import AnnouncementCard from '../../../components/UserProfile/AnnouncementCard';
import CelebrateCard from '../../../components/UserProfile/CelebrateCard';
import TimeoffCard from '../../../components/UserProfile/TimeoffCard';
import WhosOutCard from '../../../components/UserProfile/WhosOutCard';
import WelcomeCard from '../../../components/UserProfile/WelcomeCard';


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

      .icon-lg {
        font-size: 55px;
        margin: 20px;
      }

      .announcements {
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
    `;

    return (
      <Styles>
        <div className="view-contents row">
          {/* LEFT COL */}
          <div className="col-md-12 order-2 order-md-2 col-xl-4">
            <TimeoffCard />
            <WhosOutCard />
            <CelebrateCard />
          </div>

          {/* RIGHT COL */}
          <div className="col-md-12 order-1 order-md-1 col-xl-8">
            
            {/* WELCOME CARD */}
            <div className="row mr-1 ml-2">
              <div className="col-sm-12">
                <WelcomeCard />
              </div>
            </div>

            {/* ANNOUNCEMENTS */}
            <div className="row mr-3">
              <div className="col-sm-12">
                <div className="announcements ml-3">
                  <div className="colleft text-dark"><
                    strong>WHAT'S HAPPENING AT YOUR COMPANY</strong>
                  </div>
                  <div className="colright text-dark align-right">
                    Announcements
                  </div>
                </div>
                {
                  UserProfileStore.announcements.map((ann, index) => (
                    <AnnouncementCard 
                      key={index} 
                      avatar={ann.avatar} 
                      icon={ann.icon} 
                      text={ann.text} 
                      time={ann.time} 
                    />
                  ))  
                }
              </div>
            </div>  
          </div>
        </div>
      </Styles>
    );
  };
};

export default Home;