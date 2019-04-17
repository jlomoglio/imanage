import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('AppStore') 
@observer
class NavSubItem extends Component {
  render() {

    const AppStore = this.props.AppStore;

    const Styles = styled.div`
      .nav-sub-item {
        margin-left: 45px;
        font-size: 90%;
        padding-top: 5px;
        padding-bottom: 10px;
        color: white;
        cursor: pointer;
      }
    `;

    return (
      <Styles>
        <div 
          className="nav-sub-item"
          onClick={() => AppStore.setSubView(this.props.view, this.props.subview)}
        >
          { this.props.label }
        </div>
      </Styles>
    );
  }
}

export default NavSubItem;