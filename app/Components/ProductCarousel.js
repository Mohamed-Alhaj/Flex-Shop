"use client";

import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import Loader from "./Loader";

export default function ProductCarousel({ product }) {
  const images = product?.images || [];
  const [loadedCount, setLoadedCount] = useState(0);

  const allLoaded = images.length > 0 && loadedCount === images.length;

  useEffect(() => {
    if (!allLoaded) return;

    let instance;

    import("bootstrap").then(({ Carousel }) => {
      const el = document.getElementById("carouselExampleAutoplaying");
      if (!el) return;

      instance = Carousel.getOrCreateInstance(el, {
        interval: 2000,
        ride: "carousel",
      });
    });

    return () => instance?.dispose();
  }, [allLoaded]);

  return (
    <Box sx={{ backgroundColor: "primary.main", position: "relative"}}>
      {/* 🔵 Loader فوق الصور */}
      {!allLoaded && <Loader />}

      <Container maxWidth="sm">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          style={{ visibility: allLoaded ? "visible" : "hidden"}}
        >
          <div className="carousel-inner">
            {images.map((img, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  onLoad={() => setLoadedCount((c) => c + 1)}
                  onError={() => setLoadedCount((c) => c + 1)} // مهم
                  className="d-block w-100 p-3"
                  alt="product"
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-slide="prev"
            data-bs-target="#carouselExampleAutoplaying"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-slide="next"
            data-bs-target="#carouselExampleAutoplaying"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </Container>
    </Box>
  );
}
