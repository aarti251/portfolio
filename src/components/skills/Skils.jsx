/*import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import {faHtml5,} from "@fortawesome/free-solid-svg-icons";*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Skill.scss";
import React from "react";
import { useRef } from "react";


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
    <section className="skill" id="skills" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" >
                        <h2>Skills</h2>
                        <hr className="styled-hr"/>

                        <p>I am a full-stack developer with expertise in both front-end and back-end development.

Front-End Development
HTML, CSS, and JavaScript: I build dynamic and interactive user interfaces using these core web technologies.
React.js: I leverage this popular JavaScript library to create efficient and reusable UI components.
Back-End Development
Node.js: I utilize this JavaScript runtime to develop scalable and high-performance server-side applications.
Express.js: I employ this Node.js framework to build robust APIs and web applications.
MongoDB and MySQL: I proficiently utilize both NoSQL and relational databases to store and manage data effectively.
My comprehensive skill set enables me to design, develop, and deploy complete web applications from the ground up. I am adept at collaborating with cross-functional teams to deliver exceptional software solutions.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true}  autoPlay={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                          
                               <img src="./HM.png" alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                  <img src="./css-logo.png" alt="Image" /> 
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                  <img src="./js.png" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                   <img src="./r.png" alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                   <img src="./node.png" alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                   <img src="./sql.png" alt="Image" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                   <img src="./mongo.png" alt="Image" />
                                <h5>mongoDB</h5>
                            </div>
                            <div className="item">
                                   <img src="./PHP.webp" alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                   <img src="./seo.png" alt="Image" />
                                <h5>SEO</h5>
                            </div>
                            <div className="item">
                                   <img src="./webdesign.png" alt="Image" />
                                <h5>WebDesign</h5>
                            </div>
                            <div className="item">
                                   <img src="./logo.png" alt="Image" />
                                <h5>LogoDesign</h5>
                            </div>
                            <div className="item">
                                   <img src="./data.png" alt="Image" />
                                <h5>DataAnalysis</h5>
                            </div>
                            <div className="item">
                                   <img src="./sta.png" alt="Image" />
                                <h5>Statistical Modeling</h5>
                            </div>
                            <div className="item">
                                   <img src="./machine.png" alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                   <img src="./python.png" alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                   <img src="./logo.png" alt="Image" />
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                   <img src="./nlp.png" alt="Image" />
                                <h5>NLP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
  
}

