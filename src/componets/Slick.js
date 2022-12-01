import React from "react";
import Slider from "react-slick";
import '../styles/slick.css';
import * as s from "../styles/globalStyles";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: 5 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 2, left: 5 }}
        onClick={onClick}
      />
    );
  }
  

export default function SimpleSlider({ data }) {
    console.log(data)
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <Slider {...settings}>
            {data?.map(item =>
                (<s.ImageToggleRenderv2 image={item} />)
            )}
        </Slider>
    );
}