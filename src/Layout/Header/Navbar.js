import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import burger from '../../assets/images/burger.svg'

const navbarLinks = [
  {
    text: 'Contact',
    to: '/contact'
  },
  {
    text: 'Support',
    to: '/support'
  },
  {
    text: 'Blog',
    to: '/blog'
  },
  {
    text: 'Order',
    to: '/order'
  },
];

const Navbar = () => {
  const [isNavabarVisible, setIsNavabarVisible] = useState(false)
  return (
    <navbar>
      <div className={`navbar__links ${isNavabarVisible && 'navbar__links--active'}`}>
        {navbarLinks.map(({text, to}) => <Link to={to}>{text}</Link>)}
        <span className="navbar__action navbar__action-close" onClick={() => setIsNavabarVisible(false)}>
          x
        </span>
      </div>
      <span className="navbar__action" onClick={setIsNavabarVisible}>
        <img width="20" src={burger} alt="" />
      </span>
    </navbar>
  )
}

export default Navbar
