import React from 'react';
import Hero from './utils/Hero';
import Blogs from './utils/Blogs';
import '@/styles/global.scss';
import '@/styles/home.scss';
import '@/styles/responsive.scss';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Blogs />
    </div>
  );
};

export default Home;
