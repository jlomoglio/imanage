import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('UserProfileStore')
@observer
class JobOpenings extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 185px;

        .center {
          text-align: center;
        }

        .align-right {
          text-align: right;
        }
  
        .brd-r {
          border-right: 1px solid #ccc;
        }

        .brd-l {
          border-left: 1px solid #ccc;
        }

        .bld {
          font-weight: 600;
        }

        /* LEFT COLUMN */
        .col-xl-2 {
          max-width: 240px !important;
          min-width: 240px !important;

          .categories {
            padding-top: 20px;
            padding-left: 10px;
            position: relative;

            .hline {
              color: #1A1817;
              margin-top: 10px;
              margin-bottom: 10px;
              padding: 0;
              width: 100%;
              float: left;
            }

            h6 {
              width: 100%;
              float: left;
              font-weight: 600;
            }

            div.w-100 {
              position: relative;
              padding-bottom: 5px;

              .label {
                display: table-cell;
              }

              .count {
                text-align: right;
                float: right;
                display: table-cell;
              }
            }

          }
        }

        /* RIGHT COLUMN */
        .col-xl-10 {
          min-width: calc(100% - 240px) !important;
          max-width: calc(100% - 240px) !important;
          padding: 0;

          hr {
            color: #1A1817;
            margin: 0;
            padding: 0;
            width: 100%;
          }

          .search-box {
            width: 100%;
            padding: 20px;

            .find-col {
              max-width: 120px !important;

              .find-btn {
                margin-top: 27px;
              }
            }
          }

          .job-listing {
            padding: 20px;
            border-bottom: 1px solid #ccc;
            
            span {
              margin-bottom: 5px;
            }

            .job-title {
              font-size: 22px;
              font-weight: 600;
            }

            .job-location {
              font-size: 14px;
              font-weight: 200;
            }

            .job-salary {
              font-size: 14px;
              font-weight: 200;
            }
          }
        }


      }
    `;

    return (
      <Styles>
        <div className="view-contents row">
          {/* LEFT COL */}
          <div className="col-xl-2 left-col">
            <div className="categories">
              <h6 className="">Salary</h6>
              <div className="w-100">
                <div className="count">(140)</div>
                <div className="label">$45,00.00</div>
                
              </div>
              <div className="w-100">
                <div className="count">(115)</div>
                <div className="label">$76,00.00</div>

              </div>
              <div className="w-100">
                <div className="count">(30)</div>
                <div className="label">$90,00.00</div>
  
              </div>
              <div className="w-100">
                <div className="count">(15)</div>
                <div className="label">$105,00.00</div>
              </div>

              <div className="hline"></div>

              <h6 className="">Job Type</h6>
              <div className="w-100">
                <div className="count">(156)</div>
                <div className="label">Full-time</div>
              </div>
              <div className="w-100">
                <div className="count">(12)</div>
                <div className="label">Part-time</div>
              </div>
              <div className="w-100">
                <div className="count">(18)</div>
                <div className="label">Contract</div>
              </div>
              <div className="w-100">
                <div className="count">(235)</div>
                <div className="label">Commision</div>
              </div>

              <div className="hline"></div>

              <h6 className="">Location</h6>
              <div className="w-100">
                <div className="count">(27)</div>
                <div className="label">Phoenix, AZ</div>
              </div>
              <div className="w-100">
                <div className="count">(19)</div>
                <div className="label">Denver, CO</div>
              </div>
              <div className="w-100">
                <div className="count">(156)</div>
                <div className="label">Tampa, FL</div>
              </div>
              <div className="w-100">
                <div className="count">(12)</div>
                <div className="label">Orlando, FL</div>
               </div>
              <div className="w-100">
                <div className="count">(3)</div>
                <div className="label">Tacoma, WA</div>
              </div>
              <div className="w-100">
                <div className="count">(81)</div>
                <div className="label">Remote</div>
              </div>

              <div className="hline"></div>

              <h6 className="">Job Categories</h6>
              {
                UserProfileStore.categories.map((cat, index) => (
                  <div key={index} className="w-100">
                    <div key={`${index}-${cat.count}`} className="count">({cat.count})</div>
                    <div key={`${index}-${cat.label}`} className="label">{cat.label}</div>
                  </div>
                ))
              }

            </div>
          </div>

          {/* RIGHT COL */}
          <div className="col-xl-10 brd-l pr-3 pl-0 right-col">
            <div className="search-box">
              <div className="form-row">
                <div className="col">
                  <label htmlFor="input1">Job title, keywords, or category</label>
                  <input type="text" id="input1" className="form-control" defaultValue="Front End Developer" />
                </div>
                <div className="col">
                  <label htmlFor="select1">Location</label>
                  <select id="select1" className="form-control">
                    <option>Phoenix, AZ</option>
                    <option>Denver, CO</option>
                    <option defaultValue>Tampa, FL</option>
                    <option>Orlando, FL</option>
                    <option>Tacoma, WA</option>
                    <option>Remote / Work from home</option>
                  </select>
                </div>
                <div className="col-2 find-col">
                  <button className="btn btn-secondary find-btn">Search</button>
                </div>
              </div>
            </div>

            <hr />

            <div className="job-listing mb-3">
              <span className="job-title">Front End Developer</span>
              <br />
              <span className="job-location">Temple Terrace, FL 33637</span>
              <br />
              <span className="job-salary">$75,000 - $110,000 a year</span>
              <br />
              <p className="job-description mt-2">
                As a Front End Developer, you’ll develop in front end technologies 
                to our field operations systems. You will work on basic coding changes 
                to deploy the code using devops. The sophistication and reliability of 
                our systems plays a major role in keeping us ahead of the competition, 
                and you’ll be a vital part of it. You will work fairly independently on 
                more complex operational & technical projects, issues, systems and applications.
              </p>
              <span className="listing-info">Posted: 3 days ago</span>
            </div>

            <div className="job-listing mb-3">
              <span className="job-title">Front End Developer</span>
              <br />
              <span className="job-location">Temple Terrace, FL 33637</span>
              <br />
              <span className="job-salary">$75,000 - $110,000 a year</span>
              <br />
              <p className="job-description mt-2">
                As a Front End Developer, you’ll develop in front end technologies
                to our field operations systems. You will work on basic coding changes
                to deploy the code using devops. The sophistication and reliability of
                our systems plays a major role in keeping us ahead of the competition,
                and you’ll be a vital part of it. You will work fairly independently on
                more complex operational & technical projects, issues, systems and applications.
              </p>
              <span className="listing-info">Posted: 3 days ago</span>
            </div>

            <div className="job-listing mb-3">
              <span className="job-title">Front End Developer</span>
              <br />
              <span className="job-location">Temple Terrace, FL 33637</span>
              <br />
              <span className="job-salary">$75,000 - $110,000 a year</span>
              <br />
              <p className="job-description mt-2">
                As a Front End Developer, you’ll develop in front end technologies
                to our field operations systems. You will work on basic coding changes
                to deploy the code using devops. The sophistication and reliability of
                our systems plays a major role in keeping us ahead of the competition,
                and you’ll be a vital part of it. You will work fairly independently on
                more complex operational & technical projects, issues, systems and applications.
              </p>
              <span className="listing-info">Posted: 3 days ago</span>
            </div>

            <div className="job-listing mb-3">
              <span className="job-title">Front End Developer</span>
              <br />
              <span className="job-location">Temple Terrace, FL 33637</span>
              <br />
              <span className="job-salary">$75,000 - $110,000 a year</span>
              <br />
              <p className="job-description mt-2">
                As a Front End Developer, you’ll develop in front end technologies
                to our field operations systems. You will work on basic coding changes
                to deploy the code using devops. The sophistication and reliability of
                our systems plays a major role in keeping us ahead of the competition,
                and you’ll be a vital part of it. You will work fairly independently on
                more complex operational & technical projects, issues, systems and applications.
              </p>
              <span className="listing-info">Posted: 3 days ago</span>
            </div>

            <div className="job-listing mb-3">
              <span className="job-title">Front End Developer</span>
              <br />
              <span className="job-location">Temple Terrace, FL 33637</span>
              <br />
              <span className="job-salary">$75,000 - $110,000 a year</span>
              <br />
              <p className="job-description mt-2">
                As a Front End Developer, you’ll develop in front end technologies
                to our field operations systems. You will work on basic coding changes
                to deploy the code using devops. The sophistication and reliability of
                our systems plays a major role in keeping us ahead of the competition,
                and you’ll be a vital part of it. You will work fairly independently on
                more complex operational & technical projects, issues, systems and applications.
              </p>
              <span className="listing-info">Posted: 3 days ago</span>
            </div>

          </div>
        </div>
      </Styles>
    );
  };
};

export default JobOpenings;