import React from "react";
import { Form, useNavigate } from "react-router-dom";
import styles from "./LoginCard.module.css";
import { auth } from "../../utils/firebase";
import {
  loginWithEmail,
  loginWithGithub,
  loginWithGoogle,
  signUpWithEmail,
} from "../../services/authServices";

const LoginCard = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();
    if (result.success) navigate("/");
    else alert(result.error);
  };

  const handleGithubLogin = async () => {
    const result = await loginWithGithub();
    if (result.success) navigate("/");
    else alert(result.error);
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    const email = e.target.mail.value;
    const password = e.target.pwd.value;

    const result = await signUpWithEmail(email, password);

    if (result.success) navigate("/");
    else if (result.error === "auth/email-already-in-use") {
      const result = await loginWithEmail(email, password);
      if (result.success) navigate("/");
      else alert(result.error);
    } else alert(result.error);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.flexContainer}>
        <form onSubmit={handleEmailSignUp}>
          <input name="mail" type="email" placeholder="Email" required />
          <input name="pwd" type="password" placeholder="Password" required />
          <button type="submit">Login with Email</button>
          <button onClick={handleGoogleLogin}>Login With Google</button>
          <button onClick={handleGithubLogin}>Login With Github</button>
        </form>
      </div>
      {/* <div className={styles.sidePanel}>Div 2</div> */}
    </div>
  );
};

export default LoginCard;
