import React, { Component } from 'react';
import { faFacebook, faAccessibleIcon, faFacebookF, faTwitter, faInstagram, faPinterest, faPinterestP, faLinkedin, faGit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slides from '../Assets/Images/whitelady.jpg';

class Banner extends Component {
    render() {
        return(
            <section id="home" className="hero hero-slider-wrapper hero-style-1">
                <div className="hero-slider">
                    <div className="slide">
                        <div className="slider-image">
                            <img src={Slides}/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8 col-sm-12 slide-caption">
                                    <div className="slide-subtitle">
                                        <h4>I Am Faari Joye</h4>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Software and Web developer</h2>
                                    </div>
                                    <div className="btns">
                                        <a href="#contact" className="theme-btn go-contact-area">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy"><p>Writer and Graphics designer</p></div>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="https://www.twitter.com/faari_joye" target='_blank' alt="twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/faari_joye" target="_blank" alt="instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/faari-joye-719855219" target="_blank" alt="linkedin">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/devboyfaari" target='_blank' alt="github">
                                <FontAwesomeIcon icon={faGit} />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Banner;