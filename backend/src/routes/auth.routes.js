const express = require("express");
const router = express.Router();
const admin = require("../config/firebaseAdmin");

router.post("/login", async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) return res.status(400).json({ message: "ID Token Required" });

  try {
    const { uid, email } = await admin.auth().verifyIdToken(idToken);

    // TODO: Save user to firebase database

    res.json({ success: true, uid, email, token: idToken });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Invalid ID token" });
  }
});

module.exports = router;
