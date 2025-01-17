// Function to toggle dark mode
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

// Event listener for the vector.png image click
// Place this code at the appropriate place in your JavaScript file or script tag

// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function() {
  // Select the vector image within the #hero element with the .dark class
  var vectorImage = document.querySelector("#hero .dark img");
  if (vectorImage) {
    // Attach the event listener to the vector image
    vectorImage.addEventListener("click", toggleDarkMode);
  }
});