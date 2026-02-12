"use client";

import NavBar from "./Components/NavBar";
import Carousel2 from "./Components/Carousel2";
import Products from "./Components/Products";
import Categories from "./Components/Categories";
import Features from "./Components/Features";
import About from "./Components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Carousel2 />
      <Products />
      <Categories />
      <Features/>
      <About/>
    </>
  );
}
