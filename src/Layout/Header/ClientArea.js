import React from 'react';
import browserIco from '../../assets/images/browser.svg'

const ClientArea = ({className}) => {
  return (
    <div className={className}>
      <button className="btn m-l-sm">Client Area</button>
      <button className="btn m-l-sm blue-effect">
        <span class="icon">
          <img width="15" alt="" fill="#fff" src={browserIco} />
        </span>
        <span className="text">White label plan</span>
      </button>
    </div>
  )
}

export default ClientArea
