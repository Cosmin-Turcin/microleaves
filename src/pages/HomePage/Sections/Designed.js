import React from 'react';
import designed from '../../../assets/images/designed.svg';
import pin from '../../../assets/images/pin.png';

const Designed = () => {
  return (
    <div className="Designed p-b-xxl">
      <div className="container">
        <h3 className="flex flex-align-items-center flex-justify-content-center">
          <img width="13" className="m-r-sm" src={pin} alt="" />Find Out More
        </h3>
        <h2>Designed For All Your Proxy Service Needs</h2>
        <img src={designed} alt="" />
      </div>
    </div>
  )
}

export default Designed;
