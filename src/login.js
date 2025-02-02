
function login(event) {
    event.preventDefault();
    var username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;
    const error = document.getElementById('error');
    if(!(username === "admin" && password === "admin")) {
      var errorField = document.getElementById("error-field");
      errorField.classList.add("errorField")
      // errorField.innerHTML = "<br>Incorrect Password or Username!<br>";
      errorField.textContent = "Incorrect Password or Username!";
    } else {
      window.location.href="index.html";
    }
  }
  