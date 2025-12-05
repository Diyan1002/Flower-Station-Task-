import React from "react";
import "../SCSS Styles/TopBar.scss";

import instagramIcon from "../assets/ins.png";
import facebookIcon from "../assets/fac.png";
import pinterestIcon from "../assets/pin.png";
import phoneIcon from "../assets/pho.png";
import linkedinIcon from "../assets/lin.png";
import mailIcon from "../assets/mai.png";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <a href="#">
          <img src={instagramIcon} alt="Instagram" className="topbar__icon" />
        </a>
        <a href="#">
          <img src={facebookIcon} alt="Facebook" className="topbar__icon" />
        </a>
        <a href="#">
          <img src={pinterestIcon} alt="Pinterest" className="topbar__icon" />
        </a>
        <a href="tel:+440000000000">
          <img src={phoneIcon} alt="Phone" className="topbar__icon" />
        </a>
        <a href="#">
          <img src={linkedinIcon} alt="LinkedIn" className="topbar__icon" />
        </a>
        <a href="mailto:info@example.com">
          <img src={mailIcon} alt="Email" className="topbar__icon" />
        </a>
      </div>

      <div className="topbar__center">
        We deliver the same day in London, even on Sundays.
      </div>

      <div className="topbar__right">
        <a href="#" className="topbar__link">Delivery</a>
        <span className="topbar__separator">|</span>
        <a href="#" className="topbar__link">Find A Store</a>
        <span className="topbar__separator">|</span>
        <a href="#" className="topbar__link">FAQs</a>
        <span className="topbar__separator">|</span>
        <a href="#" className="topbar__link">Sign in</a>
      </div>
    </div>
  );
};

export default TopBar;
