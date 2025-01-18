function login(event){
    event.preventDefault();
    var password = document.querySelector("input[name='password']").value;
    var username = document.querySelector("input[name='username']").value;
    var login = document.getElementById('login');
    if(username === 'admin' && password === 'admin'){
        window.location.href='index.html'; // Redirect to the main page
    }else if(username != null || password != null){
        alert("Incorrect username or password.");
    }
}