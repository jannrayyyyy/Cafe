"use client";
import { auth } from "@/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ForgatModal({ show, handleClose ,setShow}) {
  const [email, setEmail] = useState("");

    const reset = async (e) => {
      e.preventDefault()
    try {
        const result = await sendPasswordResetEmail(auth, email);
        setShow(!show)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Forgat Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={reset}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ForgatModal;
