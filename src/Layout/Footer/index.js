import React from 'react';
import iconService1 from '../../assets/images/icon-service-1.svg';
import iconService2 from '../../assets/images/icon-service-2.svg';
import iconService3 from '../../assets/images/icon-service-3.svg';
import iconService4 from '../../assets/images/icon-service-4.svg';
import iconService5 from '../../assets/images/icon-service-5.svg';
import iconService6 from '../../assets/images/icon-service-6.svg';
import iconService7 from '../../assets/images/icon-service-7.svg';
import iconService8 from '../../assets/images/icon-service-8.svg';

const Footer = () => {
  return (
    <footer className="App__footer p-b-xl m-t-xxl">
      <div className="container">
        <div className="row">
        <div className="col col-4">
          <h2 class="m-t-md m-b-md">Service Quality As A Core Value </h2>
          <p>Lorem impsum dolor sit amen hic major et empera</p>
        </div>  
        <div className="col col-8">
          <div className="services row">
            <div className="col col-6">
              <div className="flex flex-align-items-center">
                <img src={iconService1} alt="service" />
                <p>99,99% Uptime</p>
              </div>
              <div className="flex flex-align-items-center">
                <img src={iconService2} alt="service" />
                <p>Super Speeds</p>
              </div>
              <div className="flex flex-align-items-center">
                <img src={iconService3} alt="service" />
                <p>24/7 Customer Support </p>
              </div>
              <div className="flex flex-align-items-center">
                <img src={iconService4} alt="service" />
                <p>3 Days Money Back Guarantee</p>
              </div>
            </div>
            <div className="col col-6">
              <div className="flex flex-align-items-center">
                <img src={iconService5} alt="service" />
                <p>Major Cities & Many Countries</p>
              </div>
              <div className="flex flex-align-items-center">
                <img src={iconService6} alt="service" />
                <p>Unlimited Sessions</p>
              </div>
              <div className="flex flex-align-items-center">
                <img src={iconService7} alt="service" />
                <p>Any Proxy Type</p>
              </div>
              <div className="flex flex-align-items-center">
                <img src={iconService8} alt="service" />
                <p>Advanced Control Panel</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
