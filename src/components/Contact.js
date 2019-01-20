import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: "",
        lastName: "",
        telNum: "",
        email: "",
        agree: false,
        contactType: "",
        message: ""
      }
    };
  }

  handleValidation = (firstName, lastName, telNum, email) => {
    const errors = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: ""
    };

    if (firstName === false) errors.firstName = "First name is required.";

    if (lastName === false) errors.lastName = "Last name is required.";

    const regInt = /^\d+$/;
    if (telNum !== "" && !regInt.test(telNum))
      errors.telNum = "Tel. number should contain only numbers.";

    const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email !== "" && !regEmail.test(email))
      errors.email = "Email should be valid.";

    return errors;
  };

  handleBlur = field => evt => {
    const value = evt.target.value;
    console.log(value);
    if (value === "") {
      this.setState({
        fields: { ...this.state.fields, [field]: false }
      });
    } else {
      this.setState({
        fields: { ...this.state.fields, [field]: value }
      });
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      fields: { ...this.state.fields, [name]: value }
    });
  };

  handleSubmit = event => {
    console.log("Current State is: " + JSON.stringify(this.state.fields));
    alert("Current State is: " + JSON.stringify(this.state.fields));
    event.preventDefault();
  };

  render() {
    const {
      firstName,
      lastName,
      telNum,
      email,
      agree,
      contactType,
      message
    } = this.state.fields;
    const errors = this.handleValidation(firstName, lastName, telNum, email);

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone" />: +852 1234 5678
              <br />
              <i className="fa fa-fax" />: +852 8765 4321
              <br />
              <i className="fa fa-envelope" />:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+9779849126254"
              >
                <i className="fa fa-phone" /> Call
              </a>
              <a role="button" href="live:sah.arjun" className="btn btn-info">
                <i className="fa fa-skype" /> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:sah.arjun07@gmail.com"
              >
                <i className="fa fa-envelope-o" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    valid={errors.firstName === ""}
                    invalid={errors.firstName !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("firstName")}
                  />
                  <FormFeedback>{errors.firstName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    valid={errors.lastName === ""}
                    invalid={errors.lastName !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("lastName")}
                  />
                  <FormFeedback>{errors.lastName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telNum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telNum"
                    name="telNum"
                    placeholder="Tel. Number"
                    valid={errors.telNum === ""}
                    invalid={errors.telNum !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("telNum")}
                  />
                  <FormFeedback>{errors.telNum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("email")}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={contactType}
                    onChange={this.handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="tel">Tel.</option>
                    <option value="email">Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    value={message}
                    rows="12"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
