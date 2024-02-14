import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "@firebase/auth";
const Header = () => {
  const [verified, setVerified] = useState(false);

  async function handleAuth() {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      setVerified(res.user.emailVerified);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(verified);

  return (
    <div className="nav">
      <h2>
        <span>My</span>Ginau
      </h2>
      <div className="menus">
        <ul className="nav-list">
          <li className="nav-link">
            <a href="#home">Home</a>
          </li>
          <li className="nav-link">
            <a href="#Course">Course</a>
          </li>
          <li className="nav-link">
            <a href="#About">About</a>
          </li>
          <li className="nav-link">
            <a href="#Blog">Blog</a>
          </li>
          <li className="nav-link">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
      {verified ? ( // Simplified conditional rendering
        <p></p>
      ) : (
        <>
          <button className="btn1" onClick={handleAuth}>
            Log In
          </button>
          <button className="btn2" onClick={handleAuth}>
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};
export default Header;
