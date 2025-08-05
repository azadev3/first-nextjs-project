import React from 'react';
import Logo from './utils/Logo';
import { BsList } from 'react-icons/bs';
import { CgClose } from "react-icons/cg";

const MobileHeader: React.FC = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <header className="mobile-header">
      <Logo />
      {toggle ? (
        <CgClose
          className="toggle-button"
          onClick={() => setToggle(prev => !prev)}
        />
      ) : (
        <BsList
          className="toggle-button"
          onClick={() => setToggle(prev => !prev)}
        />
      )}
      <div className={`dropdown-menu ${toggle ? 'active' : ''}`}>
        <div className="head">
            <Logo />
            <h2>Menu</h2>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
