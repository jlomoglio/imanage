import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('UserProfileStore')
@observer
class WelcomeCard extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`
      .welcome-card {
        padding: 10px;
        margin-top: 26px;
        /* margin-right: 20px; */
        border: 1px solid #ccc;

        .welcome-header {
          padding: 15px;
        }
      }

      .center {
        text-align: center;
      }
    `;

    return (
      <Styles>
        <div className="welcome-card mr-2">
          <div className="row">
            <div className="col-sm-12">
              <div className="welcome-header center">
                <h2>Welcome, Joe LoMoglio</h2>
                <p>
                  You're looking at iManage, your new tool for work. Here's a quick look 
                  at some of the things you can do here in iManage.
                </p>
                <div className="row">
                  <div className="col-sm-4 center">
                    <i className="far fa-calendar-times icon-lg" />
                    <h6>Request Time Off</h6>
                    <p>Request time off and check your balances.</p>
                  </div>
                  <div className="col-sm-4 center brd-l">
                    <i className="far fa-id-card icon-lg" />
                    <h6>Company Directory</h6>
                    <p>Search for coworkers and their contact info.</p>
                  </div>
                  <div className="col-sm-4 center brd-l">
                    <i className="fas fa-heartbeat icon-lg" />
                    <h6>Benefits</h6>
                    <p>See which company benefits you are enrolled in</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4 center">
                    <i className="fas fa-graduation-cap icon-lg" />
                    <h6>Training</h6>
                    <p>Stay on top of your trainings and certifications.</p>
                  </div>
                  <div className="col-sm-4 center brd-l">
                    <i className="fas fa-bullseye icon-lg" />
                    <h6>Goals</h6>
                    <p>Create, track and collaborate on your goals</p>
                  </div>
                  <div className="col-sm-4 center brd-l">
                    <i className="fas fa-mobile-alt icon-lg" />
                    <h6>Mobile Apps</h6>
                    <p>iManage is always with you with our soon to be released iOS and Android apps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  };
};

export default WelcomeCard;