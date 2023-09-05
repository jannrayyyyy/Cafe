import React, { useEffect } from "react";
import CarouselCard from "./../card/CarouselCard";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="service-container">
      <div data-aos="zoom-out">
        <h1>EXQUISITE SERVICES</h1>
        <div className="services-carousel">
          <CarouselCard />
        </div>
      </div>
    </div>
  );
}

export default Services;
