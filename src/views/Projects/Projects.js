import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

@inject('ProjectsStore')
@observer
class Projects extends Component {
  render() {

    const props = this.props;
    const ProjectsStore = props.ProjectsStore;

    const Styles = styled.div`
      .view-contents {
        padding: 20px;
        position: relative;

        .page-title {
          position: absolute;
          top: 15px;
          left: 30px;
        }

        .status-badge {
          padding: 2px;
          color: white;
          text-align: center;
        }

        i {
          font-size: 16px;
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

    //const primary = '#007bff';
    const success = '#28a745';
    //const warning = '#ffc107';
    const danger = '#dc3545';

    const filtered = ProjectsStore.filtered;
    let data;
    let list;
    if (filtered) {
      data = 'projectsFiltered';
      list = 'distinctStatusList';
    }
    else {
      data = 'projects'
      list = 'statusList';
    }

    return (
      <Styles>
        <div className="view-contents row">
          <h4 className="page-title">Projects</h4>
          <div className="projects-card">
            <div className="projects-card-header row">
              <div className="col-8">
                <i className="fas fa-filter float-left mt-2 mr-1" />
                <select
                  className="form-control-sm float-left ml-2"
                  onChange={(e) => ProjectsStore.onLeadChange(e)}
                  value={ProjectsStore.lead}
                >
                  <option style={{ display: ProjectsStore.filtered ? 'none' : 'block' }}>
                    Project Lead
                  </option>
                  {
                    ProjectsStore.leadList.map((lead, index) => {
                      return (
                        <option key={index} value={lead}>{lead}</option>
                      )
                    })
                  }
                </select>
                
                <select
                  className="form-control-sm float-left ml-2"
                  onChange={(e) => ProjectsStore.onStatusChange(e)}
                  value={ProjectsStore.status}
                >
                  <option style={{ display: ProjectsStore.filtered ? 'none' : 'block' }}>
                    Project Status
                  </option>
                  {
                    ProjectsStore[list].map((status, index) => (
                      <option key={index} value={status}>{status}</option>
                    ))
                  }
                </select>

                <button
                  className="btn btn-sm btn-secondary ml-2"
                  onClick={() => ProjectsStore.clearFilters()}
                >
                  Clear
                </button>
              </div>
              <div className="col-4 buttons">
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
                  {
                    
                    ProjectsStore[data].map((project, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row" style={{ width: '280px' }}>{project.name}</th>
                          <td style={{ width: '150px' }}>{project.lead}</td>
                          <td style={{ width: '100px' }}>{project.begin}</td>
                          <td style={{ width: '100px' }}>{project.end}</td>
                          <td style={{ width: '100px' }}>
                            <div
                              className="status-badge"
                              style={{ background: `${project.status === 'Closed' ? danger : success}` }}
                            >
                              {project.status}
                            </div>
                          </td>
                          <td style={{ display: `${project.status === 'Closed' ? 'block' : 'none'}` }}>
                            <i className="fas fa-eye" />
                          </td>
                          <td style={{ display: `${project.status === 'Open' ? 'block' : 'none'}` }}>
                            <i className="fas fa-edit float-left mr-3" />
                            <i className="fas fa-door-closed float-left" />
                          </td>
                        </tr>
                      )
                    })
                    
                  }
   
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