"use client";
import { auth, db } from "@/firebase/firebase";
import { doc, collection, getDoc, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CartCard from "../card/CartCard";
import Button from "react-bootstrap/Button";

function Cart() {
  const [user] = useAuthState(auth);
  const [cartItems, setCartItems] = useState(null);
  const [total, setTotal] = useState(null);

  const calculateTotal = () => {
    const calculatedTotal = cartItems.cart.reduce((accumulator, item) => {
      const itemTotal = item.price * item.quantity;
      return accumulator + itemTotal;
    }, 0);
    setTotal(calculatedTotal);
  };

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      const cartRef = doc(db, "cart", uid);

      const unsubscribe = onSnapshot(cartRef, (doc) => {
        if (doc.exists()) {
          setCartItems(doc.data());
        } else {
          console.log("No cart document for this user.");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  return (
    <div className="cart-container">
      <div className="cart-content">
        {cartItems?.cart.length > 0 ? (
          <>
            <div className="cart-cards ">
              <CartCard items={cartItems} />
            </div>
            <div className="checkout-section">
              <h1>Order Summary</h1>
              <div className="d-flex">
                <p>Total items</p>
                <p>{cartItems.cart.length}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {cartItems.cart.map((item) => (
                    <p key={item.id}>
                      {item.name} ({item.quantity}){" "}
                    </p>
                  ))}
                </div>
                <div style={{ textAlign: "end" }}>
                  {cartItems.cart.map((item) => (
                    <p key={item.id}>PHP {item.price * item.quantity}</p>
                  ))}
                </div>
              </div>
              <hr
                style={{
                  background: "#d3ad7f",
                  color: "#d3ad7f",
                  borderColor: "#d3ad7f",
                  height: "3px",
                }}
              />
              <div className="d-flex align-content-center">
                <div
                  style={{
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  <h3>Total</h3>
                  <p>
                    PHP{" "}
                    {cartItems?.cart?.reduce((accumulator, item) => {
                      const itemTotal = item.price * item.quantity;
                      return accumulator + itemTotal;
                    }, 0)}
                  </p>
                </div>
                <p
                  style={{
                    alignItems: "center",
                    marginTop: "24px",
                    marginRight: "12px",
                  }}
                >
                  Check out coming soon
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="no-cart">
            <h1>No Coffee Here</h1>
            <Image
              src="https://res.cloudinary.com/dkibnftac/image/upload/v1692969906/ilus-1_fa26w8.png"
              alt="img"
              width={600}
              height={600}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
