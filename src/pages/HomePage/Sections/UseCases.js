import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


import case1 from '../../../assets/images/cases-1.svg';
import case2 from '../../../assets/images/cases-2.svg';
import case3 from '../../../assets/images/cases-3.svg';
import case4 from '../../../assets/images/cases-4.svg';
import case5 from '../../../assets/images/cases-5.svg';
import case6 from '../../../assets/images/cases-6.svg';
import case7 from '../../../assets/images/cases-7.svg';
import case8 from '../../../assets/images/cases-8.svg';

const UseCases = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="UseCases p-b-xxl">
      <div className="container">
        <h2>Perfect For All Use Cases</h2>
        <div className="hidden-xs">
          <div className="row UseCases__cases">
            <div className="col col-3 text-center">
              <img src={case1} alt="" />
              <h3>Price Comparation</h3>
            </div>
            <div className="col col-3 text-center">
              <img src={case2} alt="" />
              <h3>Ad Verification</h3>
            </div>
            <div className="col col-3 text-center">
              <img src={case3} alt="" />
              <h3>Sales Intelligence</h3>
            </div>
            <div className="col col-3 text-center">
              <img src={case4} alt="" />
              <h3>Brand Protection</h3>
            </div>
            <div className="col col-3 text-center">
              <img src={case5} alt="" />
              <h3>Web Property Testing</h3>
            </div>
            <div className="col col-3 text-center">
              <img src={case6} alt="" />
              <h3>SEO</h3>
            </div>
            <div className="col col-3 text-center">
              <img src={case7} alt="" />
              <h3>Online Shopping: Sneakers & Tickets</h3>
            </div>
            <div className="col col-3 text-center">
              <img src={case8} alt="" />
              <h3>Web Scaping</h3>
            </div>
          </div>
        </div>
        <div className="visible-xs p-l-lg p-r-lg">
          <Slider {...settings}>
            <div className="text-center">
              <img src={case1} alt="" />
              <h3>Price Comparation</h3>
            </div>
            <div className="text-center">
              <img src={case2} alt="" />
              <h3>Ad Verification</h3>
            </div>
            <div className="text-center">
              <img src={case3} alt="" />
              <h3>Sales Intelligence</h3>
            </div>
            <div className="text-center">
              <img src={case4} alt="" />
              <h3>Brand Protection</h3>
            </div>
            <div className="text-center">
              <img src={case5} alt="" />
              <h3>Web Property Testing</h3>
            </div>
            <div className="text-center">
              <img src={case6} alt="" />
              <h3>SEO</h3>
            </div>
            <div className="text-center">
              <img src={case7} alt="" />
              <h3>Online Shopping: Sneakers & Tickets</h3>
            </div>
            <div className="text-center">
              <img src={case8} alt="" />
              <h3>Web Scaping</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default UseCases
