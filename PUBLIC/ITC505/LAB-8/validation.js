// Input sanitization to prevent XSS
function sanitizeInput(input) {
    let temp = document.createElement("div");
    temp.innerText = input;
    return temp.innerHTML;
}

// Form validation
document.getElementById("secureForm").addEventListener("submit", function (e) {
    let firstName = sanitizeInput(document.getElementById("firstName").value);
    let lastName = sanitizeInput(document.getElementById("lastName").value);
    let email = sanitizeInput(document.getElementById("email").value);
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Check for empty fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        e.preventDefault();
        return;
    }

    // Validate email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});
