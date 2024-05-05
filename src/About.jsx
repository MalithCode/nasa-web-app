import { Col, Row } from "reactstrap";
import NavBar from "./componets/NavBar";

function About() {
  console.log("h & w :", window.innerHeight, window, innerWidth);
  return (
    <div className="about-container">
      <Row>
        <NavBar />
      </Row>
      <br />

      <Row className="mt-5 res-w-80">
        <div className="text-white p-5">
          <Row className="mt-5">
            <Col sm={12} md={6} lg={6}>
              <h1 className="">About Us</h1>
              <h3 className="">
                Welcome to our Mars Rover Explorer application!
              </h3>
            </Col>

            <Col sm={12} md={6} lg={6}>
              <h1 className="">Our Mission</h1>
              <h3 className="">
                {/* eslint-disable */}
                At Mars Rover Explorer, our mission is to bring the wonders of
                Mars closer to you. We're passionate about space exploration and
                believe that everyone should have access to the fascinating
                discoveries being made on the Red Planet.
              </h3>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12} md={6} lg={6}>
              <h1 className="">What We Do</h1>
              <h3 className="">
                Using NASA's public APIs, we collect and present the latest
                images and information captured by the Mars rovers. Our
                application allows you to explore these images, learn about the
                Martian terrain, and delve into the details of each rover's
                mission.
              </h3>
            </Col>

            <Col sm={12} md={6} lg={6}>
              <h1 className="">Why Mars?</h1>
              <h3 className="">
                Mars has long captured the imagination of humanity. It's the
                next frontier for human exploration and holds the key to
                understanding our place in the universe. By studying Mars, we
                can learn more about the history of our solar system, the
                potential for life beyond Earth, and the possibilities for
                future human colonization.
              </h3>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={12} md={6} lg={6}>
              <h1 className="">Our Team</h1>
              <h3 className="">
                We are a team of passionate developers and space enthusiasts
                dedicated to creating an immersive and educational experience
                for our users. With expertise in frontend development, backend
                integration, and a love for all things space-related, we strive
                to make Mars Rover Explorer the go-to destination for Mars
                exploration.
              </h3>
            </Col>

            <Col sm={12} md={6} lg={6}>
              <h1 className="">Connect With Us</h1>
              <h3 className="">
                {/* eslint-disable */}
                We'd love to hear from you! Whether you have feedback,
                suggestions, or just want to say hello, feel free to reach out
                to us through our contact form or social media channels.
              </h3>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
}

export default About;
