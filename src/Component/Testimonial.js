import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testimonialImg_1 from '../Assets/Images/testimonial/1.jpg';
import testimonialImg_2 from '../Assets/Images/testimonial/2.jpg';

class Testimonial extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            arrows: false,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };
        return (
            <div className="testimonial-area">
                <div className="container">
                    <div className="testimonial-active">
                   
                    </div>
                </div>
            </div>

            
            
           
        );
    }
}

export default Testimonial;            