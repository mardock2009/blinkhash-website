import React from 'react';
import logoIcon from '../../assets/images/logo.png';
import './index.css';

export default function Header() {
  return (
    <div className="header-main">
      <div className="header-main__inner">
        <div className="header-main__logo">
          <img
            className="header-main__image"
            width="50px"
            src={logoIcon}
            alt=""
          />
          <div className="header-main__header">
            {"Blinkhash Documentation"}
          </div>
        </div>
        <div className="header-main__links">

        </div>
      </div>
    </div>
  )
}
