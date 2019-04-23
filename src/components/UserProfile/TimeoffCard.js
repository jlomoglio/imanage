import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('UserProfileStore')
@observer
class TimeoffCard extends Component {
  componentDidMount() {
    //let timeoffCardWidth = this.elDiv.offsetWidth;
    this.props.UserProfileStore.timeoffCardWidth = this.elDiv.offsetWidth;
  }

  render() {
    const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div`
      .timeoff-card {
        margin-top: 26px;
        padding: 10px;
        text-align: left !important;
        border: 1px solid #ccc;
        margin-right: 10px;
      }

      .brd-l {
        border-left: 1px solid #ccc;
      }

      .bold {
        font-weight: 600;
      }

      .md-text, h5 {
        font-size: 100%;
      }

      .center {
        text-align: center;
      }
    `;

    return (
      <Styles>
        <div 
          className={`timeoff-card row mr-4
            ${
              UserProfileStore.timeoffCardWidth > 280 && 
              UserProfileStore.timeoffCardWidth < 600 ? 'ml-3' : ''
            }`
          } 
          ref={el => this.elDiv = el}
        >
          <div className="col-sm-6 center">
            <h5>Vacation</h5>
            <hr />
            <h2 className="mt-2"><i className="fas fa-plane-departure" /> 22.7</h2>
            <span className="md-text bold">HOURS AVAILABLE</span>
          </div>
          <div className="col-sm-6 brd-l center">
            <h5>Sick Leave</h5>
            <hr />
            <h2 className="mt-2"><i className="fas fa-band-aid" /> 4.0</h2>
            <span className="md-text bold">DAYS USED (YTD)</span>
          </div>
          <button className="btn btn-dark mt-3 w-100">
            <i className="far fa-calendar-times" /> Request Time Off
          </button>
      </div>
      </Styles>
    );
  };
};

export default TimeoffCard;