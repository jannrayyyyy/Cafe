"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function FrontAbout() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="about-container">
      <div data-aos="zoom-in">
        <div className="about-content">
          <Image
            src="https://res.cloudinary.com/dkibnftac/image/upload/v1692330578/png4_1_zvglcv.png"
            alt="coffee"
            height={150}
            width={150}
          />
          <h2>
            Now enjoy a wonderful <br /> cafe dining experience <br /> and
            healthy food
          </h2>
          <div className="about-text">
            <h3>About Us</h3>
            <p>
              At Cafe Urban, we are passionate about serving the finest coffee
              and creating a warm, inviting space for our community to savor
              moments of caffeinated bliss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontAbout;
