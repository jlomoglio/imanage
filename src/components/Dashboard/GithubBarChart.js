import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { OverlayTrigger } from 'react-bootstrap'; 

@inject('AppStore', 'DashboardStore')
@observer
class GithubBarChart extends Component {
  render() {
    
    const props = this.props;
    const DashboardStore = props.AppStore;

    const Styles = styled.div`
      .github-bar-chart {
        height: 300px;
        width: 90%;
        margin-top: -60px;
        margin-left: 10px;
        margin-right: 25px;
        margin-bottom: 10px;
        padding: 20px;
        position: relative;

        .bars-box {
          position: absolute;
          left: 30px;
          right: 0px;
          bottom: 30px;
          height: 200px;
          border: 1px solid #ccc;
          background: white;
          display: inline-block;

          .bar {
            width: 11.2%;
            height: 100%;
            float: left;
             margin-left: 1%; /* 4px */
            margin-right: 1%;
            position: relative;

            &:first-child {
              margin-left: 22px;
            }

            .inner-bar {
              position: absolute;
              width: 100%;
              background: rgba(255,165,0,1);
              bottom: 0;
              z-index: 2;
              text-align: center;
              padding-top: 10px;;
              color: white;
              font-size: 18px;

              &.mon {
                height: ${props => props.mon}%;
              }
              &.tue {
                height: ${props => props.tue}%;
              }
              &.wed {
                height: ${props => props.wed}%;
              }
              &.thu {
                height: ${props => props.thu}%;
              }
              &.fri {
                height: ${props => props.fri}%;
              }
              &.sat {
                height: ${props => props.sat}%;
              }
              &.sun {
                height: ${props => props.sun}%;
              }
            }
          }
        }

        .chart-lines-left {
          height: 280px !important;
          width: 25px;
          top: 0px;
          left: 0px;
          bottom: 30px;
          border-right: 1px solid #ccc;
        }

        .numbers-box {
          position: absolute;
          /* top: 0; */
          height: 200px;
          left: 0px;
          width: 30px;
          bottom: 40px;

          .number-box {
            width: 25px;
            height: 20px;
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
            width: 11.2%;
            height: 30px;
            float: left;
            text-align: center;
            margin-left: 1%; /* 4px */
            margin-right: 1%;

            &:first-child {
              margin-left: 22px;
            }
          }
        }

        .vline {
          height: 1px;
          border-top: 1px solid #ccc;
          z-index: 1;
          position: absolute;
          left: 30px;
          right: 0;
        }

        .vline-10 {
          bottom: 50px;
        }

        .vline-20 {
          bottom: 70px;
        }

        .vline-30 {
          bottom: 90px;
        }

        .vline-40 {
          bottom: 110px;
        }

        .vline-50 {
          bottom: 130px;
        }

        .vline-60 {
          bottom: 150px;
        }

        .vline-70 {
          bottom: 170px;
        }

        .vline-80 {
          bottom: 190px;
        }

        .vline-90 {
          bottom: 210px;
        }

      }
    `;

    let d = new Date();
    let calToday = d.getDay();

    const githubBarColor = 'rgba(255,165,0,0.7)';
    const githubBarColorToday = 'rgba(255,165,0,1)';

    let weekday = new Array(7);
    weekday[0] = 0;
    weekday[1] = 1;
    weekday[2] = 2;
    weekday[3] = 3;
    weekday[4] = 4;
    weekday[5] = 5;
    weekday[6] = 6;


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
            <div className="number-box"><div className="number">100</div></div>
            <div className="number-box"><div className="number">90</div></div>
            <div className="number-box"><div className="number">80</div></div>
            <div className="number-box"><div className="number">70</div></div>
            <div className="number-box"><div className="number">60</div></div>
            <div className="number-box"><div className="number">50</div></div>
            <div className="number-box"><div className="number">40</div></div>
            <div className="number-box"><div className="number">30</div></div>
            <div className="number-box"><div className="number">20</div></div>
            <div className="number-box"><div className="number">10</div></div>
            <div className="number-box"><div className="number">0</div></div>
          </div>

          <div className="bars-box">
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Tooltip on <strong>{placement}</strong>.
                </Tooltip>
              }
            >
              <div className="bar">
                <div
                  className="inner-bar sun"
                  style={{
                    display: `${
                      calToday >= weekday[0] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                    background: `
                      ${
                      props.today === 'Sunday' &&
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                      }
                    `
                  }}
                ></div>
              </div>
            </OverlayTrigger>

            <div className="bar">
              <div
                className="inner-bar mon"
                style={{
                  display: `${
                    calToday >= weekday[1] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                  background: `
                    ${
                      props.today === 'Monday' && 
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }
                  ` 
                }}
              ></div>
            </div>
            <div className="bar">
              <div 
                className="inner-bar tue" 
                style={{
                  display: `${
                    calToday >= weekday[2] ? 'block' : 'none' &&
                    props.view === 'This Week' ? 'none' : 'block'
                  }`,
                  background: `
                    ${
                      props.today === 'Tuesday' && 
                    props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }
                  ` 
                }}
              ></div>
            </div>
            <div className="bar">
              <div 
                className="inner-bar wed" 
                style={{ 
                  display: `${
                    calToday >= weekday[3] ? 'block' : 'none' &&
                    props.view === 'This Week' ? 'none' : 'block'
                  }`,
                  background: `
                    ${
                      props.today === 'Wednesday' && 
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }
                  ` 
                }}
              ></div>
            </div>
            <div className="bar">
              <div 
                className="inner-bar thu" 
                style={{ 
                  display: `${
                    calToday >= weekday[4] ? 'block' : 'none' &&
                    props.view === 'This Week' ? 'none' : 'block'
                  }`,
                  background: `
                    ${
                      props.today === 'Thursday' && 
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }
                  ` 
                }}
              ></div>
            </div>
            <div className="bar">
              <div 
                className="inner-bar fri" 
                style={{
                  display: `${
                    calToday >= weekday[5] ? 'block' : 'none' &&
                    props.view === 'This Week' ? 'none' : 'block'
                  }`,
                  background: `
                    ${
                      props.today === 'Friday' && 
                    props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }
                  ` 
                }}
              ></div>
            </div>
            <div className="bar">
              <div 
                className="inner-bar sat" 
                style={{
                  display: `${
                    calToday >= weekday[6] ? 'block' : 'none' &&
                    props.view === 'This Week' ? 'none' : 'block'
                  }`, 
                  background: `
                    ${
                      props.today === 'Saturday' && 
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }
                  ` 
                }}
              ></div>
            </div>
          </div>

          <div className="days-box">
            <div 
              className="day-box"
              style={{
                fontWeight: `
                  ${
                    props.today === 'Sunday' && 
                    props.view === 'This Week' ? 'bold' : ''
                  }
                ` 
              }}
            >Sun</div>
            <div 
              className="day-box"
              style={{
                fontWeight: `
                  ${
                    props.today === 'Monday' && 
                    props.view === 'This Week' ? 'bold' : ''
                  }
                ` 
              }}
            >Mon</div>
            <div 
              className="day-box"
              style={{
                fontWeight: `
                  ${
                    props.today === 'Tuesday' && 
                    props.view === 'This Week' ? 'bold' : ''
                  }
                ` 
              }}
            >Tue</div>
            <div 
              className="day-box"
              style={{
                fontWeight: `
                  ${
                    props.today === 'Wednesday' && 
                    props.view === 'This Week' ? 'bold' : ''
                  }
                ` 
              }}
            >Wed</div>
            <div
              className="day-box"
              style={{
                fontWeight: `
                  ${
                  props.today === 'Thursday' &&
                    props.view === 'This Week' ? 'bold' : ''
                  }
                `
              }}
            >Thu</div>
            <div 
              className="day-box"
              style={{
                fontWeight: `
                  ${
                    props.today === 'Friday' && 
                    props.view === 'This Week' ? 'bold' : ''
                  }
                ` 
              }}
            >Fri</div>
            <div 
              className="day-box"
              style={{
                fontWeight: `
                  ${
                    props.today === 'Saturday' && 
                    props.view === 'This Week' ? 'bold' : ''
                  }
                ` 
              }}
            >Sat</div>
          </div>
        
          <div className="vline vline-90"></div>
          <div className="vline vline-80"></div>
          <div className="vline vline-70"></div>
          <div className="vline vline-60"></div>
          <div className="vline vline-50"></div>
          <div className="vline vline-40"></div>
          <div className="vline vline-30"></div>
          <div className="vline vline-20"></div>
          <div className="vline vline-10"></div>
        </div>
      </Styles>
    );
  };
};

export default GithubBarChart;