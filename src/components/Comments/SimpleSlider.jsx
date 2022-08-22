import {Comment} from './Comment/Comment'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      className: "center",
      centerMode: true,
      centerPadding: "75px"
    };
    return (
      <Slider {...settings}>
        <div>
          <Comment />
        </div>
        <div>
          <Comment />
        </div>
        <div>
          <Comment />
        </div>
        <div>
          <Comment />
        </div>
        <div>
          <Comment />
        </div>
        <div>
          <Comment />
        </div>
      </Slider>
      
    );
  }
}

