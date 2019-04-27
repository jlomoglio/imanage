import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('AppStore', 'DashboardStore')
@observer
class TasksDoughnutChart extends Component {
  state = {
    showPercentLabel: false,
    percent: '',
    bgColor: '',
    textColor: ''
  }

  togglePercentLabel = (seg, size, bgColor, txtColor, e) => {
    e.stopPropagation();

    this.setState({
      showPercentLabel: true,
      percent: size,
      segmentColor: bgColor,
      textColor: txtColor
    });
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
          top: 52px;
          left: 49%;
          margin-left: -70px;
          z-index: 4;
          text-align: center;
          font-weight: 600;
        }

        .symbol {
          font-size: 12px;
          position: absolute;
          top: 12px;
          right: 24%;
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

          .seg-label {
            position: relative;
            margin-left: 2px;
            margin-right: 2px;
            font-size: .8vw;
            cursor: pointer;
            z-index: 12;

            &> * {
              pointer-events: none !important;
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

    const primary = '#007bff';
    const success = '#28a745';
    const warning = '#ffc107';
    const danger = '#dc3545';

 
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
            style={{
              display: this.state.showPercentLabel ? 'display' : 'none',
              color: this.state.textColor
            }}
          >
            <div className="h1">{this.state.percent}<div className="symbol">%</div></div>
          </div>
          
          <div
            className="donut-hole" 
            style={{ background: this.state.segmentColor }}
          ></div>
          <div className="pie"></div>
        
          <div className="legend">
            <div 
              className="seg-label btn btn-sm btn-primary" 
              onClick={(e) => this.togglePercentLabel('1', props.seg1Size, primary, 'white', e)}
            >
              Frontend
            </div>
          
            <div 
              className="seg-label btn btn-sm btn-success" 
              onClick={(e) => this.togglePercentLabel('2', props.seg2Size, success, 'white', e)}
            >
              <span>Backend</span>
            </div>
          
            <div
              className="seg-label btn btn-sm btn-warning"
              onClick={(e) => this.togglePercentLabel('3', props.seg3Size, warning, 'white', e)}
            >
              API
            </div>
          
            <div 
              className="seg-label btn btn-sm btn-danger" 
              onClick={(e) => this.togglePercentLabel('4', props.seg4Size, danger, 'white', e)}
            >
              Issues
            </div>
          </div>
        </div>
      </Styles>
    )
  }
}

export default TasksDoughnutChart;