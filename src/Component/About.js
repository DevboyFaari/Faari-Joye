import React, { Component } from 'react';
import aboutImg from '../Assets/Images/hackin.jpg';

class About extends Component {
    render() {
        return (
            <div className="hx-about-style-1" id="about">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
                            <div className="hx-about-content">
                                <div className="hx-site-title">
                                    <span>Expert Web Developer & Designer</span>
                                    <h2>About Me</h2>
                                </div>
                                <p>I am a full stack web developer, with skills in a number of
                                 computer technologies as well as principles and techniques of 
                                 construction and maintainance of web applications. I'm also adept at 
                                 conveying complex technical information to a variety of professional 
                                 and lay audiences in a clear and understandable manner. Some technologies I'm versed in 
                                 include React+Redux,
                                 Vuejs, GruntJs, Firebase and fire store, MongoDb, NodeJs, Express, GraphQL amongst others.</p>
                                <p>I can translate wireframes and designs to rich visually compelling web apps as well as manage state using managers like Apollo GraphQL and RxJS.</p>
                                
                                <div className="btns">
                                    <a href="#" className="theme-btn">Download CV</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="hx-about-img">
                                <img src={aboutImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;