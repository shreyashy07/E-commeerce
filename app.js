document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".searchInput");
  const searchButton = document.querySelector(".searchButton");

  // Products on Nike's official store with their URLs
  const productsOnNike = {
    "air force": "https://www.nike.com/t/air-force-1-07-mens-shoes-KvGH5f",
    "air jordan": "https://www.nike.com/t/air-jordan-1-retro-high-og-mens-shoes-nZPHK6",
    "blazer": "https://www.nike.com/t/blazer-low-77-vintage-mens-shoes-QSh9lh",
    "crater": "https://www.nike.com/t/crater-impact-mens-shoes-7sjd2l",
    "hippie": "https://www.nike.com/t/hippie-mens-shoes-wq8d6l"
  };

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      alert("Please enter a product name!");
      return;
    }

    // Check if product exists in the Nike catalog
    const productUrl = productsOnNike[query];

    if (productUrl) {
      // Redirect to Nike's product page
      window.open(productUrl, "_blank");
    } else {
      // If not found, prompt user to visit the Nike homepage
      if (confirm("Product not found. Would you like to visit Nike's official store?")) {
        window.open("https://www.nike.com/", "_blank");
      }
    }
  }

  // Search on button click
  searchButton.addEventListener("click", handleSearch);

  // Search on Enter key press
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
});
// Handle Product Selection
let selectedProduct = {
  name: '',
  price: 0
};

function selectProduct(productName, price) {
  selectedProduct.name = productName;
  selectedProduct.price = price;

  // Display selected product
  document.getElementById('selectedProduct').innerHTML = `
    <p>You have selected: <strong>${productName}</strong></p>
    <p>Price: $${price}</p>
  `;

  // Show checkout button
  document.getElementById('checkoutButton').style.display = 'inline-block';
}

// Show Payment Options
function showPaymentOptions() {
  document.getElementById('paymentOptions').style.display = 'block';
}

// Choose Payment Method
function choosePaymentMethod(paymentMethod) {
  alert(`You have selected ${paymentMethod} for payment. Your order has been placed!`);
  // You can redirect to an order confirmation page here
  window.location.href = 'order-confirmation.html'; // Replace with actual confirmation page
}

