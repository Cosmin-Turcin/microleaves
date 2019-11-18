import React from 'react';
import illustration from '../../../assets/images/header.svg';

const LargestProxy = () => {
  return (
    <div className="LargestProxy p-b-xxl">
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <img className="full-width" src={illustration} alt="" />
          </div>
          <div className="col col-6">
            <h2>The Largest Proxy Network In The World</h2>
            <h3>Get instant access to Residential & Datacenter IPs</h3>
            <p>automatic order   -   money back guarantee   -   24/7 support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LargestProxy;
