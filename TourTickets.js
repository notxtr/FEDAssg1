// Function to update the quantity
function updateQuantity(ticketType, change) {
    const input = document.getElementById(ticketType + 'Quantity');
    let newQuantity = parseInt(input.value) + change;

    // Make sure the quantity is not negative
    if (newQuantity >= 0) {
        input.value = newQuantity;
        checkContinueButton(); // Check and update the button color after quantity change
    }
}

// Function to check if any counter has a value greater than 1
function checkContinueButton() {
    const youthQuantity = parseInt(document.getElementById("youthQuantity").value);
    const adultQuantity = parseInt(document.getElementById("adultQuantity").value);

    const continueButton = document.getElementById("continueBtn");

    // If either quantity is greater than 1, turn the button green
    if (youthQuantity > 0 || adultQuantity > 0) {
        continueButton.style.backgroundColor = "#00b123"; // Green
    } else {
        continueButton.style.backgroundColor = "red"; // Red
    }
}

// Initial check when the page loads
checkContinueButton();