
import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  message.textContent = "Logging in...";

  try {
    await signInWithEmailAndPassword(auth, email, password);

    message.style.color = "green";
    message.textContent = "Login successful!";

    window.location.href = "dashboard.html";

  } catch (error) {
    message.style.color = "red";

    if (error.code === "auth/invalid-credential") {
      message.textContent = "Email or password is incorrect.";
    } else {
      message.textContent = error.message;
    }
  }
});
