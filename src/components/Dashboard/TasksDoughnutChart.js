import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('AppStore', 'DashboardStore')
@observer
class TasksDoughnutChart extends Component {
  state = {
    showPercentLabel: false,
    percent: ''
  }

  render() {
    const props = this.props;
    //const DashboardStore = props.DashboardStore;
 
    const Styles = styled.div`
      .wrapper {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        text-align: center;

        .percent-label {
          width: 140px;
          height: 140px;
          background: transparent;
          border-radius: 50%;
          margin: 0 auto;
			    position: absolute;
          top: 48px;
          left: 50%;
          margin-left: -70px;
          z-index: 4;
          text-align: center;
          font-weight: 600;
        }

        .donut-hole {
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 50%;
          margin: 0 auto;
			    position: absolute;
          top: 26px;
          left: 50%;
          margin-left: -50px;
          z-index: 3;
        }

        .pie {
          width: 150px;
          height: 150px;
          background: conic-gradient(
            ${ props => props.seg1 }, 
            ${ props => props.seg2 }, 
            ${ props => props.seg3 }, 
            ${ props => props.seg4 }
          );
          border-radius: 50%;
          margin: 0 auto;
			    position: relative;
        }

        .legend {
          position: relative;
          top: 6px;
          padding-top: 10px;
          padding-bottom: 10px;

          button.seg-label {
            position: relative;
            margin-left: 2px;
            margin-right: 2px;
            font-size: .8vw;

            .color-box {
              width: 10px;
              height: 10px;
              float: left;
              margin-top: 5px;
              margin-right: 5px;
              display: none;

              &.blue { background: #007bff }
              &.green { background: #28a745 }
              &.orange { background: #ffc107 }
              &.red { background: #dc3545 }
            }

            .text {
              float: left;
              margin-right: 5px;
            }
          }
        }
      }

      .left {
        text-align: left;
        margin-left: -20px;
      }
      .center {
        text-align: center;
      }
    `;

    const seg1 = props.seg1Size;
    const seg2 = (props.seg1Size + props.seg2Size);
    const seg3 = (props.seg1Size + props.seg2Size + props.seg3Size);
    const seg4 = (props.seg1Size + props.seg2Size + props.seg3Size + props.seg4Size);

    return (
      <Styles 
        seg1={`${props.seg1Color} 0% ${seg1}%`} 
        seg2={`${props.seg2Color} ${props.seg1Size}% ${seg2}%`} 
        seg3={`${props.seg3Color} ${props.seg2Size}% ${seg3}%`}
        seg4={`${props.seg4Color} ${props.seg3Size}% ${seg4}%`}   
      >
        <div className="wrapper">
          <div 
            className="percent-label" 
            ref="percentLabel"
            style={{ display: this.state.showPercentLabel ? 'display' : 'none' }}
          >
            <span className="h1">{this.state.percent}<small>%</small></span>
          </div>
          
          <div className="donut-hole"></div>
          <div className="pie"></div>
        
          <div className="legend">
            <button 
              className="seg-label btn btn-sm btn-primary" 
              onMouseOver={() => this.setState({ showPercentLabel: true, percent: props.seg1Size })}
              onMouseLeave={ () => this.setState({showPercentLabel: false, percent: '' })}
            >
              <div className="color-box blue"></div>
              <span className="text">Frontend</span>
            </button>
          
            <button
              className="seg-label btn btn-sm btn-success"
              onMouseEnter={() => this.setState({ showPercentLabel: true, percent: props.seg2Size })}
              onMouseLeave={() => this.setState({ showPercentLabel: false, percent: '' })}
            >
              <div className="color-box green"></div>
              <span className="text">Backend</span>
            </button>
          
            <button
              className="seg-label btn btn-sm btn-warning"
              onMouseEnter={() => this.setState({ showPercentLabel: true, percent: props.seg3Size })}
              onMouseLeave={() => this.setState({ showPercentLabel: false, percent: '' })}
            >
              <div className="color-box orange"></div>
              <span className="text">API</span>
            </button>
          
            <button 
              className="seg-label btn btn-sm btn-danger" 
              onMouseEnter={() => this.setState({ showPercentLabel: true, percent: props.seg4Size })}
              onMouseLeave={() => this.setState({ showPercentLabel: false, percent: '' })}
            >
              <div className="color-box red"></div>
              <span className="text">Issues</span>
            </button>
          </div>
        </div>
      </Styles>
    )
  }
}

export default TasksDoughnutChart;