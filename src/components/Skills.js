
import react from "../assets/img/react.png";
import mongo from "../assets/img/mongo.png";
import node from "../assets/img/node.png";
import firebase from "../assets/img/firebase.png";
import bootstrap from "../assets/img/bootstrap.png";
import java from "../assets/img/java.png";
import git from "../assets/img/git.png";
import javascript from "../assets/img/javascript.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><strong>Technology Skills:</strong> Javascript, React, Node.js, MongoDB, Firebase, Bootstrap, Java, Git, Github, MVC, Payment Integration, </p>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                             
                             <div className="item">
                              <img src ={javascript} style={{ 
                              }} alt="Image" />
                              <h5>
                              Javascript</h5>
                            </div>


                            <div className="item">
                                <img src={react} className="mt-3" alt="Image" />
                                <h5> React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} style={{
                                    width: "200px",
                                    height: "100px"
                                
                                }} alt="Image" />
                                <h5><br/>
                                Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={java} style={{
                                    width: "150px",
                                  
                                }}  alt="Image" />
                                
                                <h5><br/>
                                <br/>
                                Java</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
