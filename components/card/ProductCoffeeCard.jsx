"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase";

import Aos from "aos";
import "aos/dist/aos.css";

function ProductCard({ item, show, setShow }) {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    Aos.init();
  }, []);

  const addToCart = async (product) => {
    if (!user) {
      router.push("/login");
    } else {
      const uid = user.uid;
      const userRef = doc(db, "cart", uid);
      try {
        const userSnap = await getDoc(userRef);
        const cart = [];
        if (userSnap.exists()) {
          const userData = userSnap.data();
          cart.push(...userData.cart);
        }
        const productIndex = cart.findIndex((item) => item.id === product.id);
        if (productIndex === -1) {
          // Add the product to the cart with a quantity of 1
          cart.push({ ...product, quantity: 1 });
        } else {
          // Increase the quantity of the product in the cart by 1
          cart[productIndex].quantity += 1;
        }
        await setDoc(userRef, { cart });
        setShow(!show);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      {item &&
        item.map((items) => (
          <div data-aos="zoom-in" key={items.id}>
            <Card
              className="d-flex product-card flex-column align-items-center border border-dark"
              style={{
                width: "14rem",
                height: "350px",
                padding: "10px",
                backgroundColor: "#191919",
              }}
            >
              <Image
                src={items.imageUrl}
                alt="imageproduct"
                height={200}
                width={200}
                style={{ height: "180px", borderRadius: "10px" }}
              />
              <Card.Body
                className="d-flex flex-column justify-content-center"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <h6>{items.name}</h6>
                  <p>PHP {items.price}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <Link href={`/product/${items.id}`}>
                    <Button variant="secondary" className="card-button">
                      Explore
                    </Button>
                  </Link>
                  <Button
                    style={{ backgroundColor: "#d3ad7f" }}
                    variant="dark"
                    className="card-button"
                    onClick={() => addToCart(items)}
                  >
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
    </>
  );
}

export default ProductCard;
