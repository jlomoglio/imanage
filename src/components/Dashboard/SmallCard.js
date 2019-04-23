import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('AppStore', 'DashboardStore')
@observer
class SmallCard extends Component {
  render() {
    
    const props = this.props;
    //const DashboardStore = props.AppStore;

    const Styles = styled.div`
      .sm-card {
        width: auto;
        height: 170px;
        margin: 5px;
        text-align: center;
        border-radius: 5px;
        position: relative;
        background: white;
        border: 1px solid #ccc;

        .sm-card-header {
          padding: 8px;
        }

        .sm-card-body {
          padding-bottom: 10px;

          h1 {
            color: ${props => props.color};
          }

        }

        .sm-card-footer {
          text-align: left;
          border-top: 1px solid #ccc;
          padding: 10px;
          background: #333;
          color: white;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          font-size: 14px;
        }
      }
    `;

  
    return (
      <Styles color={props.bgcolor}>
        <div className="sm-card today">
          <div className="sm-card-header">
            <h6>{ props.title }</h6>
          </div>
          <div className="sm-card-body">
            <h1>{ props.num }</h1>
            <span className="h6">{ props.subtitle }</span>
          </div>
          <div className="sm-card-footer">
            <p>{ props.footer }</p>
          </div>
        </div>
      </Styles>
    );
  };
};

export default SmallCard;