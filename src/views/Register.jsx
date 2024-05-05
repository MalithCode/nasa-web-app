import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap";
import Logo from "../assets/img/logo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.email]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission here (e.g., send data to backend)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="position-absolute t-2">
        <img width={230} src={Logo} alt="logo" />
      </div>
      <Row md={12} lg={12}>
        <Row md={12} lg={12}>
          <div
            className="pb-3 pt-3 d-flex justify-content-center align-items-center rounded-5 mt-5"
            style={{
              width: 535,
              backgroundColor: "rgba(235, 13, 224, 0.747)",
            }}
          >
            <div
              className="p-5 rounded-5"
              style={{
                backgroundColor: "rgba(34, 152, 207, 0.664)",
                width: 500,
              }}
            >
              <h2 className="text-center mb-5">Create your account</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="re-password">Password</Label>
                  <Input
                    type="password"
                    name="re-password"
                    id="re-password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </FormGroup>

                <div className="mt-5">
                  <Button className="rounded-3" color="primary" block>
                    Register
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Row>
      </Row>
      <div className="position-absolute b-5">
        <p className="text-center mt-5 h4">GalaxySTD</p>
      </div>
    </div>
  );
};

export default Register;
