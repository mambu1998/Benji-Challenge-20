import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/contact-form";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../App.css";

function Contact() {
  return (
    <div className="container">
      <Jumbotron fluid className="p-5 mb-0">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Wanna contact me</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow bg-light mb-5">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <h4 style={{ color: "#F06543" }}>Contact Info</h4>
                <p>
                  <a href="mailto:mambufrancis1998@gmail.com">
                    <span className="pr-3">
                      <FaEnvelope />
                    </span>
                    mambufrancis1998@gmail.com
                  </a>
                </p>

                <p>
                  <a
                    href="https://github.com/mambu1998/mambu1998"
                    target="_blank"
                  >
                    <span className="pr-3">
                      <FaGithub />
                    </span>
                    mambu1998
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/mambu-francis-594943148/
"
                    target="_blank"
                  >
                    <span className="pr-3">
                      <FaLinkedin />
                    </span>
                    mambu-francis-594943148
                  </a>
                </p>
              </Container>
            </Col>

            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4 style={{ color: "#F06543" }}>Send me a Message</h4>
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Contact;
