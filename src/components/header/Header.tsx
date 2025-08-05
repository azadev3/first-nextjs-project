'use client'
import React from 'react';
import '@/styles/header.scss';
import Logo from './utils/Logo';
import Navbar from './utils/Navbar';
import { useMobile } from '@/hooks/useMobile';
import MobileHeader from './MobileHeader';

const Header: React.FC = () => {
  const { mobile } = useMobile();

  if (mobile) return <MobileHeader />
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
