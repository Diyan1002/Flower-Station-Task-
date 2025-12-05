import React, { useState, useEffect } from "react";
import "../SCSS Styles/HeroBanner.scss";

import logoStamp from "../assets/flower.png";

import heroAutumn from "../assets/autumn.png";
import heroGifting from "../assets/gifting.png";
import heroChristmas from "../assets/christmas.png";
import heroSale from "../assets/salee.png";

const SLIDE_DURATION = 5000; // 5s

const slides = [
  {
    key: "AUTUMN",
    label: "AUTUMN",
    titleLines: ["Hand-Picked", "Flowers By Us,", "Perfect For You"],
    buttonText: "All Flowers",
    note:
      "Order by 5pm for same day London* delivery\nor by 3pm for next day delivery UK*",
    bgColor: "#FFF0C8",
    image: heroAutumn,
    // default (desktop / ipad / non-mobile colors)
    titleColor: "#222222",
    btnBg: "#59670d",
    btnText: "#ffffff",
    noteColor: "#555555",
  },
  {
    key: "GIFTING",
    label: "GIFTING",
    titleLines: ["Beautiful Gifts,", "Made With", "Love"],
    buttonText: "Gift Collection",
    note:
      "Order by 5pm for same day London* delivery\nor by 3pm for next day delivery UK*",
    bgColor: "#FFC2B9",
    image: heroGifting,
    titleColor: "#000000",
    btnBg: "#000000",
    btnText: "#ffffff",
    noteColor: "#000000",
  },
  {
    key: "CHRISTMAS",
    label: "CHRISTMAS",
    titleLines: ["Christmas ", "Blooms, Made ", "for You"],
    buttonText: "Christmas Collection",
    note:
      "Order by 5pm for same day London* delivery or by 3pm for next day delivery UK*",
    bgColor: "#26380F",
    image: heroChristmas,
    titleColor: "#ffffff",
    btnBg: "#ffffff",
    btnText: "#000000",
    noteColor: "#ffffff",
  },
  {
    key: "SALE FLOWERS",
    label: "SALE FLOWERS",
    titleLines: ["Stunning", "Flowers at", "Lower Prices"],
    buttonText: "Sale Flowers",
    note:
      "Order by 5pm for same day London* delivery or by 3pm for next day delivery UK*",
    bgColor: "#D25D35",
    image: heroSale,
    titleColor: "#ffffff",
    btnBg: "#ffffff",
    btnText: "#000000",
    noteColor: "#ffffff",
  },
];

const SLIDE_DURATION_MS = SLIDE_DURATION;

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile viewport (max-width: 767px)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 767px)");

    const updateIsMobile = () => {
      setIsMobile(mq.matches);
    };

    updateIsMobile(); // initial
    mq.addEventListener("change", updateIsMobile);

    return () => mq.removeEventListener("change", updateIsMobile);
  }, []);

  const activeSlide = slides[activeIndex];

  // ✅ mobile-only override for AUTUMN & GIFTING
  const isMobileOverrideSlide =
    isMobile &&
    (activeSlide.key === "AUTUMN" || activeSlide.key === "GIFTING");

  const titleColor = isMobileOverrideSlide
    ? "#ffffff"
    : activeSlide.titleColor;

  const btnBg = isMobileOverrideSlide ? "#ffffff" : activeSlide.btnBg;

  const btnText = isMobileOverrideSlide ? "#000000" : activeSlide.btnText;

  // note color mobile pe bhi same chhodte hain (tum nahi bole change karna)
  const noteColor = activeSlide.noteColor;

  // auto slide
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="hero-banner"
      style={{ "--slide-duration": `${SLIDE_DURATION_MS}ms` }}
    >
      {/* LEFT (logo + text + button) */}
      <div
        className="hero-banner__left"
        style={{ backgroundColor: activeSlide.bgColor }}
      >
        <div className="hero-banner__left-inner">
          {/* flower logo */}
          <div className="hero-banner__logo">
            <img src={logoStamp} alt="Flower Station" />
          </div>

          {/* text + button */}
          <div className="hero-banner__content">
            <h1
              className="hero-banner__title"
              style={{ color: titleColor }}
            >
              {activeSlide.titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>

            <button
              className="hero-banner__btn"
              style={{
                backgroundColor: btnBg,
                color: btnText,
              }}
            >
              {activeSlide.buttonText}
            </button>

            <p
              className="hero-banner__note"
              style={{ color: noteColor }}
            >
              {activeSlide.note.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT (hero image + animated links) */}
      <div className="hero-banner__right">
        <img
          src={activeSlide.image}
          alt={activeSlide.label}
          className="hero-banner__image"
        />

        <div className="hero-banner__links">
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              className={
                "hero-link" +
                (index === activeIndex ? " hero-link--active" : "")
              }
              onClick={() => handleNavClick(index)}
            >
              <span className="hero-link__label">{slide.label}</span>

              <span className="hero-line">
                <span className="hero-line__fill" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
