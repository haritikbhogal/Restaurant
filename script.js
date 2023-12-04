document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // You can add code here to handle form submission, e.g., sending data to a server
        // For simplicity, let's just log the form data to the console
        const formData = new FormData(contactForm);
        console.log('Form data submitted:', formData);
    });
});
