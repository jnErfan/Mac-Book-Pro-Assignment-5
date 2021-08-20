// Java Script Start \\

// Extra Memory Cost \\
function memoryCost(addition) {
    const memoryPriceCost = document.getElementById('Memory-Cost');
    if (addition == true) {
        memoryPriceCost.innerText = 0;
    }
    else {
        memoryPriceCost.innerText = 180;
    }
    // Calling  Total Price \\
    calculateTotal()
}

// 8GB Unified Memory Button Click EventListener \\
document.getElementById('8GB-Memory-Price').addEventListener('click', function () {
    // Calling Function \\
    memoryCost(true);
})
// 16GB Unified Memory Button Click EventListener \\
document.getElementById('16GB-Memory-Price').addEventListener('click', function () {
    // Calling Function \\
    memoryCost(false);
})


// Extra Storage Cost \\
function extraStorageCost(addition) {
    const storagePriceCost = document.getElementById('Storage-Cost');
    if (addition == '256BG') {
        storagePriceCost.innerText = 0;
    }
    else if (addition == '512GB') {
        storagePriceCost.innerText = 100;
    }
    else {
        storagePriceCost.innerText = 180;
    }
    // Calling  Total Price \\
    calculateTotal()
}

// 256GB SSD Storage \\
document.getElementById('256GB-Storage').addEventListener('click', function () {
    // Calling Function \\
    extraStorageCost('256BG');
})
// 512GB SSD Storage \\
document.getElementById('512GB-Storage').addEventListener('click', function () {
    // Calling Function \\
    extraStorageCost('512GB');
})
// 1TB SSD Storage \\
document.getElementById('1TB-Storage').addEventListener('click', function () {
    // Calling Function \\
    extraStorageCost('1TB');
})


// Delivery Charge \\
function deliveryOption(addition) {
    const deliveryCharge = document.getElementById('Delivery-Charge');
    if (addition == 'Free') {
        deliveryCharge.innerText = 0;
    }
    else {
        deliveryCharge.innerText = 20;
    }

    // Calling  Total Price \\
    calculateTotal()
}

// Friday, Aug 27 Free Prime Delivery \\
document.getElementById('Free-Delivery').addEventListener('click', function () {
    // Calling Function \\
    deliveryOption('Free');
})
// Early Delivery Charge $20 \\
document.getElementById('Paid-Delivery').addEventListener('click', function () {
    // Calling Function \\
    deliveryOption('Paid');
})


// Total Price WhithOut Promo Code \\
function calculateTotal() {
    // Bringing The Id's \\
    const fixedPriceText = document.getElementById('Fixed-Price').innerText;
    const memoryCostText = document.getElementById('Memory-Cost').innerText;
    const storageCostText = document.getElementById('Storage-Cost').innerText;
    const deliveryChargeText = document.getElementById('Delivery-Charge').innerText;

    // Convert Text To Number \\
    const fixedPrice = parseInt(fixedPriceText);
    const memoryCost = parseInt(memoryCostText);
    const storageCost = parseInt(storageCostText);
    const deliveryCharge = parseInt(deliveryChargeText);

    // All Prices Addition Total \\
    const totalPrice = fixedPrice + memoryCost + storageCost + deliveryCharge;
    const subTotalPrice = document.getElementById('Sub-Total').innerText = totalPrice;

    // Set TotalPrice innerText Equal To Sub Total Price 
    document.getElementById('Grand-Total').innerText = subTotalPrice;

}


// Promo Code Use Event Handler 
document.getElementById('Promo-Button').addEventListener('click', function () {

    // It has been brought with ID \\
    const promoFildInput = document.getElementById('Promo-Fild');

    const subTotal = document.getElementById('Sub-Total').innerText;

    // When Use Promo Code Discount 20% Of Total Price \\
    if (promoFildInput.value == 'stevekaku') {
        const get20PersentDiscount = (80 / 100) * subTotal;
        document.getElementById('Grand-Total').innerText = get20PersentDiscount;
    }

    // Error Handling \\
    else {
        alert('Invalid Promo Code')
    }

    // Clear Input Fild \\
    promoFildInput.value = '';
})
