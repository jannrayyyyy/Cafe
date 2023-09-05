'use client'
import React, { useEffect, useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap';
import '../style.css'
import ProductCard from '../../components/card/ProductCoffeeCard';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase/firebase';
import ProductPastriesCard from './../../components/card/ProductPastriesCard';


function Page() {
    const [tab, setTab] = useState("coffee");
    const [show, setShow] = useState(false);
    const [coffee, setCoffee] = useState(null);
    const [pastries, setPastries] = useState(null);

    const toggleCoffee = () => {
        setTab("coffee")
    }

    const togglepastries = () => {
        setTab("pastries")
    }


    useEffect(() => {
        const coffee = onSnapshot(collection(db, "coffees"), (snapshot) =>
            setCoffee(snapshot.docs.map((e) => e.data()))
        );
        return () => {

            coffee();
        };
    }, []);

    useEffect(() => {
        const pastries = onSnapshot(collection(db, "pastries"), (snapshot) =>
            setPastries(snapshot.docs.map((e) => e.data()))
        );
        return () => {

            pastries();
        };
    }, []);

    return (
        <div className='product-container'>
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 100 }}>
                <Toast
                    bg="dark"
                    onClose={() => setShow(false)}
                    show={show}
                    delay={2000}
                    autohide
                >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        <p style={{ color: "#fff" }}>Woohooo! you have added product into your cart.</p>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            <div className='product-content'>
                <div className='d-flex justify-content-center tabs align-items-center'>
                    <button onClick={toggleCoffee} style={{ background: tab == "coffee" ? "#27374D" : "transparent" }}>Coffee</button>
                    <button onClick={togglepastries} style={{ background: tab == "pastries" ? "#27374D" : "transparent" }}>Pastries</button>
                </div>
                {tab == "coffee" ? <div className='tab d-flex justify-content-center' >
                    <ProductCard show={show} setShow={setShow} item={coffee} />
                </div>
                    : <div className='tab d-flex justify-content-center' >
                        <ProductPastriesCard show={show} setShow={setShow} item={pastries} />
                    </div>}
            </div>
        </div>
    )
}

export default Page