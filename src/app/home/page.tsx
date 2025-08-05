import React from 'react';
import Hero from './utils/Hero';
import '@/styles/global.scss';
import '@/styles/home.scss';
import Blogs from './utils/Blogs';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Blogs />
    </div>
  );
};

export default Home;
