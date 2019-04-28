import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


@inject('AppStore')
@observer
class Projects extends Component {
  render() {

    const Styles = styled.div`
      .view-contents {
        padding: 20px;
        position: relative;

        .page-title {
          position: absolute;
          top: 15px;
          left: 30px;
        }

        .projects-card {
          position: absolute;
          top: 55px;
          left: 20px;
          right: 30px;
          background: white;
          border-radius: 5px;
          border: 1px solid #ccc;
          min-height: 100% !important;


          .projects-card-header {
            padding: 10px;

            .buttons {
              text-align: right;
            }
          }

          .projects-card-body {
            padding-left: 10px;
            padding-right: 10px;
            height: auto;

          }
        }
      }
    `;

    return (
      <Styles>
        <div className="view-contents row">
          <h4 className="page-title">Projects</h4>
          <div className="projects-card">
            <div className="projects-card-header row">
              <div className="col-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-search" />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control" id="inlineFormInputGroupUsername"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="col-9 buttons">
                <button className="btn btn-sm btn-secondary mr-2">Create Project</button>
              </div>
            </div>
            
            <div className="projects-card-body row">
              <table className="table ml-2 mr-2 table-striped">
                <thead>
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Project Lead</th>
                    <th scope="col">Begin Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">SimGen</th>
                    <td>Joe LoMoglio</td>
                    <td>03/10/2017</td>
                    <td>4/02/2017</td>
                    <td>Closed</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">SimCore</th>
                    <td>Joe LoMoglio</td>
                    <td>03/10/2017</td>
                    <td>11/16/2017</td>
                    <td>Closed</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">SimMod</th>
                    <td>Joe LoMoglio</td>
                    <td>04/08/2017</td>
                    <td>11/16/2017</td>
                    <td>Closed</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">Vui-Kit</th>
                    <td>Joe LoMoglio</td>
                    <td>02/01/2018</td>
                    <td>05/30/2018</td>
                    <td>Closed</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">JD Construction Report Tool</th>
                    <td>Joe LoMoglio</td>
                    <td>07/01/2018</td>
                    <td>10/31/2018</td>
                    <td>Closed</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">The Veronica Chronicles Unity Game</th>
                    <td>Joe LoMoglio</td>
                    <td>11/01/2018</td>
                    <td>12/31/2018</td>
                    <td>Closed</td>
                    <td>View</td>
                  </tr>
                  <tr>
                    <th scope="row">iManage</th>
                    <td>Joe LoMoglio</td>
                    <td>01/10/2019</td>
                    <td>---</td>
                    <td>Open</td>
                    <td>Edit | Close</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Projects;