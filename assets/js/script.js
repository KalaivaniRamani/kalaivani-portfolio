// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("hidden");
        });
    }
});

// Image Modal Logic
function openModal(projectName) {
    const modal = document.getElementById("imageModal");
    const content = document.getElementById("modalContent");

    if (modal && content) {
        content.innerHTML = ''; // Clear previous content

        // Map project names to corresponding image paths
        const projectImages = {
            "House Rental Management System for UMP": "assets/images/screenshot1.jpg",
            "Poxy Clinical V2": "assets/images/hobby/flex-start.png",
            "Practice 1": "assets/images/hobby/restaurant.png",
            "Practice 2": "assets/images/hobby/flex-start.png",
            "Practice 3": "assets/images/hobby/property.png"
        };

        // Check if the project has an associated image
        if (projectImages[projectName]) {
            content.innerHTML = `<img src="${projectImages[projectName]}" alt="${projectName}" class="rounded-lg shadow w-full">`;
            modal.classList.remove("hidden"); // Show the modal
        } else {
            alert("No screenshots available for this project.");
        }
    }
}


// Close Modal Function
function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
}

// function closeModal() {
//     const modal = document.getElementById("imageModal");
//     if (modal) {
//         modal.classList.add("hidden");
//     }
// }
