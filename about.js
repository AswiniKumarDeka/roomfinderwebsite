// Contact Form Validation and Submission Handling
document.getElementById('navToggle').addEventListener('click', function () {
    // Toggle the 'active' class on the nav-links element
    document.getElementById('navLinks').classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("All fields are required.");
    } else {
        // Handle form submission (send the data to the server or handle via AJAX)
        alert("Thank you for contacting us, " + name + ". We will get back to you shortly.");
        // Optionally, you can reset the form after submission
        document.getElementById('contact-form').reset();
    }
});
