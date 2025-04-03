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
            "House Rental Management System for UMP": [
                "assets/images/laravel/final-yr-1.png",
                "assets/images/laravel/final-yr-2.png",
                "assets/images/laravel/final-yr-3.png",
                "assets/images/laravel/final-yr-4.png",
                "assets/images/laravel/final-yr-5.png",
                "assets/images/laravel/final-yr-6.png"
            ],
            "Practice 1": ["assets/images/hobby/restaurant.png"],
            "Practice 2": ["assets/images/hobby/flex-start.png"],
            "Practice 3": ["assets/images/hobby/property.png"]
        };

        // Check if the project has associated images
        if (projectImages[projectName]) {
            projectImages[projectName].forEach(imageSrc => {
                const imgElement = document.createElement("img");
                imgElement.src = imageSrc;
                imgElement.alt = projectName;
                imgElement.classList.add("rounded-lg", "shadow", "w-full", "mb-4");
                content.appendChild(imgElement);
            });

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
