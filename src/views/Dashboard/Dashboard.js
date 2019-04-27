import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import SmallCard from '../../components/Dashboard/SmallCard';
import GithubBarChart from '../../components/Dashboard/GithubBarChart';
import GithubIssuesCard from '../../components/Dashboard/GithubIssuesCard';
import TasksDoughnutChart from '../../components/Dashboard/TasksDoughnutChart';

@inject('AppStore', 'DashboardStore')
@observer
class Dashboard extends Component {
  render() {

    const props = this.props;
    const DashboardStore = props.DashboardStore;

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
             margin-left: 8px;
             margin-right: 8px;
             height: 340px;
             background: white;

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

              .right-col {
                padding-top: 0 !important;
                padding-right: 20px !important;
                float: right;
              }
              
            }
          }

          .task-dist-card {
            border-radius: 5px;
            border: 1px solid #ccc;
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
            height: 280px;
            background: white;

            .task-dist-card-header {
              padding: 10px;
            }

            .task-dist-card-body {
              padding: 10px;
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

    let d = new Date();

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let month = new Array(12);
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
    const dayOfWeekNum = d.getDay();

    let githubBarChartData;
    if (DashboardStore.githubView === 'This Week') {
      githubBarChartData = DashboardStore.githubDataThisWeek
    }
    else if (DashboardStore.githubView === 'Last Week') {
      githubBarChartData = DashboardStore.githubDataLastWeek
    }
    else if (DashboardStore.githubView === '2 Weeks Ago') {
      githubBarChartData = DashboardStore.githubData2Weeks
    }

    let createdTotal;
    let closedTotal;
    let needTestTotal;
    let fixedTotal;
 
    // RETURNS THE TOTAL NUMBER OF ISSUES
    function getSum(total, num) {
      return total + num
    }

    // GITHUB ISSUES THIS WEEK
    if (DashboardStore.githubView === 'This Week') {
      // TOTAL CREATED GITHUB ISSUES THIS WEEK
      let createdThisWeekTotal = [];
      DashboardStore.githubIssuesCreatedThisWeek.map((issue, index) => {
        return createdThisWeekTotal[index] = issue.value;
      });
      createdTotal = createdThisWeekTotal.reduce(getSum);

      // TOTAL CLOSED GITHUB ISSUES THIS WEEK
      let closedThisWeekTotal = [];
      DashboardStore.githubIssuesClosedThisWeek.map((issue, index) => {
        return closedThisWeekTotal[index] = issue.value;
      });
      closedTotal = closedThisWeekTotal.reduce(getSum);

      // TOTAL NEED TEST GITHUB ISSUES THIS WEEK
      let needTestThisWeekTotal = [];
      DashboardStore.githubIssuesNeedTestThisWeek.map((issue, index) => {
        return needTestThisWeekTotal[index] = issue.value;
      });
      needTestTotal = needTestThisWeekTotal.reduce(getSum);

      // TOTAL FIXED GITHUB ISSUES THIS WEEK
      let fixedThisWeekTotal = [];
      DashboardStore.githubIssuesFixedThisWeek.map((issue, index) => {
        return fixedThisWeekTotal[index] = issue.value;
      });
      fixedTotal = fixedThisWeekTotal.reduce(getSum);
    }
    // GITHUB ISSUES LAST WEEK
    else if (DashboardStore.githubView === 'Last Week') {
      // TOTAL CREATED GITHUB ISSUES LAST WEEK
      let createdLastWeekTotal = [];
      DashboardStore.githubIssuesCreatedLastWeek.map((issue, index) => {
        return createdLastWeekTotal[index] = issue.value;
      });
      createdTotal = createdLastWeekTotal.reduce(getSum);

      // TOTAL CLOSED GITHUB ISSUES LAST WEEK
      let closedLastWeekTotal = [];
      DashboardStore.githubIssuesClosedLastWeek.map((issue, index) => {
        return closedLastWeekTotal[index] = issue.value;
      });
      closedTotal = closedLastWeekTotal.reduce(getSum);

      // TOTAL NEED TEST GITHUB ISSUES LAST WEEK
      let needTestLastWeekTotal = [];
      DashboardStore.githubIssuesNeedTestLastWeek.map((issue, index) => {
        return needTestLastWeekTotal[index] = issue.value;
      });
      needTestTotal = needTestLastWeekTotal.reduce(getSum);

      // TOTAL FIXED GITHUB ISSUES LAST WEEK
      let fixedLastWeekTotal = [];
      DashboardStore.githubIssuesFixedLastWeek.map((issue, index) => {
        return fixedLastWeekTotal[index] = issue.value;
      });
      fixedTotal = fixedLastWeekTotal.reduce(getSum);
    }

    // GITHUB ISSUES 2 WEEKS AGO
    else if (DashboardStore.githubView === '2 Weeks Ago') {
      // TOTAL CREATED GITHUB ISSUES 2 WEEKS AGO
      let created2WeekTotal = [];
      DashboardStore.githubIssuesCreated2WeeksAgo.map((issue, index) => {
        return created2WeekTotal[index] = issue.value;
      });
      createdTotal = created2WeekTotal.reduce(getSum);

      // TOTAL CLOSED GITHUB ISSUES 2 WEEKS AGO
      let closed2WeekTotal = [];
      DashboardStore.githubIssuesClosed2WeeksAgo.map((issue, index) => {
        return closed2WeekTotal[index] = issue.value;
      });
      closedTotal = closed2WeekTotal.reduce(getSum);

      // TOTAL NEED TEST GITHUB ISSUES 2 WEEKS AGO
      let needTest2WeekTotal = [];
      DashboardStore.githubIssuesNeedTest2WeeksAgo.map((issue, index) => {
        return needTest2WeekTotal[index] = issue.value;
      });
      needTestTotal = needTest2WeekTotal.reduce(getSum);

      // TOTAL FIXED GITHUB ISSUES 2 WEEKS AGO
      let fixed2WeekTotal = [];
      DashboardStore.githubIssuesFixed2WeeksAgo.map((issue, index) => {
        return fixed2WeekTotal[index] = issue.value;
      });
      fixedTotal = fixed2WeekTotal.reduce(getSum);
    }

    const primary = '#007bff';
    const success = '#28a745';
    const warning = '#ffc107';
    const danger = '#dc3545';


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
                <SmallCard 
                  title="Issues" 
                  num={DashboardStore.githubDataThisWeek[dayOfWeekNum]} 
                  subtitle="OPEN" 
                  footer="Closed Today: 0" 
                  bgcolor="orange" 
                />
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
                    <h6>Github Issue Tracker</h6>
                  </div>
                  <div className="col-6 buttons">
                    <button 
                      className={`
                        btn btn-sm 
                        btn-${
                          DashboardStore.githubView === 'This Week' ? 
                          'secondary' : 
                          'outline-secondary'
                        } 
                        mr-2
                      `}
                      onClick={() => DashboardStore.changeGithubView('This Week')}
                    >
                      This Week
                    </button>

                    <button 
                      className={`
                        btn btn-sm 
                        btn-${
                          DashboardStore.githubView === 'Last Week' ? 
                          'secondary' : 
                          'outline-secondary'
                        } 
                        mr-2
                      `}
                      onClick={() => DashboardStore.changeGithubView('Last Week')}
                    >
                      Last Week
                    </button>

                    <button 
                      className={`
                        btn btn-sm 
                        btn-${
                          DashboardStore.githubView === '2 Weeks Ago' ? 
                          'secondary' : 
                          'outline-secondary'
                        }
                      `}
                      onClick={() => DashboardStore.changeGithubView('2 Weeks Ago')}
                    >
                      2 Weeks Ago
                    </button>
                  </div>
                </div>
                <hr className="p-0 m-0" />
                {/* BODY: This Week */}
                <div className="github-card-body row this-week">
                  <div className="col-7 left-col">
                    <h6 className="ml-2 mt-1">ISSUES</h6>
                    <GithubBarChart 
                      view={DashboardStore.githubView} 
                      today={calDay} 
                      data={githubBarChartData} 
                    />
                  </div>
                  <div className="col-5 right-col">
                    <div className="row">
                      <div className="col-6">
                        <GithubIssuesCard 
                          label="CREATED"
                          today={calDay} 
                          view={DashboardStore.githubView} 
                          totalToday={createdTotal}
                          type="created"
                        />
                      </div>
                      <div className="col-6">
                        <GithubIssuesCard 
                          label="CLOSED"
                          today={calDay}
                          view={DashboardStore.githubView}
                          totalToday={closedTotal}
                          type="closed" 
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <GithubIssuesCard 
                          label="NEEDS TEST"
                          today={calDay} 
                          view={DashboardStore.githubView}
                          totalToday={needTestTotal}
                          type="test"
                        />
                      </div>
                      <div className="col-6">
                        <GithubIssuesCard 
                          label="FIXED"
                          today={calDay} 
                          view={DashboardStore.githubView}
                          totalToday={fixedTotal}
                          type="fixed"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-4 ml-n2">
                <div className="task-dist-card">
                  <div className="task-dist-card-header row">
                    <div className="col-12">
                      <h6 className="">Task Distribution</h6>
                    </div>
                  </div>
                  <hr className="p-0 m-0" />
                  <div className="task-dist-card-body row">
                    <TasksDoughnutChart
                      seg1Size={20} seg1Color={primary}
                      seg2Size={40} seg2Color={success}
                      seg3Size={30} seg3Color={warning}
                      seg4Size={10} seg4Color={danger}
                    />
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="task-dist-card">
                  <div className="task-dist-card-header row">
                    <div className="col-12">
                      <h6 className="">Issue Distribution</h6>
                    </div>
                  </div>
                  <hr className="p-0 m-0" />
                  <div className="task-dist-card-body row">
                    <TasksDoughnutChart
                      seg1Size={37} seg1Color={primary}
                      seg2Size={15} seg2Color={success}
                      seg3Size={28} seg3Color={warning}
                      seg4Size={20} seg4Color={danger}
                    />
                  </div>
                </div>
              </div>

              <div className="col-4 mr-n3">
                <div className="task-dist-card p-0 m-0">
                  <div className="task-dist-card-header row">
                    <div className="col-12">
                      <h6 className="">Feature Distribution</h6>
                    </div>
                  </div>
                  <hr className="p-0 m-0" />
                  <div className="task-dist-card-body row">
                    <TasksDoughnutChart
                      seg1Size={10} seg1Color={primary}
                      seg2Size={30} seg2Color={success}
                      seg3Size={20} seg3Color={warning}
                      seg4Size={40} seg4Color={danger}
                    />
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
                    <React.Fragment key={index}>
                      <div className="event w-100 pl-2">
                        <h6 className="w-100">{ event.label }</h6>
                        <p className="mt-n2">{ event.when }</p>
                      </div>
                      <hr />
                    </React.Fragment>
                  ))
                }
              </div>
              <div className="schedule-card-footer"></div>
            </div>
          </div>
        </div>
      </Styles>
    )
  };
};

export default Dashboard;