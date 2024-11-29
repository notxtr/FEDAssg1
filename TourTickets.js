function updateQuantity(change) {
    const adultInput = document.getElementById("adultQuantity");
    let newQuantity = parseInt(adultInput.value) + change;
    if (newQuantity >= 0) {
        adultInput.value = newQuantity;
    }
}

function updateQuantityChild(change) {
    const childInput = document.getElementById("childQuantity");
    let newQuantity = parseInt(childInput.value) + change;
    if (newQuantity >= 0) {
        childInput.value = newQuantity;
    }
}