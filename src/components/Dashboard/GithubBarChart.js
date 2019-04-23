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
        background: #ccc;
        height: auto;
        width: 99%;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 25px;
        margin-bottom: 10px;

        .chart-lines-left {
          min-height: 240px !important;
          width: 20px;
          float: left;
          
          .number-box {
            position: relative;
            width: 20px;
            height: 40px;
            text-align: bottom;

            .number {
              position: absolute;
              bottom: 0;
            }
          }
        }


      }
    `;

  
    return (
      <Styles color={props.bgcolor}>
        <div className="github-bar-chart">
        
          <div className="chart-lines-left">
            <div className="number-box"><div className="number">60</div></div>
            <div className="number-box"><div className="number">50</div></div>
            <div className="number-box"><div className="number">40</div></div>
            <div className="number-box"><div className="number">30</div></div>
            <div className="number-box"><div className="number">20</div></div>
            <div className="number-box"><div className="number">10</div></div>
            <div className="number-box"><div className="number">0</div></div>
          </div>
          
        </div>
      </Styles>
    );
  };
};

export default GithubBarChart;