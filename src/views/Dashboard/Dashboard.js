import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import SmallCard from '../../components/Dashboard/SmallCard';
import GithubBarChart from '../../components/Dashboard/GithubBarChart';

@inject('AppStore', 'DashboardStore')
@observer
class Dashboard extends Component {
  render() {

    const props = this.props;
    const DashboardStore = props.DashboardStore;

    let d = new Date();

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    const calDay = weekday[d.getDay()];
    const calMonth = month[d.getMonth()];
    const calDayNum = d.getDate();
    const calYear = d.getFullYear();
    
    const Styles = styled.div`
      .view-contents {
        padding: 20px;

        .left-col {

          .col-3 {
            padding: 0 !important;
          }

          .github-card {
             border-radius: 5px;
             border: 1px solid #ccc;
             width: 100%;

            .github-card-header {
              padding: 10px;
 
              .buttons {
                text-align: right;

              }
            }

            .github-card-body {
              padding: 10px;
              height: 200px;

              .left-col {
                padding-top: 0 !important;
                padding-left: 5px !important;
                float: left;

                
                }
              }

              .right-col {
                padding-top: 0 !important;
                padding-right: 20px !important;
                float: right;

                .dummy-graph {
                  background: blue;
                  height: 200px;
                  width: 99%;
                  margin-top: 10px;
                  margin-left: 10px;
                  margin-right: 25px;
                  margin-bottom: 10px;
                }
              }
              
            }
          }
        }

        .right-col {
          padding-top: 3px;

          .today-card {
            border-radius: 5px;
            background: #333;
            color: white;
            padding: 10px;
            margin-bottom: 20px;
            text-align: center;

            .today-card-body {
              padding: 20px;

              .day {
                font-weight: 400;
              }
            }
          }
          
          .schedule-card {
            border-radius: 5px;
            background: #333;
            color: white;
            padding: 10px;

            .schedule-card-body {

              .event {
                padding-top: 5px;
                padding-bottom: 5px;
                margin-top: 10px;

                p {
                  color: rgba(255,255,255,.75);
                }
              }

              hr {
                padding: 0;
                margin: 0;
                background: rgba(255,255,255,.15);

                &:last-child {
                  display: none;
                }
              }
            }
          }
        }
      }
    `;

    return (
      <Styles>
        <div className="view-contents row">
          <div className="col-9 left-col">
            <div className="row">
              <div className="col-3">
                <SmallCard title="Today" num="45" subtitle="DUE TASKS" footer="Completed: 7" bgcolor="blue" />
              </div>
              <div className="col-3">
                <SmallCard title="Overdue" num="5" subtitle="TASKS" footer="Yeterday: 2" bgcolor="red" />
              </div>
              <div className="col-3">
                <SmallCard title="Issues" num="35" subtitle="OPEN" footer="Closed Today: 0" bgcolor="orange" />
              </div>
              <div className="col-3">
                <SmallCard title="Features" num="18" subtitle="PROPOSALS" footer="Implemented: 8" bgcolor="green" />
              </div>
            </div>
          
            <div className="row mt-3">
              <div className="github-card">
                {/* HEADER */}
                <div className="github-card-header row">
                  <div className="col-6">
                    <h6>Github Issues</h6>
                  </div>
                  <div className="col-6 buttons">
                    <button 
                      className={
                        `btn btn-sm btn-${DashboardStore.githubView === 'This Week' ? 'primary' : 'outline-secondary'} mr-2`
                      }
                      onClick={() => DashboardStore.changeGithubView('This Week')}
                    >
                      This Week
                    </button>

                    <button 
                      className={
                        `btn btn-sm btn-${DashboardStore.githubView === 'Last Week' ? 'primary' : 'outline-secondary'} mr-2`
                      }
                      onClick={() => DashboardStore.changeGithubView('Last Week')}
                    >
                      Last Week
                    </button>

                    <button 
                      className={
                        `btn btn-sm btn-${DashboardStore.githubView === '2 Weeks Ago' ? 'primary' : 'outline-secondary'}`
                      }
                      onClick={() => DashboardStore.changeGithubView('2 Weeks Ago')}
                    >
                      2 Weeks Ago
                    </button>
                  </div>
                </div>
                
                {/* BODY: This Week */}
                <div 
                  className="github-card-body row this-week"
                  style={{
                    display: `${DashboardStore.githubView === "This Week" ? 'block' : 'none'}`
                  }}
                >
                  <div className="col-7 left-col">
                    <GithubBarChart />
                  </div>
                  <div className="col-5 right-col">
                    <div className="dummy-graph"></div>
                  </div>
                </div>

                {/* BODY: Last Week */}
                <div 
                  className="github-card-body row this-week"
                  style={{
                    display: `${DashboardStore.githubView === "Last Week" ? 'block' : 'none'}`
                  }}
                >
                  <div className="col-7 left-col">
                    <div className="dummy-graph">LAST WEEK</div>
                  </div>
                  <div className="col-5 right-col">
                    <div className="dummy-graph"></div>
                  </div>
                </div>

                {/* BODY: 2 Weeks Ago */}
                <div
                  className="github-card-body row 2-weeks-ago"
                  style={{
                    display: `${DashboardStore.githubView === "2 Weeks Ago" ? 'block' : 'none'}`
                  }}
                >
                  <div className="col-7 left-col">
                    <div className="dummy-graph">2 WEEKS AGO</div>
                  </div>
                  <div className="col-5 right-col">
                    <div className="dummy-graph"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 right-col">
            {/* TODAY CARD */}
            <div className="today-card">
               <div className="today-card-body w-100">
                <h6 className="day">{ calDay }</h6>
                <h4>{ calMonth }</h4>
                <h1>{ calDayNum }</h1>
                <h5>{ calYear }</h5>
              </div>
            </div>
            
            {/* SCHEDULE CARD */}
            <div className="schedule-card">
              <div className="schedule-card-header">
                <h6>Schedule</h6>
              </div>
              <div className="schedule-card-body">
                {
                  DashboardStore.events.map((event, index) => (
                    <React.Fragment>
                      <div key={index} className="event w-100 pl-2">
                        <h6 className="w-100">{ event.label }</h6>
                        <p className="mt-n2">{ event.when }</p>
                      </div>
                      <hr />
                    </React.Fragment>
                  ))
                }
              </div>
              <div className="schedule-card-footer">

              </div>
            </div>
          </div>
        </div>
      </Styles>
    )
  };
};

export default Dashboard;