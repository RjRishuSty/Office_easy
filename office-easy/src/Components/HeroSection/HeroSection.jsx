import React from "react";
import { useLocation } from "react-router-dom";
import HomeHero from "../HeroSectionwithPage/HomeHero";
import AboutHero from "../HeroSectionwithPage/AboutHero";
import ContactHero from "../HeroSectionwithPage/ContactHero";

const HeroSection = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log("herosection",path)

  let heroContent;

  switch (path) {
    case "/":
      heroContent = <HomeHero />;
      break;

    case "/about":
      heroContent = <AboutHero />;
      break;

    case "/contact":
      heroContent = <ContactHero/>;
      break;

    default:
      heroContent = (
        <div className="text-center p-10 bg-gray-200">
          <h1 className="text-3xl font-bold">Welcome to Office Easy</h1>
        </div>
      );
      break;
  }

  return <div>{heroContent}</div>;
};

export default HeroSection;
