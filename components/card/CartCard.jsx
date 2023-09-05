import { auth, db } from "@/firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { TiDeleteOutline } from "react-icons/ti";

function CartCard({ items }) {
  const [user] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const deleteItem = async (id) => {
    const uid = user.uid;
    const userRef = doc(db, "cart", uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      const cart = userData.cart;

      const updatedCart = cart.filter((item) => item.id !== id);

      await updateDoc(userRef, { cart: updatedCart });
      setShow(true);
    } else {
      console.error("User document not found!");
    }
  };

  return (
    <>
      {show && (
        <Alert onClose={() => setShow(false)} variant="primary" dismissible>
          Item Deleted Successfully
        </Alert>
      )}
      {items &&
        items.cart.map((item) => {
          return (
            <div key={item.id} className="d-flex gap-3 item-card">
              <Image src={item.imageUrl} alt="img" height={50} width={50} />
              <div className="">
                <div
                  style={{ width: "100%" }}
                  className="d-flex justify-content-between"
                >
                  <h1 style={{ fontSize: "16px" }}>{item.name}</h1>
                  <TiDeleteOutline
                    size={24}
                    color="red"
                    cursor={"pointer"}
                    onClick={() => deleteItem(item.id)}
                  />
                </div>

                <h1 style={{ fontSize: "12px" }}>Price PHP {item.price}</h1>
                <h1 style={{ fontSize: "12px" }}>Quantity {item.quantity}</h1>
                <div></div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default CartCard;
