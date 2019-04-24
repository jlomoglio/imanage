import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('AppStore', 'DashboardStore')
@observer
class GithubBarChart extends Component {
  render() {
    
    const props = this.props;
    //const DashboardStore = props.AppStore;

    const Styles = styled.div`
      .github-bar-chart {
        height: 300px;
        width: 99%;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 25px;
        margin-bottom: 10px;
        padding: 20px;
        position: relative;

        .bars-box {
          position: absolute;
          top: 0;
          left: 30px;
          right: 0px;
          bottom: 30px;
          border: 1px solid #ccc;
          background: white;
          display: inline-block;

          .bar {
            width: 12%;
            height: 100%;
            float: left;
            margin-left: 4px;
            margin-right: 4px;
            position: relative;

            &:first-child {
              margin-left: 5px;
            }

            .inner-bar {
              position: absolute;
              width: 100%;
              background: lightblue;
              bottom: 0;

              &.mon {
                top: ${props => props.mon};
              }
              &.tue {
                top: ${props => props.tue};
              }
              &.wed {
                top: ${props => props.wed};
              }
              &.thu {
                top: ${props => props.thu};
              }
              &.fri {
                top: ${props => props.fri};
              }
              &.sat {
                top: ${props => props.sat};
              }
              &.sun {
                top: ${props => props.sun};
              }
            }
          }
        }

        .chart-lines-left {
          /* position: absolute; */
          height: 280px !important;
          width: 25px;
          top: 0px;
          left: 0px;
          bottom: 30px;
          border-right: 1px solid #ccc;
        }

        .numbers-box {
          position: absolute;
          top: 0;
          left: 0px;
          width: 30px;
          bottom: 30px;

          .number-box {
            width: 25px;
            height: 44px;
            padding-right: 5px;

            .number {
              bottom: 15px;
              width: 20px;
              text-align: right;
            }
          }
        }

        .days-box {
          position: absolute;
          left: 30px;
          right: 0;
          bottom: 0px;
          height: 30px;
          display: inline-block;

          .day-box {
            width: 12%;
            height: 30px;
            float: left;
            text-align: center;
            margin-left: 4px;
            margin-right: 4px;

            &:first-child {
              margin-left: 5px;
            }
          }
        }
      }
    `;

  
    return (
      <Styles 
        color={props.bgcolor}
        mon={props.data[0]}
        tue={props.data[1]}
        wed={props.data[2]}
        thu={props.data[3]}
        fri={props.data[4]}
        sat={props.data[5]}
        sun={props.data[6]}
      >
        <div className="github-bar-chart">
          <div className="numbers-box">
            <div className="number-box"><div className="number">60</div></div>
            <div className="number-box"><div className="number">50</div></div>
            <div className="number-box"><div className="number">40</div></div>
            <div className="number-box"><div className="number">30</div></div>
            <div className="number-box"><div className="number">20</div></div>
            <div className="number-box"><div className="number">10</div></div>
            <div className="number-box"><div className="number">0</div></div>
          </div>

          <div className="bars-box">
            <div className="bar">
              <div className="inner-bar mon"></div>
            </div>
            <div className="bar">
              <div className="inner-bar tue"></div>
            </div>
            <div className="bar">
              <div className="inner-bar wed"></div>
            </div>
            <div className="bar">
              <div className="inner-bar thu"></div>
            </div>
            <div className="bar">
              <div className="inner-bar fri"></div>
            </div>
            <div className="bar">
              <div className="inner-bar sat"></div>
            </div>
            <div className="bar">
              <div className="inner-bar sun"></div>
            </div>
          </div>

          <div className="days-box">
            <div className="day-box">Mon</div>
            <div className="day-box">Tue</div>
            <div className="day-box">Wed</div>
            <div className="day-box">Thu</div>
            <div className="day-box">Fri</div>
            <div className="day-box">Sat</div>
            <div className="day-box">Sun</div>
          </div>
        
          {/* <div className="chart-lines-left"></div> */}
          {/* <div className="numbers-box"> */}
            {/* <div className="number-box mt-5"><div className="number">60</div></div>
            <div className="number-box"><div className="number">50</div></div>
            <div className="number-box"><div className="number">40</div></div>
            <div className="number-box"><div className="number">30</div></div>
            <div className="number-box"><div className="number">20</div></div>
            <div className="number-box"><div className="number">10</div></div>
            <div className="number-box"><div className="number">0</div></div> */}
          {/* </div> */}
          
        </div>
      </Styles>
    );
  };
};

export default GithubBarChart;