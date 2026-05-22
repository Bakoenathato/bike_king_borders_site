document.addEventListener("DOMContentLoaded", () => {
  const cartCountElement = document.getElementById("cart-count");
  const addToCartButtons = document.querySelectorAll(
    ".add-to-cart-btn, .service-btn",
  );

  // Initialize the cart count from localStorage when the page loads
  let currentCount = parseInt(localStorage.getItem("globalCartCount")) || 0;
  cartCountElement.textContent = currentCount;

  // Hide the badge if the cart is completely empty (optional clean design touch)
  if (currentCount === 0) {
    cartCountElement.style.display = "none";
  }

  // Add click event listeners to all "Add to Cart" and "Book" buttons
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Increment the value
      currentCount++;

      // Save the updated value back to localStorage
      localStorage.setItem("globalCartCount", currentCount);

      // Update the UI
      cartCountElement.textContent = currentCount;
      cartCountElement.style.display = "block"; // Ensure it shows up if it was hidden

      // Subtle button animation feedback
      button.innerHTML = `<i class="fa-solid fa-circle-check"></i> Added!`;
      button.style.backgroundColor = "#28a745"; // Temporarily change button to green

      setTimeout(() => {
        // Reset button text after 1.5 seconds
        if (button.classList.contains("service-btn")) {
          button.innerHTML = "Book Now";
        } else {
          button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to Cart`;
        }
        button.style.backgroundColor = ""; // Resets to original CSS style
      }, 1500);
    });
  });
});
