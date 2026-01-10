import React, { useState } from "react";
import { userSignOut } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

// import style from "./D";
import style from "./Dashboard.module.css";
import useAndroidShake from "../../hooks/Shake";

const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false);

  // I like to move it move it
  const [showPopup, setShowPopup] = useState(false);

  useAndroidShake({
    threshold: 90,
    cooldown: 1500,
    onShake: () => setShowPopup(true),
  });

  const navigate = useNavigate();

  const handleUserLogout = async () => {
    const result = await userSignOut();
    if (result.success) navigate("/");
    else alert(result.error);
  };
  return (
    <>
      {showPopup && (
        <div className={style.overlay}>
          <div className={style.popup}>
            <h1>feedback popup</h1>
            <br />
            <h3>Shake detected</h3>

            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <Navbar />
      <h1>This is the Dashboard{showPopup ? "true" : "false"}</h1>
      <button
        id="btn"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        Click me
      </button>
      <p>{isClicked ? "True" : "False"}</p>

      <button onClick={handleUserLogout}>Log out</button>
    </>
  );
};

export default HomePage;
