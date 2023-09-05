import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function CoffeeCard({ coffees }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {coffees.map((item) => (
        <div data-aos="zoom-in" className="first-card">
          <Image src={item.imageUrl} alt={item.name} height={250} width={250} />
          <h5>{item.name}</h5>
          <p>{item.description.slice(0, 50)}</p>
          <h3>Just Php {item.price}</h3>
        </div>
      ))}
    </>
  );
}

export default CoffeeCard;
