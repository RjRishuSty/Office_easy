import React from "react";
import { useLocation } from "react-router-dom";
import HomeHero from "../HeroSectionwithPage/HomeHero";

const HeroSection = () => {
  const location = useLocation();
  const path = location.pathname;

  let heroContent;

  switch (path) {
    case "/":
      heroContent = <HomeHero/>
      break;

    case "/about":
      heroContent = (
        <div className="text-center p-10 bg-blue-50">
          <h1 className="text-4xl font-bold mb-4">About Office Easy</h1>
          <p className="text-lg text-gray-700">
            We're a team passionate about redefining commercial real estate.
            Office Easy is your go-to solution for seamless, customer-first
            property experiences in NCR.
          </p>
        </div>
      );
      break;

    case "/contact":
      heroContent = (
        <div className="text-center p-10 bg-green-50">
          <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
          <p className="text-lg text-gray-700">
            Have questions or ready to book a space? Reach out to us — we’re
            here to make the process simple and smooth.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Contact Us
          </button>
        </div>
      );
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
