import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('UserProfileStore')
@observer
class Files extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 0px;
      }
    `;

    return (
      <Styles>
        <div className="view-contents row">
          <div className="col-md-12">
            <h3>FILES</h3>
          </div>
        </div>
      </Styles>
    );
  };
};

export default Files;