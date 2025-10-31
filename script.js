function validateForm() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (user === "" || pass === "") {
    error.textContent = "Please fill in both fields.";
    return false;
  } else if (user === "admin" && pass === "12345") {
    alert("Login Successful!");
    return true;
  } else {
    error.textContent = "Invalid username or password.";
    return false;
  }
}
