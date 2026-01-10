import { auth } from "../utils/firebase";
// import dotenv from "dotenv";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
  GithubAuthProvider,
} from "firebase/auth";

const API_BASE = process.env.REACT_APP_API_URL;
// Email + Password SignUp
export async function signUpWithEmail(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = await userCredential.user;
    const idToken = await user.getIdToken();

    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem("token", data.token);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// Email + password login
export async function loginWithEmail(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem("token", data.token);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// Google login
export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem("token", data.token);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// Github Login
export async function loginWithGithub(params) {
  try {
    const provider = new GithubAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    const idToken = await user.getIdToken();
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem("token", data.token);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// Sign Out
export async function userSignOut(params) {
  try {
    await signOut(auth);
    localStorage.removeItem("token");
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

//!! Delete User
export async function deleteUserAndSignOut() {
  try {
    await deleteUser(auth);
    localStorage.removeItem("token");
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
