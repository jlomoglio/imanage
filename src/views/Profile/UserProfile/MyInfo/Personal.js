import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Form, Row, Col } from 'react-bootstrap';

@inject('UserProfileStore')
@observer
class Personal extends Component {
  render() {
    const UserProfileStore = this.props.UserProfileStore;
    const props = this.props;

    const Styles = styled.div`
      .view-contents {
        padding: 0px;
        margin-top: 0px;

        hr {
          border-top: 2px solid darkgray;
          width: 97%;
        }

        .label {
          color: blue;
          font-size: 12.5px;
          font-weight: 400;
        }

        input[type="date"] {
          position: relative;
        }
        input[type="date"]::before{
          color: #ffffff;
          content: attr(placeholder) ": Birth Day Boy Got His Wish";
        }
        input[type="date"]:focus::before {
          content: "" !important;
        }
        .date-text {
          position: absolute;
          z-index: 5;
          top: 6px;
          left: 24px;
        }
      }
    `;

    return (
      <Styles>
        <div 
          className="view-contents"
          style={{ display: props.show ? 'block' : 'none' }}
        >
          <h5><i className="fas fa-address-card" /> Personal</h5>
          <hr className="mb-3" />
          <Row>
            <Col lg={5}>
              <div className="label pb-2">Basic Information</div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Employee #</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Status</Form.Label>
                    <Form.Control as="select">
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  
                  <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                       </Form.Control>
                  </Form.Group>
                  
                  <Form.Group as={Col}>
                    <Form.Label>Race</Form.Label>
                    <Form.Control as="select">
                      <option>Hispanic</option>
                      <option>American Indian</option>
                      <option>Alaska Native</option>
                      <option>Asian</option>
                      <option>African American</option>
                      <option>Native Hawaiian</option>
                      <option>White</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  
                  <Form.Group as={Col}>
                    <Form.Label>SSN</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>
              </Form>

              <div className="label pb-2">Contact Information</div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Home Phone</Form.Label>
                    <Form.Control type="phone" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Mobile Phone</Form.Label>
                    <Form.Control type="phone" />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>

            <Col lg={5}>
              <div className="label pb-2">Address</div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Street 1</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Street 2</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>

                 <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                      <option>AL</option>
                      <option>AR</option>
                      <option>AZ</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form.Row>
              </Form>

              <div className="label pb-2">Emergency Contact</div>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Contact Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Relationship</Form.Label>
                      <Form.Control as="select">
                        <option></option>
                        <option>Parent</option>
                        <option>Sibling</option>
                        <option>Spouce</option>
                        <option>Friend</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="phone" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control type="phone" />
                    </Form.Group>
                  </Form.Row>
                </Form>
            </Col>

            <Col lg={2}></Col>
          </Row>

          <Row>
            <Col lg={5}>
              <div className="label pb-2">Employment Information</div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Control as="select">
                      <option></option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Seasonal</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Department</Form.Label>
                    <Form.Control as="select">
                      <option></option>
                      <option>HR</option>
                      <option>Software Development</option>
                      <option>Product Development</option>
                      <option>Marketing</option>
                      <option>Sales</option>
                      <option>Operations</option>
                      <option>IT</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Manager</Form.Label>
                    <Form.Control as="select">
                      <option></option>
                      <option>Richard Watson</option>
                      <option>Bill Thompson</option>
                      <option>Jack Wallace</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Direct Reports</Form.Label>
                    <Form.Control as="select">
                      <option></option>
                      <option>Martin Shore</option>
                      <option>David Sparks</option>
                      <option>Bruce Jones</option>
                      <option>Richard Moore</option>
                      <option>Allen Gleason</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
            
            <Col lg={5}>
              <div className="label pb-2">Campus</div>
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select">
                      <option></option>
                      <option>Highland Park</option>
                      <option>Westshore</option>
                      <option>Temple Terrace</option>
                      <option>Rocky Point</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Building ID</Form.Label>
                    <Form.Control as="select">
                      <option></option>
                      <option>HP-01</option>
                      <option>HP-02</option>
                      <option>HP-03</option>
                      <option>WS-01</option>
                      <option>TT-01</option>
                      <option>TT-02</option>
                      <option>RP-01</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                </Form.Row>
              </Form>
            </Col>
            <Col lg={2}></Col>
          </Row>
          <hr className="mb-3 mt-3" />
          <Row>
            <Col sm={12} className="buttons mb-3">
              <button className="float-right btn btn-outline-dark mr-4 ml-2">Save</button>
              <button className="float-right btn btn-outline-danger">Cancel</button>
            </Col>
          </Row>
        </div>
      </Styles>
    );
  };
};

export default Personal;