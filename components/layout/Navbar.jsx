"use client";
import { auth } from "@/firebase/firebase";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import ProfileModal from "./../card/ProfileModal";

function NavbarComponent() {
  const [user] = useAuthState(auth);
  const [scrolled, setScrolled] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const logout = async () => {
    try {
      const result = await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        // Adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ProfileModal modalShow={modalShow} setModalShow={setModalShow} />
      <Navbar
        expand="md"
        className={`navbar-dark mb-3 ${scrolled ? "scrolled" : ""}`}
        fixed="top"
        style={{ zIndex: 10 }}
      >
        <Container xxl="true">
          <Navbar.Brand
            href="/"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="logo">
              <Image
                src="https://res.cloudinary.com/dkibnftac/image/upload/v1692281000/logo_2_yfgy8e.png"
                alt="logo"
                width={100}
                height={80}
              />
              <h4>Café Urban</h4>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Café Urban
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 gap-3 pe-3">
                <Link href="/">Overview</Link>
                <Link href="/product">Menu</Link>
                <Link href={user ? "/cart" : "/login"}>Cart</Link>
                <Link href="/about">About</Link>
              </Nav>

              {user ? (
                <>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={
                      <Popover id={`popover-positioned-bottom`}>
                        <Popover.Body>
                          <Button
                            variant="dark"
                            onClick={() => setModalShow(true)}
                          >
                            Profile
                          </Button>
                          <Button variant="dark" onClick={logout}>
                            Logout
                          </Button>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <div
                      style={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <Image
                        src={user.photoURL ? user.photoURL : "/NOPFP.jpg"}
                        alt="user"
                        objectFit="cover"
                        width={40}
                        height={40}
                      />
                    </div>
                  </OverlayTrigger>
                </>
              ) : (
                <div></div>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
