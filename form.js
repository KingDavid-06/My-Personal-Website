document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        }).then(
            function () {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            },
            function (error) {
                alert("Failed to send message.");
                console.error(error);
            }
        );
    });
});
