const admin = require("firebase-admin");
require("dotenv").config();

const serviseAccount = JSON.parse(process.env.FIREBASE_SERVISE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviseAccount),
});

module.exports = admin;
