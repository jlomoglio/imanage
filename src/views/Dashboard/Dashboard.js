import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const Dashboard = inject('DashboardStore')(observer(props => {
  
  const DashboardStore = props.DashboardStore;
  
  const Styles = styled.div`
    .view-contents {
      padding: 20px;
    }
  `;


  let subTitle = DashboardStore.loadSubTitle()


  return (
    <Styles>
      <div className="view-contents">
        <h2>{ DashboardStore.viewTitle }</h2>
        <h5><small>{ subTitle }</small></h5>
        <hr />
        <h4>Remaining Tasks: { DashboardStore.remainingTasks }</h4>
        <small>Remaining Tasks is a computed value from the DashboardStore</small>
      </div>
    </Styles>
  )
  
}));

export default Dashboard;