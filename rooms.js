
const rooms = [
    {
        image: "https://via.placeholder.com/350x200.png?text=Deluxe+Room",
        name: "Deluxe Room",
        price: "$100 per night",
        location: "Guwahati, Assam",
        owner: "Mr. Sharma",
        contact: "+91 9876543210",
        details: "Spacious room with a beautiful city view, WiFi, and complimentary breakfast."
    },
    {
        image: "https://via.placeholder.com/350x200.png?text=Standard+Room",
        name: "Standard Room",
        price: "$75 per night",
        location: "Jorhat, Assam",
        owner: "Ms. Das",
        contact: "+91 9123456789",
        details: "Cozy room with all basic amenities, ideal for short stays."
    },
    {
        image: "https://via.placeholder.com/350x200.png?text=Family+Suite",
        name: "Family Suite",
        price: "$150 per night",
        location: "Tezpur, Assam",
        owner: "Mr. Hazarika",
        contact: "+91 9988776655",
        details: "Perfect for families, includes a large living area and kitchen."
    },
    {
        image: "https://via.placeholder.com/350x200.png?text=Budget+Room",
        name: "Budget Room",
        price: "$50 per night",
        location: "Dibrugarh, Assam",
        owner: "Mr. Ahmed",
        contact: "+91 8899001122",
        details: "Affordable stay with essential amenities, close to the railway station."
    }
];

// Function to render rooms on the page
function displayRooms() {
    const roomsList = document.getElementById('rooms-list');
    
    rooms.forEach(room => {
        const roomItem = document.createElement('div');
        roomItem.classList.add('room-item');

        roomItem.innerHTML = `
            <img src="${room.image}" alt="${room.name}" class="room-img">
            <div class="room-details">
                <h3>${room.name}</h3>
                <p><strong>Price:</strong> ${room.price}</p>
                <p><strong>Location:</strong> ${room.location}</p>
                <p><strong>Owner:</strong> ${room.owner}</p>
                <p><strong>Contact:</strong> ${room.contact}</p>
                <p>${room.details}</p>
                <a href="tel:${room.contact}" class="contact-btn">Contact Owner</a>
            </div>
        `;
        
        roomsList.appendChild(roomItem);
    });
}

// Load rooms on page load
window.onload = displayRooms;
