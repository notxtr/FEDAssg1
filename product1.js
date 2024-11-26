// Array of product image URLs
const productImages = [
    "https://img.amiami.com/images/product/review/241/GOODS-04451318_01.jpg",
    "https://img.amiami.com/images/product/review/241/GOODS-04451318_02.jpg", // Second image
    "https://img.amiami.com/images/product/bonus/241/GOODS-04451318_01.jpg"  // Third image
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