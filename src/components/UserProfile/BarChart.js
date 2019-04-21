import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { BarChart } from 'react-easy-chart';

@inject('UserProfileStore')
@observer
class BChart extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`

    `;

    const width = "100%";

    return (
      <Styles>
        <BarChart
          axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
          axes
          grid
          colorBars
          height={300}
          data={[
            { x: 'Apr 2018', y: 5872 },
            { x: 'May 2018', y: 4986 },
            { x: 'Jun 2018', y: 6500 },
            { x: 'Jul 2018', y: 5570 },
            { x: 'Aug 2018', y: 6200 },
            { x: 'Sep 2018', y: 5800 },
            { x: 'Oct 2018', y: 5800 },
            { x: 'Nov 2018', y: 6200 },
            { x: 'Dec 2018', y: 5500 },
            { x: 'Jan 2019', y: 4000 },
            { x: 'Feb 2019', y: 5900 },
            { x: 'Mar 2019', y: 6300 },
            { x: 'Apr 2019', y: 6500 }
          ]}
        />
      </Styles>
    );
  };
};

export default BChart;