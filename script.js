const reviews = document.querySelectorAll('.review');
let currentReviewIndex = 0;

function showReview() {
    reviews.forEach((review) => review.classList.remove('active'));
    reviews[currentReviewIndex].classList.add('active');
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length; // Cycle through reviews
}

// Initial showReview
showReview();

// Set interval to change review every 5 seconds (adjust as needed)
setInterval(showReview, 5000);
function togglePassword() {
    var passwordField = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.textContent = "visibility_off";
    } else {
        passwordField.type = "password";
        eyeIcon.textContent = "visibility";
    }
}
