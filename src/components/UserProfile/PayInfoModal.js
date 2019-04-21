import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';

const PayInfoModal = inject('UserProfileStore')(observer(props => {

  const UserProfileStore = props.UserProfileStore;

  const Styles = styled.div`
    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

          .earnings-header {
            width: 100%;
            position: relative;
            height: 120px;

            h5 {
              position: absolute;
              top: 10px;
              left: 20px;
            }

            .employer-address {
              margin-top: 60px;
              margin-left: 20px;
              float: left;
              width: 250px;
            }

            .employee-address {
              margin-top: 60px;
              margin-right: 20px;
              width: 250px;
              float: right;
            }

          }

          .earnings-table-wrapper {
            position: absolute;
            top: 130px;
            right: 0px;
            left: 0px;
            bottom: 50px;


            .earnings-table {
              position: absolute;
              top: 10px;
              left: 0px;
              right: 0px;
            }

            .earnings-table2 {
              position: absolute;
              top: 68px;
              left: 0px;
              width: 50%;
            }

            .earnings-table3 {
              position: absolute;
              top: 68px;
              width: 50%;
              right: 0px;
              border-left: 1px sold #ccc !important;
            }

            .earnings-table4 {
              position: absolute;
              top: 240px;
              left: 0px;
              right: 0px;
            }
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
        style={{ display: UserProfileStore.payInfoModalShown ? 'block' : 'none' }}
      >
        <div className="ui-modal-dialog">
          <div className="ui-modal-content">
            <div className="ui-modal-header">
              <h5 className="ui-modal-title" ref="exampleModalScrollableTitle">Earings Statement</h5>
            </div>
            <div className="ui-modal-body row">
              
              <div className="earnings-header">
                <h5>#015574</h5>

                <div className="employer-address">
                  <h4>iManage, Inc</h4>
                  <h6>1234 Sample St - Tampa, FL 33565</h6>
                </div>
                <div className="employee-address">
                  <h4>Joe LoMoglio</h4>
                  <h6>8 East Crest Dr - Gates, NY 14608</h6>
                </div>
              </div>

              <div className="earnings-table-wrapper">
                <Table striped bordered hover size="sm" className="earnings-table">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th>MARITAL STATUS</th>
                      <th>EXEMPTIONS</th>
                      <th>SSN</th>
                      <th>EMPLOYEE ID</th>
                      <th>PAY PERIOD</th>
                      <th>PAY DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Divorced</td>
                      <td>6</td>
                      <td>XXX-XX-7895</td>
                      <td>FED0587</td>
                      <td>03/10/2019 - 03/26/2019</td>
                      <td>03/27/2019</td>
                    </tr>
                  </tbody>
                </Table>
                <Table size="sm" className="earnings-table2">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th>INCOME</th>
                      <th>RATE</th>
                      <th>HOURS</th>
                      <th>CURRENT TOTAL</th>
                    </tr>
                  </thead>
                  <tbody className="bg-secondary text-white">
                    <tr>
                      <td>REGULAR</td>
                      <td>45.00</td>
                      <td>40.00</td>
                      <td>$1,800.00</td>
                    </tr>
                    <tr>
                      <td>OVERTIME</td>
                      <td>67.50</td>
                      <td>0</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>HOLIDAY</td>
                      <td>90.00</td>
                      <td>0</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>VACATION</td>
                      <td>45.00</td>
                      <td>0</td>
                      <td>$0.00</td>
                    </tr>
                    <tr>
                      <td>BOUNS</td>
                      <td>00.00</td>
                      <td>0</td>
                      <td>$0.00</td>
                    </tr>
                  </tbody>
                </Table>
                <Table size="sm" className="earnings-table3" style={{ borderLeft: '2px solid white'}}>
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th>DEDUCTIONS</th>
                      <th>CURRENT TOTAL</th>
                      <th>YEAR-TO-DATE</th>
                    </tr>
                  </thead>
                  <tbody className="bg-secondary text-white">
                    <tr>
                      <td>FICA MED TAX</td>
                      <td>$9.71</td>
                      <td>$656.00</td>
                    </tr>
                    <tr>
                      <td>FICA SS TAX</td>
                      <td>$9.71</td>
                      <td>$2,160.08</td>
                    </tr>
                    <tr>
                      <td>FED TAX</td>
                      <td>$59.35</td>
                      <td>$3,006.28</td>
                    </tr>
                    <tr>
                      <td>STATE TAX</td>
                      <td>$60.30</td>
                      <td>$3,106.28</td>
                    </tr>
                    <tr>
                      <td><span>&nbsp;</span></td>
                      <td><span></span></td>
                      <td><span></span></td>
                    </tr>
                  </tbody>
                </Table>
                <Table striped bordered hover size="sm" className="earnings-table4">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th>YTD GROSS</th>
                      <th>YTD DEDUCTIONS</th>
                      <th>YTD NET PAY</th>
                      <th>CURRENT TOTAL</th>
                      <th>CURRENT DEDUCTIONS</th>
                      <th>NET PAY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$34,840.00</td>
                      <td>$8,886.80</td>
                      <td>$25,953.20</td>
                      <td>$670.00</td>
                      <td>$170.90</td>
                      <td>$499.10</td>
                    </tr>
                  </tbody>
                </Table>
              </div>


            </div>
            <div className="ui-modal-footer">
              <button
                type="button"
                className="btn btn-secondary mr-2"
                onClick={() => UserProfileStore.closePayInfoModal()}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">Export</button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )

}));

export default PayInfoModal;