"use client";

import { useState } from "react";
import { Container } from "@mui/material";
import "../carousel.css"; // CSS تبع التأثي
const images = [
  { src: "https://cdn.shopify.com/s/files/1/0643/9262/6408/files/image7_3aaa8d56-05f0-4c42-b64f-4da859a33e98.png?v=1708781837", alt: "IMG1" },
  { src: "https://m.media-amazon.com/images/I/71tiGEHRTmL._UF894,1000_QL80_.jpg", alt: "IMG2" },
  { src: "https://a.storyblok.com/f/165154/1456x816/50eaf9d668/01_hero_product-variants-the-guide-to-diversifying-offerings.png/m/", alt: "IMG3" },
  { src: "https://5.imimg.com/data5/SELLER/Default/2024/2/392237709/AO/CQ/LJ/9277553/all-cosmetic-and-beauty-products-500x500.png", alt: "IMG4" },
  { src: "https://image.made-in-china.com/250f0j00EYRGJfbCRQlI/What-Are-the-Most-Trending-E-Commerce-Products-Dominating-2025-.jpg", alt: "IMG5" },
];

export default function Carousel2() {
  const [selectedIndex, setSelectedIndex] = useState(3);

  const moveToSelected = (direction) => {
    if (direction === "next") {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    } else {
      setSelectedIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  const getClassName = (index) => {
    const relativeIndex =
      (index - selectedIndex + images.length) % images.length;

    if (relativeIndex === 0) return "selected";
    if (relativeIndex === 1) return "next";
    if (relativeIndex === 2) return "nextRightSecond";
    if (relativeIndex === images.length - 1) return "prev";
    if (relativeIndex === images.length - 2) return "prevLeftSecond";
    return relativeIndex > 2 ? "hideRight" : "hideLeft";
  };

  return (
    <Container>
    <div id="carousel-area">
      <div id="carousel">
        {images.map((image, index) => (
          <div className={getClassName(index)} key={index}>
            <div className="img-wrap">
              <span className="img-text">{image.alt}</span>
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button className="icon-btn" onClick={() => moveToSelected("prev")}>
          ‹
        </button>
        <button className="icon-btn" onClick={() => moveToSelected("next")}>
          ›
        </button>
      </div>
    </div>
    </Container>
  );
}
