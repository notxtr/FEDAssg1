function updateQuantity(ticketType, change) {
    // Get the input element based on the ticket type
    const input = document.getElementById(ticketType + 'Quantity');
    let newQuantity = parseInt(input.value) + change;

    // Make sure the quantity is not negative
    if (newQuantity >= 0) {
        input.value = newQuantity;
    }
}