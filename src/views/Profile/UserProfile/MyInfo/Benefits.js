import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('UserProfileStore')
@observer
class Benefits extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 0px;
      }
    `;

    return (
      <Styles>
        <div 
          className="view-contents row"
          style={{ display: props.show ? 'block' : 'none' }}
        >
          <div className="col-md-12">
            <h3>BENEFITS</h3>
          </div>
        </div>
      </Styles>
    );
  };
};

export default Benefits;