import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={
              {
                height: "100px",
                width: "200px",
                objectFit: "cover",
                borderRadius: "50%",
              }
            } />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/akash-shah-17053522a/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/coding-destini"><i class="fa-brands fa-github" style={{color:"white", fontSize:"20px"}} ></i></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
