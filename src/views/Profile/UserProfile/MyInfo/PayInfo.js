import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Row, Table } from 'react-bootstrap';
import DoughnutChart from '../../../../components/UserProfile/DoughnutChart';
import { relative } from 'path';
import boaIcon from '../../../../assets/boa-icon.png';
import wellsFargoIcon from '../../../../assets/wellsfargo-icon.png';

@inject('UserProfileStore')
@observer
class PayInfo extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 0px;

        .bld {
          font-weight: bold;
        }

        .statement-btn {
          float: right;
          position: absolute;
          right: 30px;
          top: 45px;
        }
  
         .paystub-overview-card {
          width: 100%;
          padding: 0;
          height: 310px;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;

          .center {
            margin: auto;
            text-align: center;
          }

          .label {
            color: blue;
            font-size: 12.5px;
            font-weight: 400;
          }

          .label-drk {
            color: #333;
            font-size: 14.5px;
            font-weight: 600;
            display: inline-block;
            width: 100% !important;
          }

          .label-sub {
            font-size: 14.5px;
            font-weight: 400;
            display: inline-block;
            width: 100% !important;
          }

          hr {
            border-top: 1px solid #ccc;
            width: 100%;
          }

          .bdr-l-d {
            border-left: 2px dashed #ccc;
          }

          .bdr-r-d {
            border-right: 2px dashed #ccc;
          }

          .card-col-left {
            width: 50%;
            height: 155px;
            float: left;
            position: relative;

            .card-col-sub-left {
              height: 135px;
              width: 40%;
              float: left;
              padding: 10px;

              .label-name {
                color: #333;
                font-size: 16.5px;
                font-weight: bold;
                display: inline-block;
                width: 100% !important;
                font-style: italic;
                position: absolute;
                bottom: 10px;
                left: 10px;
              }
            }

            .card-col-sub-right {
              height: 155px;
              width: 60%;
              float: left;

              .label-date {
                font-size: 14.5px;
                font-weight: 400;
                position: absolute;
                top: 10px;
                right: 10px;
              }

              .earnings-card {
                position: absolute;
                bottom: 0px;
                left: 0px;
                margin-top: 25px !important;
              }

              .paycheck-amount-card {
                background: blue;
                border-radius: 10px;
                padding: 20px;
                color: white;
                position: absolute;
                bottom: 10px;
                right: 20px;
              }
            }

            .card-row-sub {
              margin-top: 100px;
              height: 135px;
              width: 100%;
              padding: 10px;
              position: relative;

              .dashed-hline {
                border-top: dashed 1px; 
                width: 96%;
                position: absolute; 
                top: 55px;
                left: 10px;
                right: 10px;
              }

              .sub-label-italic {
                font-style: italic;
                font-size: 14.5px;
              }

              .money-row {
                width: 100%;
                padding-top: 30px;
                display: inline-block;
                text-align: center;
                margin: auto;

                .pay-card {
                  width: 32%;
                  min-height: 100px;
                  margin-left: 3px;
                  margin-right: 3px;
                  color: white;
                  border-radius: 10px;
                  padding: 5px;
                }

                .pay-card.gross-pay {
                  background: #E64C65;
                }

                .pay-card.taxes {
                  background: #11A8AB;
                }

                .pay-card.deductions {
                  background: #4FC4F6;
                }

                .gross-pay, .taxes, .deductions {
                  width: 32%;
                  height: 60px;
                  text-align: center;
                  float: left;
                }
              }
            }
          }

          .card-col-right {
            width: 50%;
            float: left;
            height: 310px;
            border-left: 1px solid #ccc;
            position: relative;

            .hline1 {
              width: 80%;
              border-top: 2px solid #ccc;
              height: 1px;
              position: absolute;
              top: 40%;
              z-index: -5;
            }

            .hline2 {
              width: 80%;
              border-top: 2px solid #ccc;
              height: 1px;
              position: absolute;
              top: 71%;
              z-index: -5;
            }

            .chart-card {
              width: 40%;
              height: 60px;
              z-index: 50;

              .card-cash-data {
                padding-left: 15px;
                
                .amount {
                  font-size: 20px;
                  font-weight: 600;
                  width: 100%;
                }

                .data {
                  font-size: 22px;
                  font-weight: 600;
                  width: 100%;
                  margin-top: -5px;
                }
              }
            }
            .border-cash {
              border-left: 4px solid #E64C65;
              position: absolute;
              top: 50px;
            }
            .border-taxes {
              border-left: 4px solid #11A8AB;
              position: absolute;
              top: 47%;
            }
            .border-deductions {
              border-left: 4px solid #4FC4F6;
              position: absolute;
              bottom: 5%;
            }

            .label-ytd {
              font-size: 14.5px;
              font-weight: bold;
              position: absolute;
              top: 10px;
              left: 10px;
            }
          }
        }

        .paystub-table {
          width: 100%;
          margin: 30px;
          margin-right: 60px;
        }

        .direct-deposit-card {
          width: 100%;

          .numcircle {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: darkgray;
            color: white;
            font-size: 18px;
            text-align: center;
          }

          .vline {
            border-left: 1px solid darkgray;
            z-index: -1;
            height: 40px;
            margin-left: 14px; 
          }

          .icon {
            width: 30px;
            height: 30px;
          }
        }
      }
    `;

    const formatCurrency = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <Styles>
        <div 
          className="view-contents"
          style={{ display: props.show ? 'block' : 'none', position: 'relative' }}
        >
          <h5><i className="fas fa-piggy-bank" /> April 19th Paystub</h5>
          <button 
            className="btn btn-dark btn-sm statement-btn"
            onClick={() => UserProfileStore.showPayInfoModal()}
          >
            View Statement
          </button>

          <Row>
            <hr className="mb-3" />
            <div className="paystub-overview-card">

              <div className="card-col-left">
                
                <div className="card-col-sub-left">
                  <div className="label-sub"><strong>For Mar 15 - Mar 30</strong></div>
                </div>
                
                <div className="card-col-sub-right">
                  <div className="label-date mr-3">
                    <i className="fas fa-calendar-alt pr-1" /> 
                    <strong>PAY DAY: </strong> April 1st, 2019
                  </div>
                  <div className="earnings-card">
                    <Table>
                      <tr>
                        <td className="bld">REGULAR:</td>
                        <td>40.0 HRS</td>
                        <td>$45.00 HR</td>
                      </tr>
                      <tr>
                        <td className="bld">VACTION:</td>
                        <td>0.0 HRS</td>
                        <td>$45.00 HR</td>
                      </tr>
                    </Table>
                  </div>
                  <div className="paycheck-amount-card">
                    <span className="net-title">NET PAY</span>
                    <h3 className="net-amount">$4,114.21</h3>
                  </div>
                </div>

                <div className="card-row-sub">
                  <hr className="dashed-hline" />
                  <div className="money-row">
                    <div className="gross-pay pay-card">
                      <span>TOTAL GROSS PAY</span>
                      <h4>$5,872.68</h4>
                      <div className="progress bg-dark" style={{ height: '4px', marginLeft: '10px', marginRight: '10px' }}>
                        <div className="progress-bar bg-white" style={{ width: '25%' }}></div>
                      </div>
                      <div className="w-100 p-2">
                        <i className="far fa-arrow-alt-circle-up" /> <small>4% Higher</small>
                      </div>
                    </div>
                    <div className="taxes pay-card">
                      <span>TAXES</span>
                      <h4>$1,082.23</h4>
                      <div className="progress bg-dark" style={{ height: '4px', marginLeft: '10px', marginRight: '10px' }}>
                        <div className="progress-bar bg-white" style={{ width: '60%' }}></div>
                      </div>
                      <div className="w-100 p-2">
                        <i className="far fa-arrow-alt-circle-up" /> <small>2% Higher</small>
                      </div>
                    </div>
                    <div className="deductions pay-card">
                      <span>DEDUCTIONS</span>
                      <h4>$674.12</h4>
                      <div className="progress bg-dark" style={{ height: '4px', marginLeft: '10px', marginRight: '10px' }}>
                        <div className="progress-bar bg-white" style={{ width: '10%' }}></div>
                      </div>
                      <div className="w-100 p-2">
                        <i className="far fa-arrow-alt-circle-up" /> <small>5% Higher</small>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="card-col-right">
                <h6 className="label-ytd ml-2">Year to date, as of April 1st, 2019</h6>

                <div className="chart-card border-cash ml-4">
                  <div className="card-cash-data">
                    <div className="amount">$32,913.68</div>
                    <div className="text">CASH IN YOUR POCKET</div>
                  </div>
                </div>
                <div className="hline1"></div>
                <div className="chart-card border-taxes ml-4">
                  <div className="card-cash-data">
                    <div className="amount">$8,674.8</div>
                    <div className="text">TAXES</div>
                  </div>
                </div>
                <div className="hline2"></div>
                <div className="chart-card border-deductions ml-4">
                  <div className="card-cash-data">
                    <div className="amount">$5,392.96</div>
                    <div className="text">DEDUCTIONS</div>
                  </div>
                </div>

                <DoughnutChart 
                  data={UserProfileStore.mainchartData} 
                  size={230}
                  innerHoleSize={100} 
                  styles={{
                    float: 'right',
                    marginRight: '60px',
                    marginTop: '58px',
                    background: '#fcfcfc'
                  }}
                />

              </div>
            </div>
          </Row>

          <Row>
            <div className="paystub-table w-100">
              <h5 className="">Pay Stubs</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Pay Date</th>
                    <th>Total Gross Pay</th>
                    <th>Taxes</th>
                    <th>Deductions</th>
                    <th>Net Amount</th>
                    <th>YTD Net Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    UserProfileStore.paystubData.map((data, index) => (
                      <tr>
                        <td>{ data.paydate }</td>
                        <td>${ formatCurrency(data.paystub.gross) }</td>
                        <td>${ formatCurrency(data.paystub.tax) }</td>
                        <td>${ formatCurrency(data.paystub.deductions) }</td>
                        <td>${ formatCurrency(data.paystub.net) }</td>
                        <td>${ formatCurrency(data.paystub.ytdNet) }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table> 
            </div>
          </Row>

          <Row>
            <div className="direct-deposit-card">
              <h5 className="ml-3">Direct Deposit</h5>
              <hr />
              <Table>
                <tr>
                  <td rowspan="2" style={{ maxWidth: '30px' }}>
                    <div className="numcircle">1</div>
                    <div className="vline"></div>
                    <div className="numcircle">2</div>
                  </td>
                  <td style={{ verticalAlign: 'middle', maxWidth: '30px' }}>
                    <img src={boaIcon} className="icon" />
                  </td>
                  <td>
                    <div className="mt-3">
                      <span className="bld">$1,000 of each check</span> goes to Bank of America Checking xxx-xx-1633
                    </div>
                   </td>
                </tr>
                <tr>
                  <td style={{ maxWidth: '30px' }}>
                    <img src={wellsFargoIcon} className="icon" />
                  </td>
                  <td>
                    <div className="mt-1">
                      <span className="bld">100% of remaing amount</span> goes to Wells Fargo Checking xxx-xx-0867
                    </div>
                  </td>
                </tr>
              </Table>
              <hr />
              <p className="pl-2 pt-1">You'll receive a paper check with any remaing balance.</p>
            </div>
          </Row>
        </div> 
      </Styles>
    );
  };
};

export default PayInfo;