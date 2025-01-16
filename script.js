document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form values
    const name = document.getElementById("student-name").value;
    const date = document.getElementById("appointment-date").value;
    const time = document.getElementById("appointment-time").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if (!name || !date || !time) {
        alert("Please fill in all required fields.");
        return;
    }

    // Display confirmation message
    const confirmationMessage = `
        <p>Appointment booked successfully!</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Appointment Date:</strong> ${date}</p>
        <p><strong>Appointment Time:</strong> ${time}</p>
        <p><strong>Additional Information:</strong> ${message || "None"}</p>
    `;
    document.getElementById("confirmation-message").innerHTML = confirmationMessage;

    // Reset the form after submission
    document.getElementById("appointment-form").reset();
});
