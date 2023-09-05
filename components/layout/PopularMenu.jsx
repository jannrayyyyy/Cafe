"use client";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function PopularMenu() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const coffeeRef = collection(db, "coffees");
    const q = query(coffeeRef, where("isPopular", "==", true), limit(8));

    const popular = onSnapshot(q, (snapshot) => {
      const coffeeData = snapshot.docs.map((doc) => doc.data());
      setCoffees(coffeeData);
    });

    return () => {
      popular(); // Unsubscribe from the snapshot listener when the component unmounts
    };
  }, []);

  return (
    <div className="menu-container">
      <div className="menu-content">
        <div data-aos="zoom-in">
          <div className="menu-img">
            <Image
              src="https://res.cloudinary.com/dkibnftac/image/upload/v1692281507/png2_3_w4xven.png"
              alt="coffee"
              height={200}
              width={200}
              className="menu-beans"
            />
            <Image
              src="https://res.cloudinary.com/dkibnftac/image/upload/v1692281507/Group_48_rjb5tb.png"
              alt="coffee"
              height={400}
              width={700}
              className="menu-coffee"
            />
            <Image
              src="https://res.cloudinary.com/dkibnftac/image/upload/v1692281507/png2_2_ustcsg.png"
              alt="coffee"
              height={200}
              width={200}
              className="menu-beans"
            />
          </div>
        </div>
      </div>
      <div data-aos="fade-in" className="menu-table">
        <h1>Popular Menu</h1>
        <div className="grid-container">
          <Container className="menu-grid">
            <Row className="justify-content-center">
              {coffees.map((item) => (
                <>
                  <Col
                    data-aos="zoom-in"
                    className="col d-flex justify-content-start"
                    sm={12}
                    md={5}
                  >
                    <Link href={`/product/${item.id}`}>
                      <Image
                        src={item.imageUrl}
                        alt="coffee"
                        height={70}
                        width={70}
                      />
                    </Link>
                    <div style={{ marginLeft: "24px" }}>
                      <h4>{item.name}</h4>
                      <h5 style={{ fontSize: "14px" }}>
                        Php {item.price}
                      </h5>{" "}
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default PopularMenu;
