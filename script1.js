window.onload = function() {
    // Example room data
    var rooms = [
        { name: 'Deluxe Room', price: '$100 per night', details: 'Spacious and well-furnished.' },
        { name: 'Standard Room', price: '$75 per night', details: 'Basic amenities included.' },
        // Add more room data here
    ];

    var roomsList = document.getElementById('rooms-list');

    rooms.forEach(function(room) {
        var roomItem = document.createElement('div');
        roomItem.classList.add('room-item');
        roomItem.innerHTML = `
            <h3>${room.name}</h3>
            <p>${room.price}</p>
            <p>${room.details}</p>
        `;
        roomsList.appendChild(roomItem);
    });
};
