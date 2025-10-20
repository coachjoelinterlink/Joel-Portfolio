function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error-msg");

  if (input === "Joel2025!") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("portfolio").classList.remove("hidden");
  } else {
    error.textContent = "Incorrect password. Please try again.";
  }
}

// Allow pressing Enter to submit
document.getElementById("password").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});
