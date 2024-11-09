// Toggle between Register and Login forms
function toggleForms() {
    var registerForm = document.getElementById('register-container');
    var loginForm = document.getElementById('login-container');
    
    // Toggle the active class
    registerForm.classList.toggle('active');
    loginForm.classList.toggle('active');
}

// Initially show the login form
document.getElementById('login-container').classList.add('active');
