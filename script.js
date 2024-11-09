// JavaScript for hamburger menu toggle
document.getElementById('navToggle').addEventListener('click', function () {
    // Toggle the 'active' class on the nav-links element
    document.getElementById('navLinks').classList.toggle('active');
});

// Function to show room details in the modal
function showRoomDetails(roomId) {
    const roomDetails = {
        room1: {
            title: "Single Room in Tekjuri",
            imgSrc: "room1.jpg",
            description: "A comfortable single room available in Tekjuri. Ideal for students and working professionals.",
            ownerName: "John Doe",
            ownerContact: "9876543210",
        },
        room2: {
            title: "Double Room in Rajbhor",
            imgSrc: "room2.jpg",
            description: "A spacious double room located in Rajbhor, with good ventilation and amenities.",
            ownerName: "Jane Smith",
            ownerContact: "9876543211",
        },
        room3: {
            title: "Special Room Near DEC",
            imgSrc: "room3.jpg",
            description: "A special room located near DEC with great access to local markets and transport.",
            ownerName: "Raj Kumar",
            ownerContact: "9876543212",
        },
        pg1: {
            title: "PG in Rajbhor",
            imgSrc: "pg1.jpg",
            description: "Comfortable PG in Rajbhor with all amenities included.",
            ownerName: "Pooja Patel",
            ownerContact: "9876543213",
        },
        hotel1: {
            title: "Hotel near Engineering College",
            imgSrc: "hotel1.jpg",
            description: "A budget-friendly hotel located near the Engineering College.",
            ownerName: "Hotel Manager",
            ownerContact: "9876543214",
        }
    };

    const room = roomDetails[roomId];
    if (room) {
        document.getElementById("room-title").innerText = room.title;
        document.getElementById("room-img").src = room.imgSrc;
        document.getElementById("room-description").innerText = room.description;
        document.getElementById("owner-name").innerText = "Owner: " + room.ownerName;
        document.getElementById("owner-contact").innerText = "Contact: " + room.ownerContact;

        // Open the modal
        document.getElementById("room-details-modal").style.display = "flex";
    }
}

// Close the modal
function closeModal() {
    document.getElementById("room-details-modal").style.display = "none";
}

// Book room functionality (placeholder)
function bookRoom() {
    alert("Room has been booked!");
}

// Typewriter Effect for the About Section
document.addEventListener('DOMContentLoaded', function () {
    const text = "The Room Finder website is a valuable tool for anyone looking to rent a room, stay in a paying guest (PG) facility, or book a hotel or restaurant. It helps users save time and effort by providing a centralized platform where they can browse high-quality images of available spaces and explore their options. With easy search functionality, users can quickly find rooms in their preferred locations without the hassle of physically visiting each property. The website also allows users to view detailed information and contact owners directly, streamlining the booking process. Whether you're a student, a professional, or a traveler, Room Finder makes finding the perfect place to stay simple, efficient, and convenient.";
    
    const typewriterElement = document.getElementById('typewriter');
    const words = text.split(" ");
    let index = 0;

    function typeWord() {
        if (index < words.length) {
            typewriterElement.innerHTML += words[index] + " ";
            index++;
            setTimeout(typeWord, 150); // Adjust typing speed here
        }
    }

    typeWord();
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("room-details-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
