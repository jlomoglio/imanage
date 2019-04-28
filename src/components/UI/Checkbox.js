import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('AppStore')
@observer
class Checkbox extends Component { 
  state = {
    checked: false
  }

  togggleCheckbox = () => {
    this.state.checked ? this.setState({ checked: false }) : this.setState({ checked: true })
  }

  render() {
    const Styles = styled.div`
      i {
        font-size: 18px;
      }
    `;
    
    return (
      <Styles>
        <i
          className={this.state.checked ? 'far fa-check-square' : 'far fa-square'}
          onClick={() => this.togggleCheckbox()}
        />
      </Styles>
    );
  };
};

export default Checkbox