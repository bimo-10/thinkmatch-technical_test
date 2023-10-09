const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const msg = document.querySelector("#msg");

  const success = document.querySelector(".title");

  if (email.value !== "admin@example.com" || password.value !== "password123") {
    msg.innerHTML = "Email atau password yang anda masukan salah. Coba lagi";
  }

  success.innerHTML = "Login Berhasil!";
});
