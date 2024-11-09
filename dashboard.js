// Check if the user is logged in
if (!sessionStorage.getItem('userLoggedIn')) {
    window.location.href = 'login.html'; // Redirect to login page if not logged in
}

// Navigate to the selected section
function navigateToSection(section) {
    if (section === 'rooms') {
        window.location.href = 'rooms.html';
    } else if (section === 'pgs') {
        window.location.href = 'pgs.html';
    } else if (section === 'hotels') {
        window.location.href = 'hotels.html';
    }
}
