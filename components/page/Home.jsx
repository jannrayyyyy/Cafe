"use client";

import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Contacts from "../layout/Contacts";
import Exclusives from "../layout/Exclusives";
import FrontAbout from "../layout/FrontAbout";
import PopularMenu from "../layout/PopularMenu";
import Services from "../layout/Services";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="hero">
          <div className="hero-content">
            <h1>
              Rosted Coffee <br /> For you
            </h1>
            <p>
              The coffee is brewed by first roasting the green coffee <br />{" "}
              coals in a brazier. Given an oppotunity to sample.
            </p>
            <div className="hero-btn">
              {user ? (
                <div></div>
              ) : (
                <Link href="/login">
                  <Button variant="dark" className="normal-btn">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <FrontAbout />
      <PopularMenu />
      <Exclusives />
      <Services />
      <Contacts />
      <Footer />
    </>
  );
}

export default HomePage;
