import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

@inject('AppStore', 'UserProfileStore')
@observer
class HealthPlanBar extends Component {
  render() {
    //const UserProfileStore = this.props.UserProfileStore;
    //const AppStore = this.props.AppStore;
    const props = this.props;

    const Styles = styled.div`
      .plan-row {
        position: relative;
        color: #77787a;
        border-bottom: 1px solid #ccc;
        margin-bottom: 0px;
        height: 120px;
        padding-top: 10px;
        padding-bottom: 10px;

        .plan-col-left {
          position: absolute;
          width: 25%;
          left: 0;

          .icon {
            position: absolute;
            top: 10px;
            left: 20px;
            font-size: 40px;
          }

          .plan-titles {
            position: absolute;
            top: 10px;
            left: 70px;
            color: #77787a;

            .plan-title {
              font-size: 16px;
              font-weight: bold;
            }

            .plan-subtitle {
              font-size: 12px;
              font-weight: 400;
            }

            .more-info {
              cursor: pointer;
              width: 100px;
              margin-top: 5px;
              padding: 5px;
              background: white;
              border: 1px solid #ccc;
            }
          }
        }

        .plan-col-center {
          position: absolute;
          width: 10%;
          top: 40px;
          left: 25%;
          text-align: center;
        }

        .plan-col-right {
          position: absolute;
          top: 40px;
          left: 35%;
          right: 0px;
          width: 50%;
          height: 50px;

          .plan-cost-bar {
            position: relative;
            width: 100%;

            .vline-l {
              position: absolute;
              left: 20px;
              border-left: 1px solid #333;
              height: 35px;
              width: 2px;
            }

            .vline-r {
              position: absolute;
              right: 20px;
              border-left: 1px solid #333;
              height: 35px;
              width: 2px;
            }

            .hline {
              position: absolute;
              top: 15px;
              left: 20px;
              right: 21px;
              border-top: 1px solid #333;
              height: 2px;
            }

            .min {
              position: absolute;
              top: -2px;
              left: 24px;
              color: #333;
              font-size: 11.5px;
            }

            .max {
              position: absolute;
              top: -2px;
              right: 24px;
              color: #333;
              font-size: 11.5px;
            }

            .icon-normal {
              position: absolute;
              top: 2px;
              left: ${props => props.min} !important;
              color: #333;
              font-size: 18.5px;
              z-index: 5;
              cursor: pointer;
            }

            .icon-normal-white {
              position: absolute;
              top: 5px;
              left: ${props => props.min} !important;
              background: #fff;
              border-radius: 50%;
              height: 18px;
              width: 18px;
              z-index: 3;
            }

            .icon-serious {
              position: absolute;
              top: 2px;
              left: ${props => props.max} !important;
              color: #333;
              font-size: 18.5px;
              z-index: 5;
              cursor: pointer;
            }

            .icon-serious-white {
              position: absolute;
              top: 5px;
              left: ${props => props.max} !important;
              background: #fff;
              border-radius: 50%;
              height: 18px;
              width: 18px;
              z-index: 3;
            }
          }
        }

        .plan-col-enroll {
          position: absolute;
          top: 40px;
          left: 90%;
          right: 0px;
          height: 50px;

          button {
            margin-left: 20px;
          }
        }
      }
    `;

    return (
      <Styles min={props.min} max={props.max}>
        
        <div className="plan-row">
          <div className="plan-col-left">
            <i className="far fa-file-alt icon mt-1" />
            <div className="plan-titles">
              <span className="plan-title">{ props.name }</span>
              <br />
              <span className="plan-subtitle">{ props.provider }</span>
              <br />
              <div className="more-info bg-info text-white">
                About the plan
              </div>
            </div>
          </div>

          <div className="plan-col-center">
            <h3>${ props.price }</h3>
          </div>

          <div className="plan-col-right">
            <div className="plan-cost-bar">
              <div className="vline-l"></div>
              <div className="hline"></div>

              <div className="vline-r"></div>
              <div className="min">$</div>
              <div className="max">$$$</div>
              <div className="icon-normal">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      { props.minPrice }
                    </Tooltip>
                  }
                >
                  <i className="fab fa-bandcamp" />
                </OverlayTrigger>
               </div>
              <div className="icon-normal-white"></div>
              <div className="icon-serious">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      {props.maxPrice}
                    </Tooltip>
                  }
                >
                  <i className="fas fa-exclamation-circle" />
                </OverlayTrigger>
              </div>
              <div className="icon-serious-white"></div>
            </div>
          </div>

          <div className="plan-col-enroll">
            <button className="btn btn-info">Enroll</button>
          </div>
        </div>
         
      </Styles>
    );
  };
};

export default HealthPlanBar;