import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Checkbox from '../../components/UI/Checkbox';

@inject('BacklogStore', 'ProjectsStore')
@observer
class Backlog extends Component {
  render() {

    const props = this.props;
    const BacklogStore = props.BacklogStore;
    const ProjectsStore = props.ProjectsStore;

    const Styles = styled.div`
      .view-contents {
        padding: 20px;
        position: relative;

        i {
          font-size: 14px;
        }

        .page-title {
          position: absolute;
          top: 15px;
          left: 30px;
        }

        .backlog-card {
          position: absolute;
          top: 55px;
          left: 20px;
          right: 30px;
          background: white;
          border-radius: 5px;
          border: 1px solid #ccc;
          min-height: 100% !important;


          .backlog-card-header {
            padding: 10px;

            .buttons {
              text-align: right;
            }
          }

          .backlog-card-body {
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
          <h4 className="page-title">Backlog</h4>
          <div className="backlog-card">
            <div className="backlog-card-header row">
              <div className="col-8">
                <select className="form-control-sm float-left">
                  <option>Project</option>
                  {
                    ProjectsStore.projects.map((project, index) => (
                      <option
                        key={index}
                        style={{
                          display:project.status === 'Open' ? 'block' : 'none'
                        }}>
                        { project.name }
                      </option>
                    ))
                  }
                </select>
                  
                <select className="form-control-sm float-left ml-2">
                      <option>Move to Sprint</option>
                      <option>Sprint 1</option>
                      <option>Sprint 2</option>
                      <option>Sprint 3</option>
                      <option>Sprint 4</option>
                      <option>Sprint 5</option>
                    </select>
              </div>
              <div className="col-4 buttons">
                <button className="btn btn-sm btn-secondary mr-2">Add Story</button>
              </div>
            </div>
            
            <div className="backlog-card-body row">
              <table className="table ml-2 mr-2 table-striped">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '10px' }}></th>
                    <th scope="col" style={{ width: '24px' }}><Checkbox /></th>
                    <th scope="col" style={{ width: '400px' }}>Title</th>
                    <th scope="col" style={{ width: '100px' }}>ID</th>
                    <th scope="col" style={{ width: '150px' }}>Project</th>
                    <th scope="col" style={{ width: '60px' }}>Priority</th>
                    <th scope="col" style={{ width: '100px'}}>Points</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    BacklogStore.stories.map((story, index) => (
                      <tr key={index}>
                        <th scope="row"><i className="fas fa-ellipsis-v" /></th>
                        <td><Checkbox /></td>
                        <td>{ story.title }</td>
                        <td>{ story.id }</td>
                        <td>{ story.project }</td>
                        <td>{ story.priority }</td>
                        <td>{ story.points }</td>
                        <td>
                          <i className="fas fa-edit float-left mr-3" />
                          <i className="fas fa-trash float-left" />
                        </td>
                      </tr>
                    ))
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

export default Backlog;