import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

@inject('UserProfileStore')
@observer
class TimeOff extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 0px;

        hr {
          border-top: 1px solid #ccc;
          width: 100%;
        }

        .bdr-r {
          border-right: 1px solid #ccc;
        }

        .center {
          text-align: center;
          margin: auto;
        }

        .col-sm-2 {
          max-width: 180px !important;
        }

        .left-col {

        }

        .right-col {

          .timeoff-type-box {
            width: 100%;
            margin-top: 20px;
            margin-left: 30px;
            margin-right: 70px;

            .timeoff-type-selector {
              width: 200px;
              padding: 10px;
              border: 1px solid #ccc;
              color: #333;
              border-radius: 10px;
              margin-right: 10px;
              cursor: pointer;
            }
          }

          .dates-type-box  {
            width: 100%;
            margin-top: 20px;
            margin-left: 30px;
            margin-right: 70px;
          }

          .about-box  {
            width: 100%;
            margin-top: 20px;
            margin-left: 30px;
            margin-right: 70px;
          }
        }

      }
    `;

    return (
      <Styles>
        <div 
          className="view-contents"
          style={{ display: props.show ? 'block' : 'none' }}
        >
          <h5><i className="fas fa-file-alt" /> Time Off</h5>
          <Row><hr /></Row>

          <Row>
            <div className="left-col col-sm-2 bdr-r">
              <div className="center mt-3 mb-2">
                 <h5>Vacation</h5>
                <h2 className="mt-2"><i className="fas fa-umbrella-beach" /> 22.7</h2>
                <span className="md-text bold">HOURS AVAILABLE</span>
              </div>
              <hr />
              <div className="center mt-3 mb-2">
                <h5>Sick Leave</h5>
                <h2 className="mt-2"><i className="fas fa-user-md" /> 14.0</h2>
                <span className="md-text bold">DAYS AVAILABLE</span>
              </div>
              <hr />
              <div className="center mt-3 mb-2">
                <h5>Personal Days</h5>
                <h2 className="mt-2"><i className="fas fa-user" /> 4.0</h2>
                <span className="md-text bold">DAYS AVAILABLE</span>
              </div>
              <hr />
            </div>

            <div className="right-col col-sm-10">
              <Row>
                <div className="timeoff-type-box mb-4">
                  <Row>
                    <h6 className="w-100 mb-3">Select the type of leave you plan to take:</h6>
                    <div className="timeoff-type-selector">
                      <i className="fas fa-umbrella-beach mr-2" /> Vacation
                    </div>

                    <div className="timeoff-type-selector">
                      <i className="fas fa-user-md mr-2" /> Sick Leave
                    </div>

                    <div className="timeoff-type-selector">
                      <i className="fab fa-fly mr-2" /> Floating Holiday
                    </div>
                  </Row>
                  <br />
                  <Row>
                    <div className="timeoff-type-selector">
                      <i className="fas fa-gavel mr-2" /> Jury Duty
                    </div>

                    <div className="timeoff-type-selector">
                      <i className="fas fa-heart-broken mr-2" /> Bereavement
                    </div>
                  </Row>
                </div>
              </Row>

              <Row>
                <hr />
                <div className="dates-type-box mb-4">
                  <Row>
                    <h6 className="w-100 mb-3">Select dates:</h6>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputEmail4">From</label>
                        <input type="date" className="form-control" />
                      </div>
                        <div className="form-group col-md-6">
                        <label for="inputPassword4">To</label>
                          <input type="date" className="form-control" />
                      </div>
                    </div>
                  </Row>
                </div>
              </Row>

              <Row>
                <hr />
                <div className="about-box mb-4">
                  <Row>
                    <h6 className="w-100 mb-3">About Your Leave:</h6>
                    <div className="form-row w-100">
                      <div className="form-group w-50">
                        <label for="inputEmail4">Title</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-row w-100">
                      <div className="form-group w-100">
                        <label for="inputEmail4">Details</label>
                        <textarea type="date" className="form-control" />
                      </div>
                      <button className="btn btn-secondary mt-2 ml-1">Submit Request</button>
                    </div>
                  </Row>
                </div>
              </Row>
            </div>

          </Row>
        </div>
      </Styles>
    );
  };
};

export default TimeOff;