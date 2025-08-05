import React from 'react';
import '@/styles/header.scss';
import Logo from './utils/Logo';
import Navbar from './utils/Navbar';

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <div className="header">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
