import React from "react";
import "../SCSS Styles/MainNavbar.scss";

import fireIcon from "../assets/fire.png";
import saleIcon from "../assets/sale.png";
import giftIcon from "../assets/gift.png";
import userIcon from "../assets/card.png";
import searchIcon from "../assets/sea.png";
import logoStamp from "../assets/flower.png";
import user from "../assets/use.png";

import catAll from "../assets/f1.png";
import catBirthday from "../assets/f2.png";
import catVirtues from "../assets/f3.png";
import catLuxury from "../assets/f4.png";
import catLetterbox from "../assets/f5.png";

const categories = [
  { label: "All Flowers", img: catAll },
  { label: "Birthday", img: catBirthday },
  { label: "Virtues Flowers", img: catVirtues },
  { label: "Luxury", img: catLuxury },
  { label: "Letterbox", img: catLetterbox },
];

const MainNavbar = () => {
  return (
    <>
      {/* TOP NAV BAR */}
      <div className="main-navbar">
        <div className="main-navbar__menu">
          {/* HAMBURGER (iPad + mobile) */}
          <button className="main-navbar__menu-toggle" aria-label="menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* iPad/mobile */}
          <img
            src={user}
            alt="account"
            className="main-navbar__user-mobile"
          />

          {/* DESKTOP MENU ITEMS */}
          <div className="main-navbar__menu-items">
            <span>Flowers</span>

            <span className="highlight">
              Trending <img src={fireIcon} alt="trending" />
            </span>

            <span>Christmas Trees</span>
            <span>Gifts</span>

            <span className="highlight">
              Sale <img src={saleIcon} alt="sale" />
            </span>

            <span>Luxury</span>
            <span>Letterbox Flowers</span>
            <span>Plants</span>

            <span className="highlight">
              Gift Card <img src={giftIcon} alt="gift" />
            </span>

            <span>Funeral</span>
            <span>Wedding & Events</span>
            <span>School</span>
          </div>
        </div>

        {/* CENTER LOGO (responsive pe center) */}
        <div className="main-navbar__logo">
          <img src={logoStamp} alt="Flower Station" />
        </div>

        {/* RIGHT: user (desktop), cart, search */}
        <div className="main-navbar__icons">
          {/* USER ICON (desktop) */}
          <img
            src={userIcon}
            alt="account"
            className="main-navbar__icon main-navbar__user-desktop"
          />

          <span className="cart-count">0</span>

          <img
            src={searchIcon}
            alt="search"
            className="main-navbar__icon main-navbar__icon--search"
          />
        </div>
      </div>

      {/* MOBILE CATEGORY STRIP */}
      <div className="main-navbar__categories">
        {categories.map((cat) => (
          <button
            className="main-navbar__category"
            key={cat.label}
            type="button"
          >
            <div className="main-navbar__category-image">
              <img src={cat.img} alt={cat.label} />
            </div>
            <span className="main-navbar__category-label">{cat.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default MainNavbar;
