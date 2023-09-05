import React, { useEffect, useState } from "react";
import CoffeeCard from "./../card/CoffeeCard";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";

function Exclusives() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const coffeeRef = collection(db, "coffees");
    const q = query(coffeeRef, where("isExclusive", "==", true), limit(3));

    const popular = onSnapshot(q, (snapshot) => {
      const coffeeData = snapshot.docs.map((doc) => doc.data());
      setCoffees(coffeeData);
    });

    return () => {
      popular(); // Unsubscribe from the snapshot listener when the component unmounts
    };
  }, []);

  return (
    <div className="cafe-container">
      <h1>Exclusives Coffee</h1>
      <div className="card-container">
        <CoffeeCard coffees={coffees} />
      </div>
    </div>
  );
}

export default Exclusives;
