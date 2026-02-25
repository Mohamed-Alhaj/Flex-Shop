"use client";

import { useState,useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Link from "next/link";
import "../carousel.css";
const images = [
  { src: "/Images/laptops.webp", alt: "IMG1" },
  { src: "/Images/watches.jpg", alt: "IMG2" },
  { src: "/Images/mobiles.jpg", alt: "IMG3" },
  { src: "/Images/jewellery.jpg", alt: "IMG4" },
  { src: "/Images/decoration.webp", alt: "IMG5" },
];

export default function Carousel2() {

  const [selectedIndex, setSelectedIndex] = useState(3);

  const moveToSelected = (direction) => {
    if (direction === "next") {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    } else {
      setSelectedIndex((prev) =>
        prev === 0 ? images.length-1 : prev - 1
      );
    }
  };

  useEffect(() => {
  const interval = setInterval(() => {
    moveToSelected("next");
  }, 2000);

  return () => clearInterval(interval);
}, []);


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
          <Link href="/Jewellery" key={index}>
          <div className={getClassName(index)}>
            <div className="img-wrap">
              <span className="img-text">{image.alt}</span>
               <Typography sx={
                { fontSize: { xs: 18, sm: 22, md: 26, lg: 34 },
                 color:"#fff"
                  }
               } className="textOn">{index===0?"Laptops":index===1?"Watches":index===2?"Phones":index===3?"jewelry":index===4?"Decoration":index===5?"Beauty":""}</Typography>
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
          </Link>
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
