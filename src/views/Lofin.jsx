import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap";
import Logo from "../assets/img/logo.png";
import { SignInUser } from "../service/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    SignInUser(email, password);
    const status = await localStorage.getItem("status");
    if (status === "success") {
      navigator("/");
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="position-absolute t-5">
        <img width={250} src={Logo} alt="logo" />
      </div>
      <Row md={12} lg={12}>
        <Row md={12} lg={12}>
          <div
            className="pb-3 pt-3 d-flex justify-content-center align-items-center rounded-5 mt-md-5"
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
              <h2 className="text-center mb-5">Login to your account</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <div className="mt-5">
                  <Button
                    type="submit"
                    className="rounded-3"
                    color="primary"
                    block
                  >
                    Log in
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

export default Login;
