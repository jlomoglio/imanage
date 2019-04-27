import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'; 


@inject('AppStore', 'DashboardStore')
@observer
class GithubIssuesCard extends Component {
  render() {
    const props = this.props;
    const DashboardStore = props.DashboardStore;

    const Styles = styled.div`
      .progress {
        height: 6px !important;
        margin-bottom: 3px;
        background: rgb(0,0,0,.05);

        .progress-bar {
          background: rgba(255,165,0,0.5) !important;
        }

        .progress-bar.today {
          background: rgba(255,165,0,1) !important;
        }
      }
    `;

    let d = new Date();
    let calToday = d.getDay();

    const githubBarColor = 'rgba(255,165,0,0.5)';
    const githubBarColorToday = 'rgba(255,165,0,1)';

    let weekday = new Array(7);
    weekday[0] = 0;
    weekday[1] = 1;
    weekday[2] = 2;
    weekday[3] = 3;
    weekday[4] = 4;
    weekday[5] = 5;
    weekday[6] = 6;

    let data;
    if (props.type === 'created') {
      // GITHUB CREATED ISSUES DATA
      if (DashboardStore.githubView === 'This Week') {
        data = DashboardStore.githubIssuesCreatedThisWeek
      }
      else if (DashboardStore.githubView === 'Last Week') {
        data = DashboardStore.githubIssuesCreatedLastWeek
      }
      else if (DashboardStore.githubView === '2 Weeks Ago') {
        data = DashboardStore.githubIssuesCreated2WeeksAgo
      }
    }
    else if (props.type === 'closed') {
      // GITHUB CLOSED ISSUES DATA
      if (DashboardStore.githubView === 'This Week') {
        data = DashboardStore.githubIssuesClosedThisWeek
      }
      else if (DashboardStore.githubView === 'Last Week') {
        data = DashboardStore.githubIssuesClosedLastWeek
      }
      else if (DashboardStore.githubView === '2 Weeks Ago') {
        data = DashboardStore.githubIssuesClosed2WeeksAgo
      }
    }
    else if (props.type === 'test') {
      // GITHUB NEEDS TESTING ISSUES DATA
      if (DashboardStore.githubView === 'This Week') {
        data = DashboardStore.githubIssuesNeedTestThisWeek
      }
      else if (DashboardStore.githubView === 'Last Week') {
        data = DashboardStore.githubIssuesNeedTestLastWeek
      }
      else if (DashboardStore.githubView === '2 Weeks Ago') {
        data = DashboardStore.githubIssuesNeedTest2WeeksAgo
      }
    }
    else if (props.type === 'fixed') {
      // GITHUB FIXED ISSUES DATA
      if (DashboardStore.githubView === 'This Week') {
        data = DashboardStore.githubIssuesFixedThisWeek
      }
      else if (DashboardStore.githubView === 'Last Week') {
        data = DashboardStore.githubIssuesFixedLastWeek
      }
      else if (DashboardStore.githubView === '2 Weeks Ago') {
        data = DashboardStore.githubIssuesFixed2WeeksAgo
      }
    }

    return (
      <Styles>
        <div className="github-issues-card mt-2">
          <div className="label h6 w-100">{ props.label }</div>
          <div className="value h4 w-100">{ props.totalToday }</div>
          <div className="hbars w-100">
          
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip 
                  id={`tooltip-${ data[0].day}`}
                  style={{
                    display: `${
                      calToday >= weekday[0] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`
                  }}
                >
                  {data[0].day}: <strong>{data[0].value}</strong>
                </Tooltip>
              }
            > 
              <div 
                className="progress"
                style={{
                  background: `${
                    calToday >= weekday[0] ? '' : 'white' &&
                    props.view === 'This Week' ? 'white' : ''
                  }`
                }}
              >
                <div 
                  role="progressbar" 
                  style={{ 
                    width: `${data[0].value}%`,
                    display: `${
                      calToday >= weekday[0] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                    background: `${
                      props.today === 'Sunday' &&
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }` 
                  }}
                ></div>
              </div>
            </OverlayTrigger>
            
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip 
                  id={`tooltip-${data[1].day}`}
                  style={{
                    display: `${
                      calToday >= weekday[1] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`
                  }}
                >
                  {data[1].day}: <strong>{data[1].value}</strong>
                </Tooltip>
              }
            > 
              <div 
                className="progress"
                style={{
                  background: `${
                    calToday >= weekday[1] ? '' : 'white' &&
                    props.view === 'This Week' ? 'white' : ''
                  }`
                }}
              >
                <div 
                  role="progressbar" 
                  style={{ 
                    width: `${data[1].value}%`,
                    display: `${
                      calToday >= weekday[1] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                    background: `${
                      props.today === 'Monday' &&
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }` 
                  }}
                ></div>
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip 
                  id={`tooltip-${data[2].day}`}
                  style={{
                    display: `${
                      calToday >= weekday[2] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`
                  }}
                >
                  {data[2].day}: <strong>{data[2].value}</strong>
                </Tooltip>
              }
            > 
              <div 
                className="progress"
                style={{
                  background: `${
                    calToday >= weekday[2] ? '' : 'white' &&
                    props.view === 'This Week' ? 'white' : ''
                  }`
                }}
              >
                <div 
                  role="progressbar" 
                  style={{ 
                    width: `${data[2].value}%`,
                    display: `${
                      calToday >= weekday[2] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                    background: `${
                      props.today === 'Tuesday' &&
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }` 
                  }}
                ></div>
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip 
                  id={`tooltip-${data[3].day}`}
                  style={{
                    display: `${
                      calToday >= weekday[3] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`
                  }}
                >
                  {data[3].day}: <strong>{data[3].value}</strong>
                </Tooltip>
              }
            > 
              <div 
                className="progress"
                style={{
                  background: `${
                    calToday >= weekday[3] ? '' : 'white' &&
                    props.view === 'This Week' ? 'white' : ''
                  }`
                }}
              >
                <div 
                  role="progressbar" 
                  style={{ 
                    width: `${data[3].value}%`,
                    display: `${
                      calToday >= weekday[3] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                    background: `${
                      props.today === 'Wednesday' &&
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }` 
                  }}
                ></div>
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip 
                  id={`tooltip-${data[4].day}`}
                  style={{
                    display: `${
                      calToday >= weekday[4] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`
                  }}
                >
                  {data[4].day}: <strong>{data[4].value}</strong>
                </Tooltip>
              }
            > 
              <div 
                className="progress"
                style={{
                  background: `${
                    calToday >= weekday[4] ? '' : 'white' &&
                    props.view === 'This Week' ? 'white' : ''
                  }`
                }}
              >
                <div 
                  role="progressbar" 
                  style={{ 
                    width: `${data[4].value}%`,
                    display: `${
                      calToday >= weekday[4] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                    background: `${
                      props.today === 'Thursday' &&
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }` 
                  }}
                ></div>
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip 
                  id={`tooltip-${data[5].day}`}
                  style={{
                    display: `${
                      calToday >= weekday[5] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`
                  }}
                >
                  {data[5].day}: <strong>{data[5].value}</strong>
                </Tooltip>
              }
            > 
              <div 
                className="progress"
                style={{
                  background: `${
                    calToday >= weekday[5] ? '' : 'white' &&
                    props.view === 'This Week' ? 'white' : ''
                  }`
                }}
              >
                <div 
                  role="progressbar" 
                  style={{ 
                    width: `${data[5].value}%`,
                    display: `${
                      calToday >= weekday[5] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                    background: `${
                      props.today === 'Friday' &&
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }` 
                  }}
                ></div>
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip 
                  id={`tooltip-${data[6].day}`}
                  style={{
                    display: `${
                      calToday >= weekday[6] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`
                  }}
                >
                  {data[6].day}: <strong>{data[6].value}</strong>
                </Tooltip>
              }
            > 
              <div 
                className="progress"
                style={{
                  background: `${
                    calToday >= weekday[6] ? '' : 'white' &&
                    props.view === 'This Week' ? 'white' : ''
                  }`
                }}
              >
                <div 
                  role="progressbar" 
                  style={{ 
                    width: `${data[6].value}%`,
                    display: `${
                      calToday >= weekday[6] ? 'block' : 'none' &&
                      props.view === 'This Week' ? 'none' : 'block'
                    }`,
                    background: `${
                      props.today === 'Saturday' &&
                      props.view === 'This Week' ? githubBarColorToday : githubBarColor
                    }` 
                  }}
                ></div>
              </div>
            </OverlayTrigger>
          </div>
        </div>
      </Styles> 
    );
  };
};

export default GithubIssuesCard;