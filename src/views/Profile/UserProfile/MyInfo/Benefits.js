import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import HealthPlanBar from '../../../../components/UserProfile/HealthPlanBar';

@inject('UserProfileStore')
@observer
class Benefits extends Component {
  render() {
    //const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 0px;

        hr {
          border-top: 1px solid #ccc;
          width: 100%;
        }

        .inline {
          display: inline;
        }

        .arrow-progress-bar {
          width: 100%;
          position: absolute;
          top: 37px;
          left: -14px;
          right: 0;
          height: 45px;
          background: #fff;
          border-bottom: 1px solid #ccc;
          padding-bottom: 3px;

          
          .clearfix:after {
            clear: both;
            content: "";
            display: block;
            height: 0;
          }

          .wrapper {
            display: table-cell;
            vertical-align: middle;
            margin: 0;
            padding: 0;
          }

          /* Breadcrups CSS */

          .arrow-steps .step {
            font-size: 14px;
            text-align: center;
            color: #666;
            cursor: default;
            margin: 0 3px;
            padding: 10px 10px 10px 30px;
            min-width: 180px;
            float: left;
            position: relative;
            background-color: #d9e3f7;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none; 
            transition: background-color 0.2s ease;
          }

          .arrow-steps .step:after,
          .arrow-steps .step:before {
            content: " ";
            position: absolute;
            top: 0;
            right: -17px;
            width: 0;
            height: 0;
            border-top: 19px solid transparent;
            border-bottom: 17px solid transparent;
            border-left: 17px solid #d9e3f7;	
            z-index: 2;
            transition: border-color 0.2s ease;
          }

          .arrow-steps .step:before {
            right: auto;
            left: 0;
            border-left: 17px solid #fff;	
            z-index: 0;
          }

          .arrow-steps .step:first-child:before {
            border: none;
          }

          .arrow-steps .step:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          }

          .arrow-steps .step span {
            position: relative;
          }

          .arrow-steps .step span:before {
          opacity: 0;
          content: "✔";
          position: absolute;
          top: -2px;
          left: -20px;
          }

          .arrow-steps .step.done span:before {
            opacity: 1;
            -webkit-transition: opacity 0.3s ease 0.5s;
            -moz-transition: opacity 0.3s ease 0.5s;
            -ms-transition: opacity 0.3s ease 0.5s;
            transition: opacity 0.3s ease 0.5s;
          }

          .arrow-steps .step.current {
            color: #fff;
            background-color: #23468c;
          }

          .arrow-steps .step.current:after {
            border-left: 17px solid #23468c;	
          }

          .button-row {
            position: absolute;
            top: 2px;
            right: 10px;
            display: inline;
            border-left: 1px solid #ccc;
          }
        }

        .content-wrapper {
          display: inline;
          padding-top: 65px;
          padding-left: 20px;
          padding-right: 59px;

          .health-plan {
            min-height: 250px;
            border: 1px solid #ccc;
            border-radius: 10px;
            margin-bottom: 50px;

            hr {
              border-top: 1px solid #ccc;
              width: 100%;
              margin-top: 60px;
              margin-bottom: 60px;
            }

            .plan-header {
              position: relative;
              background: #333;
              color: white;
              min-height: 50px;
              padding-left: 15px;
              padding-top: 5px;
              padding-right: 5px;
              padding-bottom: 5px;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;

              .right-col {
                position: absolute;
                right: 20px;
                top: 18px;
                font-size: 14px;
              }
            }
          }
        }
      }
    `;

    return (
      <Styles>
        <div 
          className="view-contents"
          style={{ display: props.show ? 'block' : 'none', position: 'relative' }}
        >
          <h5><i className="fas fa-heartbeat" /> Benefits Enrollment</h5>
          <Row>
            <hr />

            <div className="arrow-progress-bar">
              <div className="wrapper">
                <div className="arrow-steps clearfix">
                  <div className="step current"> <span>Medical Coverage</span> </div>
                  <div className="step"> <span>Dental Coverage</span> </div>
                  <div className="step"> <span>Whole Life Policies</span> </div>
                  <div className="step"> <span>Summary</span> </div>
                </div>
              </div>
              <div className="button-row">
                <button className="btn btn-secondary">Prev</button>
                <button className="btn btn-secondary ml-1">Next</button>
              </div>
              
            </div>
            <div className="content-wrapper">
              <p>
                The following is a list of benefit plans for which you are eligable to enroll.
                Make your elections by clicking the Enroll button. Once you have made your elections, 
                click Next at the top to continue to the next section.
              </p>
              <p>* Place you cursor over Normal & Serious icons to display prices</p>

              <div className="health-plan">
                <div className="plan-header">
                  <div className="left-col">
                    <h5>Your medical options:</h5>
                    <h6 className="mt-n2">4 plans to choose from</h6>
                  </div>
                  <div className="right-col">
                    <span className="inline"><i className="fab fa-bandcamp" /> Normal Use</span>
                    <span className="inline ml-2"><i className="fas fa-exclamation-circle" /> Serious Illness</span>
                   </div>
                </div>

                <HealthPlanBar
                  name={'Affordable HMO'}
                  provider={'Health Care Market Place (HMO)'}
                  price={240}
                  min={'20%'}
                  max={'45%'}
                  minPrice={'$300'}
                  maxPrice={'$900'}
                />

                <HealthPlanBar
                  name={'Lumenos HSA'}
                  provider={'Anthem Blue Cross (HSA)'}
                  price={423}
                  min={'30%'}
                  max={'60%'}
                  minPrice={'$1,000'}
                  maxPrice={'$3,000'}
                />

                <HealthPlanBar
                  name={'Classic HMO'}
                  provider={'Anthem Blue Cross (HMO)'}
                  price={580}
                  min={'50%'}
                  max={'80%'}
                  minPrice={'$1,000'}
                  maxPrice={'$3,000'}
                />

                <HealthPlanBar
                  name={'Classic HMO'}
                  provider={'United Health Care (HMO)'}
                  price={650}
                  min={'60%'}
                  max={'85%'}
                  minPrice={'$6,000'}
                  maxPrice={'$12,000'}
                />
              </div>
            </div>
          </Row>
        </div>
      </Styles>
    );
  };
};

export default Benefits;