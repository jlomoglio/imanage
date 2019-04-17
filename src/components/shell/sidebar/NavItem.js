import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('AppStore')
@observer
class NavItem extends Component {
  render() {

    const AppStore = this.props.AppStore;
    
    const Styles = styled.div`
      .nav-item {
        color: #ccc;
        padding: 10px;
        cursor: pointer;
      }
    `;

    return (
      <Styles>
        <div 
          className="nav-item" 
          onClick={() => AppStore.toggleSubItemCollapse(this.props.sub, this.props.view)} 
          style={{ borderBottom: AppStore.navSubItemOpen ? '' : '1px solid #2b2b2b' }}
        >
          <i className={`fas ${this.props.icon} pr-3`} /> { this.props.label } 
          <i 
            className={`fas ${AppStore.navSubItemOpen ? 'fa-angle-up' : 'fa-angle-down'} pull-right pt-1`}
            style={{ display: this.props.sub ? 'block' : 'none' }}
          />
        </div>

        <div style={{ 
          display: AppStore.navSubItemOpen ? 'block' : 'none',
          borderBottom: AppStore.navSubItemOpen ? '1px solid #2b2b2b' : ''
        }}>
          { this.props.children }
        </div>
      </Styles>
    );
  }
}

export default NavItem;