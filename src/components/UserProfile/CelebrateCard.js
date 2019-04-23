import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('UserProfileStore')
@observer
class CelebrateCard extends Component {

  componentDidMount() {
    //let celeabrateCardWidth = this.elDiv.offsetWidth;
    console.log(this.elDiv.offsetWidth)
    this.props.UserProfileStore.celebrateCardWidth = this.elDiv.offsetWidth;
  }

  render() {
    const UserProfileStore = this.props.UserProfileStore;
   
    const Styles = styled.div`
      .celebrating-card {
        margin-top: 16px;
        padding: 10px;
        text-align: left !important;
        border: 1px solid #ccc;
        margin-right: 10px;
      }

      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 10px;
        border: 2px solid #ccc;
      }
        
    `;

    return (
      <Styles>
        <div 
          className={`celebrating-card row mr-4
            ${
              UserProfileStore.celebrateCardWidth > 280 && 
              UserProfileStore.celebrateCardWidth < 600 ? 'ml-3' : ''
            }
          `} 
          ref={el => this.elDiv = el
        }>
          <h6 className="w-100">Celebrating This Month (5)</h6>
          {
            UserProfileStore.celebrations.map((celb, index) => (
              <div key={index} className="3-col-card row">
                <div className="col-sm-1 col-md-2">
                  <img key={celb.avatar} src={celb.avatar} className="avatar mr-3" alt="avatar" />
                </div>
                <div key={celb.name} className="col-sm-11 col-md-8">
                  <div key={celb.text} className="ml-4">
                    <h6 key={`${index}_${celb.name}`} className="mb-0 mt-2">{ celb.name }</h6>
                    <span key={`${index}_${celb.text}`} className="sm-text">{ celb.text }</span>
                  </div>
                </div>
                <div 
                  key={`${index}_${celb.avatar}`} 
                  className="col-md-2"
                  style={{ display: UserProfileStore.celebrateCardWidth < 400 ? 'none' : 'block' }}
                >
                  <i 
                    key={`${index}_${celb.avatar}_${index}`}
                    className="fas fa-birthday-cake icon-celeabrate" 
                    style={{ display: UserProfileStore.celebrateCardWidth < 400 ? 'none' : 'block' }} 
                  />
                </div>
              </div>
            ))
          }
        </div>
      </Styles>
    );
  };
};

export default CelebrateCard;