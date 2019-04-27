import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('AppStore')
@observer
class Backlog extends Component {
  render() {

    const Styles = styled.div`
    .view-contents {
      padding: 20px;
    }
  `;

    return (
      <Styles>
        <div className="view-contents">
          <h2>BACKLOG</h2>
        </div>
      </Styles>
    );
  }
}

export default Backlog;