import { auth } from "@/firebase/firebase";
import { updateProfile } from "firebase/auth";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Alert, Button, ListGroup, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../app/style.css";
import { db } from "@/firebase/firebase";
import {
  doc,
  updateDoc,
  onSnapshot,
  collection,
  getDoc,
} from "firebase/firestore";

function ProfileModal({ modalShow, setModalShow }) {
  const [alert, setAlert] = useState(false);
  const [user] = useAuthState(auth);
  const [edit, setEdit] = useState(false);
  const [editDetails, setEditDetails] = useState({
    displayName: "",
    photoURL: "",
    email: "",
  });

  const update = async (e) => {
    e.preventDefault();
    await updateProfile(auth.currentUser, {
      displayName: editDetails.displayName,
      photoURL: editDetails.photoURL,
      email: editDetails.email,
    }).then(() => {
      updateDoc(doc(db, "users", auth.currentUser.uid), {
        name: editDetails.displayName,
        photo: editDetails.photoURL,
        email: editDetails.email,
      });
    });
    setAlert(!alert);
  };

  useEffect(() => {
    if (user) {
      setEditDetails({
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      });
    }
  }, [user]);

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Profile</Modal.Title>
      </Modal.Header>
      <Alert show={alert} variant="success">
        <p>Updating Profile Success</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setAlert(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      {edit ? (
        <Modal.Body>
          {user && (
            <>
              <form onSubmit={update}>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  onChange={(e) =>
                    setEditDetails({ ...editDetails, email: e.target.value })
                  }
                  value={editDetails.email}
                />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={editDetails.displayName}
                  onChange={(e) =>
                    setEditDetails({
                      ...editDetails,
                      displayName: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Enter your ImageUrl"
                  value={editDetails.photoURL}
                  onChange={(e) =>
                    setEditDetails({ ...editDetails, photoURL: e.target.value })
                  }
                />
                <Button type="submit" variant="secondary">
                  Submit
                </Button>
              </form>
            </>
          )}
        </Modal.Body>
      ) : (
        <Modal.Body>
          {user && (
            <>
              {" "}
              <Image
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://res.cloudinary.com/dkibnftac/image/upload/v1690208728/deku_ggqhox.jpg"
                }
                alt="user"
                width={45}
                height={45}
                className="mb-2"
              />
              <ListGroup>
                <ListGroup.Item variant="secondary">
                  {user.displayName}
                </ListGroup.Item>
                <ListGroup.Item variant="secondary">
                  {user.email}
                </ListGroup.Item>
              </ListGroup>
            </>
          )}
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setEdit(!edit)}>
          Edit
        </Button>
        <Button variant="secondary" onClick={() => setModalShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfileModal;
