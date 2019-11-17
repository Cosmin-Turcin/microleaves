import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ClientArea from './ClientArea';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
  return (
    <header className="App__header">
      <div className="container flex-justify-content-space-between flex-align-items-center">
        <Navbar />
        <ClientArea className="flex-order-3 text-right hidden-xs" />
        <div className="App__logo">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
