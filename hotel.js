
const hotels = [
    {
        name: 'Hotel Green Valley',
        price: '$100 per night',
        location: 'Paltan Bazar, Guwahati',
        contact: '+91 0000000000',
        image: 'https://via.placeholder.com/350x200.png?text=Hotel+Green+Valley',
        mapsLink: 'Paltan+Bazar+Guwahati'
    },
    {
        name: 'Hotel Blue Sky',
        price: '$120 per night',
        location: 'Pan Bazar, Guwahati',
        contact: '+91 000000000000',
        image: 'https://via.placeholder.com/350x200.png?text=Hotel+Blue+Sky',
        mapsLink: 'Pan+Bazar+Guwahati'
    }
];

const rooms = [
    {
        name: 'Luxury Suite',
        price: '$80 per night',
        location: 'Bhangagarh, Guwahati',
        contact: '+91 00000000000',
        image: 'https://via.placeholder.com/350x200.png?text=Luxury+Suite',
        mapsLink: 'Bhangagarh+Guwahati'
    }
];

const pgs = [
    {
        name: 'Cozy PG for Women',
        price: '$50 per month',
        location: 'Ganeshguri, Guwahati',
        contact: '+91 00000000000',
        image: 'https://via.placeholder.com/350x200.png?text=Cozy+PG+for+Women',
        mapsLink: 'Ganeshguri+Guwahati'
    }
];

// Function to Render Cards
function renderCards(data) {
    const contentDiv = document.getElementById('dynamic-content');
    if (!contentDiv) return;
    contentDiv.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Contact:</strong> ${item.contact}</p>
            <button class="navigate-btn" onclick="openGoogleMaps('${item.mapsLink}')">Navigate</button>
        `;
        contentDiv.appendChild(card);
    });
}

// Google Maps Navigation
function openGoogleMaps(location) {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank');
}

// Event Listeners for Navigation Buttons
const showHotelsBtn = document.getElementById('show-hotels');
const showRoomsBtn = document.getElementById('show-rooms');
const showPGsBtn = document.getElementById('show-pgs');

if (showHotelsBtn) {
    showHotelsBtn.addEventListener('click', () => {
        document.getElementById('section-title').innerText = 'Available Hotels';
        renderCards(hotels);
    });
}

if (showRoomsBtn) {
    showRoomsBtn.addEventListener('click', () => {
        document.getElementById('section-title').innerText = 'Available Rooms';
        renderCards(rooms);
    });
}

if (showPGsBtn) {
    showPGsBtn.addEventListener('click', () => {
        document.getElementById('section-title').innerText = 'Available PGs';
        renderCards(pgs);
    });
}

// Load Hotels by Default
document.addEventListener('DOMContentLoaded', () => {
    renderCards(hotels);
});
