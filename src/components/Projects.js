import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import meal from '../assets/projects/meal.png';
import mediton from '../assets/projects/mediton.png';
import issuetracker from '../assets/projects/issueTracker.png';
import facebook from '../assets/projects/facebook.png';


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Backendprojects = [
    {
      title: "Issue Tracker",
      description: "Issue Tracker for Efficient Project Management",
      imgUrl: issuetracker,
      projectUrl: "https://issue-tracker-j75r.onrender.com/"
    },
    {
      title: "Mediton",
      description: "Mediton for Meditation for elderly people",
      imgUrl: mediton,
      projectUrl: "https://github.com/coding-destini/Mediton"
    },
  ];
  
  const Frontendprojects = [
    {
      title: "Meal App",
      description: "Meal App for finding recipes",
      imgUrl: meal,
      projectUrl: "https://my-meal-eight.vercel.app/"
    },
  ];
  
  const FullStackprojects = [
    {
      title: "Facebook Clone",
      description: "Facebook Clone for social media",
      imgUrl: facebook,
      projectUrl: "https://github.com/coding-destini/MetaBook"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"I have a strong track record of creating innovative software solutions. Notable projects include an 'Issue Tracker' with comprehensive project management features, a healthcare application called 'MediTone' for medication reminders and emergency alerts, a 'Facebook'-inspired project with user interactions, and a 'Meal Website' for meal information access. "</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center 
                  " style={{
                    cursor: "pointer",
                  }}  id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"  >Frontend </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Backend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full Stack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Frontendprojects.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Backendprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          FullStackprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
