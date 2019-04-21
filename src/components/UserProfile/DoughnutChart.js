import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { PieChart } from 'react-easy-chart';

@inject('UserProfileStore')
@observer
class DoughnutChart extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`

    `;

    return (
      <Styles>
        <PieChart
          size={props.size}
          innerHoleSize={props.innerHoleSize}
          data={props.data}
          styles={props.styles}
        />
      </Styles>
    );
  };
};

export default DoughnutChart;