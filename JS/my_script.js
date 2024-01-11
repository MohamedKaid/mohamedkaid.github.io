
document.addEventListener('DOMContentLoaded', function() {
    // Function to create a 3D floating object
    function createFloatingObject() {
        const object = document.createElement('div');
        object.classList.add('floating-object');

        // Set random size
        size = Math.floor(Math.random() * (350 + 1) + 10)
        object.style.width = `${size}px`;
        object.style.height = `${size}px`;

        // Set initial position
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        object.style.left = `${initialX}px`;
        object.style.top = `${initialY}px`;

        

        // Set z-index to keep the objects in the background
        object.style.zIndex = -1;

        // Get the container element
        const container = document.getElementById('floating-objects-container');

        // Check if the container element exists before appending
        if (container) {
            container.appendChild(object);

            // Animate the object's position
            animateBackAndForth(object);
        } else {
            console.error("Container element not found.");
        }
    }

    // Function to animate a back-and-forth floating object
    function animateBackAndForth(object) {
        const speedX = 1.5; // Adjust the speed as needed
        const speedY = 1.5; // Adjust the speed as needed
        let directionX = 1;
        let directionY = 1;

        function moveObject() {
            const rect = object.getBoundingClientRect();
            let newX = rect.left + speedX * directionX;
            let newY = rect.top + speedY * directionY;

            // Reverse direction if the object reaches the window boundaries
            if (newX < 10 || newX + rect.width > window.innerWidth) {
                directionX *= -1;
            }

            if (newY < 10 || newY + rect.height > window.innerHeight) {
                directionY *= -1;
            }

            newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
            newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));

            object.style.left = `${newX}px`;
            object.style.top = `${newY}px`;

            // Request the next animation frame
            requestAnimationFrame(moveObject);
        }

        // Start the animation
        requestAnimationFrame(moveObject);
    }

    // Create a specified number of 3D floating objects
    const numberOfObjects = 4;
    for (let i = 0; i < numberOfObjects; i++) {
        createFloatingObject();
    }


});
