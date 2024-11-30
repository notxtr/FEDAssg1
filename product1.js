// Array of product image URLs
const productImages = [
    "images/product1.jpg",
    "images/product1-2.jpg", // Second image
    "images/product1-3.jpg"  // Third image
];

let currentIndex = 0;

// Function to change the image when the left or right button is clicked
function changeImage(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + productImages.length) % productImages.length; // Move left (prev image)
    } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % productImages.length; // Move right (next image)
    }

    // Update the product image source
    document.getElementById('product-image').src = productImages[currentIndex];
}