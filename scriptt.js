// Function to hide all pages and show only the selected page
function showPage(pageId) {
    // Get all elements with the class 'page'
    const pages = document.querySelectorAll('.page');
    
    // Loop through all pages and hide them
    pages.forEach(page => {
        page.style.display = 'none'; // Hide all pages
    });
    
    // Show the selected page
    document.getElementById(pageId).style.display = 'block'; 
}

// Event listeners for the navigation links
function goToHome() {
    showPage('homePage');
}

function goToReviews() {
    showPage('reviewsPage');
}

function goToCart() {
    showPage('cartPage');
}

function goToBestSellers() {
    showPage('bestSellersPage');
}

function goToNew() {
    showPage('newPage');
}

function goToCustomization() {
    showPage('customizationPage');
}
// Function to display tracking info on click or hover
function trackOrder() {
    const trackingInfo = document.getElementById('trackingInfo');
    trackingInfo.classList.remove('hidden'); // Show tracking info
}

// Add event listeners for 'click' and 'mouseover' on the track order button
const trackButton = document.querySelector('button[onclick="trackOrder()"]');

// Display message when clicked
trackButton.addEventListener('click', trackOrder);

// Display message when hovered
trackButton.addEventListener('mouseover', trackOrder);


// Add this function to your script file (scriptt.js)
function goToCheckout() {
    const pizzaType = document.getElementById('pizzaType').value;
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Calculate base price based on pizza type
    let basePrice = 0;
    switch (pizzaType) {
        case 'Margherita':
            basePrice = 10;
            break;
        case 'Pepperoni':
            basePrice = 12;
            break;
        case 'Veggie':
            basePrice = 11;
            break;
        case 'BBQ Chicken':
            basePrice = 14;
            break;
    }

    // Add extra cost based on size
    if (size === 'medium') {
        basePrice += 2; // Add $2 for medium
    } else if (size === 'large') {
        basePrice += 4; // Add $4 for large
    }

    // Calculate toppings cost
    let toppingsCost = 0;
    if (document.getElementById('cheese').checked) toppingsCost += 1;
    if (document.getElementById('olives').checked) toppingsCost += 1;
    if (document.querySelector('input[value="Pepperoni"]').checked) toppingsCost += 1.5;
    if (document.querySelector('input[value="Mushrooms"]').checked) toppingsCost += 1;
    if (document.querySelector('input[value="Onions"]').checked) toppingsCost += 1;

    // Calculate total price
    const totalPrice = (basePrice + toppingsCost) * quantity;

    // Update the order summary
    document.getElementById('summaryText').textContent = `You ordered ${quantity} ${size} ${pizzaType} pizza(s) with a total of $${totalPrice.toFixed(2)}.`;

    // Show the checkout page
    showPage('checkoutPage');
}

// Utility function to show specific pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

        
    


// Add initial logic to show only the home page when the site is loaded
document.addEventListener("DOMContentLoaded", function() {
    showPage('homePage'); // Show only the home page by default
});
