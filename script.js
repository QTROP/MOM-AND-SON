function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");

  const correctPassword = "123456"; // Change this to your real password

  if (input === correctPassword) {
    message.style.color = "lightgreen";
    message.textContent = "Access granted. Loading files...";
    setTimeout(() => {
      window.location.href = "files.html"; // replace with your file page
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Incorrect password. Try again.";
  }
}
