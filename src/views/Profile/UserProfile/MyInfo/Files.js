import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';


@inject('UserProfileStore')
@observer
class Files extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

 
    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 0px;

        hr {
          border-top: 1px solid #ccc;
          width: 100%;
        }

        .file-table {
          width: 97%;
          margin-top: 30px;
          margin-left: 30px;
          margin-right: 70px;
          position: relative;

          .icon {
            font-size: 25px;
            margin-top: 5px;
          }

          .icon2 {
            font-size: 18px;
            margin-top: 5px;
          }

          .chkbx {
            margin-top: 5px;
          }

          th {
            position: relative;
          }

          .tools {
            position: absolute;
            right: 40px;
            top: 8px;
          }

          select {
            width: 150px;
            padding: 5px;
            margin-right: 5px;
          }
        }
      }
    `;

    return (
      <Styles>
        <div 
          className="view-contents"
          style={{ display: props.show ? 'block' : 'none' }}
        >
          <h5><i className="fas fa-file-alt" /> Files</h5>
          <Row>
            <hr />

            <table className="table file-table">
              <thead>
                <tr>
                  <th width="20">
                    <input type="checkbox" className="chkbx" />
                  </th>
                  <th width="30"></th>
                  <th>
                    All Files <small>(10)</small>
                    <div className="tools form-row">
                      <select className="">
                        <option>Sort by: </option>
                        <option>File Name</option>
                        <option>File Type</option>
                        <option>Creayed On</option>
                      </select>
                      <i className="fas fa-download icon2 pl-2" />
                      <i className="fas fa-trash icon2 pl-2" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                { 
                  UserProfileStore.fileList.map((file, index) => (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" className="chkbx" />
                      </td>
                      <td>
                        <i className={`fas fa-file-${file.type} icon`} />
                      </td>
                      <td>
                        <h6 className="text-primary">{file.name }</h6>
                        <p className="mt-n1 mb-0">Created on {file.created }</p>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

          </Row>
        </div>
      </Styles>
    );
  };
};

export default Files;