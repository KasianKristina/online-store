import styles from './styles.module.css'
import {Comment} from './Comment/Comment'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
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

