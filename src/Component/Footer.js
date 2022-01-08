import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faInstagram, faPinterestP, faYoutube, faLinkedin, faGit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Assets/Images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="index.html">
                                    <img src={Logo}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
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
                                    <a href="https://www.github.com/DevboyFaari" target='_blank' alt="github">
                                        <FontAwesomeIcon icon={faGit} />
                                    </a>    
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>Copyright - 2022<span> Developed by Faari Joye</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;