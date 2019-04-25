import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'; 


@inject('AppStore', 'DashboardStore')
@observer
class GithubIssuesCard extends Component {
  render() {
    const props = this.props;
    const issueData = props.DashboardStore.githubIssuesCreatedThisWeek;

    const Styles = styled.div`
      .progress {
        height: 6px !important;
        margin-bottom: 3px;

        .progress-bar {
          background: rgba(255,165,0,0.5) !important;
        }

        .progress-bar.today {
          background: rgba(255,165,0,1) !important;
        }
      }
    `;

    return (
      <Styles>
        <div className="github-issues-card mt-2">
          <div className="label h6 w-100">{ props.label }</div>
          <div className="value h4 w-100">{ props.totalToday }</div>
          <div className="hbars w-100">
          {
            issueData.map((d, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${d.day}`}>
                    {d.day}: <strong>{d.value}</strong>
                  </Tooltip>
                }
              > 
                <div className="progress">
                  <div 
                    className={`progress-bar ${d.day === 'Thu' ? 'today' : ''}`}
                    role="progressbar" 
                    style={{ width: `${d.value}%` }}
                  ></div>
                </div>
              </OverlayTrigger>
            ))
          }
          </div>
        </div>
      </Styles> 
    );
  };
};

export default GithubIssuesCard;