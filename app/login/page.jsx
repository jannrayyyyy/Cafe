"use client";
import ForgatModal from "@/components/card/ForgatModal";
import { auth, db } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "../style.css";

function page() {
  const [isLogin, setIslogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const register = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);

      const userDocRef = doc(db, "users", result.user.uid);
      await setDoc(userDocRef, {
        email: result.user.email,
        name: result.user.displayName || "user",
        photo:
          result.user.photoURL ||
          "data:image/png;base64,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",
        id: result.user.uid,
      });
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");
      router.push("/");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  const googleAuth = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const userDocRef = doc(db, "users", result.user.uid);
      await setDoc(userDocRef, {
        email: result.user.email,
        name: result.user.displayName || "user",
        photo:
          result.user.photoURL ||
          "https://res.cloudinary.com/dkibnftac/image/upload/v1690208728/deku_ggqhox.jpg",
        id: result.user.uid,
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const toggle = () => {
    setIslogin(!isLogin);
  };

  return (
    <>
      <ForgatModal setShow={setShow} show={show} handleClose={handleClose} />
      <div className="login-container">
        <div className="login-form">
          <form>
            <h1>{isLogin ? "Login" : "Register"}</h1>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            <p onClick={handleShow}>Forgat your password?</p>
            {isLogin ? (
              <>
                <button onClick={login}>Login</button>
                <p style={{ color: "white" }}>
                  Don't have an account? <span onClick={toggle}>Register</span>{" "}
                </p>
              </>
            ) : (
              <>
                <button onClick={register}>Register</button>
                <p style={{ color: "white" }}>
                  Already have an account? <span onClick={toggle}>Login</span>{" "}
                </p>
              </>
            )}
            <div className="divider">
              <hr /> OR <hr />
            </div>

            <button onClick={googleAuth} className="google">
              <Image
                src="https://res.cloudinary.com/dkibnftac/image/upload/v1692519138/google_1_x7xonu.png"
                alt="logo"
                width={35}
                height={35}
              />
            </button>
          </form>
        </div>
        <div className="login-header">
          <Image
            src="https://res.cloudinary.com/dkibnftac/image/upload/v1692518225/showcase-container_lreomu.png"
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default page;
