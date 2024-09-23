// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
});

//for contact info
(function() {
    // Initialize EmailJS with your User ID (public key)
    emailjs.init("QqO3iOtMRvL2fpFuD");
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way

    // Collect the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare the data to send
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("service_npjcv1e", "template_0fh4ipl", templateParams)
        .then(function(response) {
            alert('Email sent successfully!');
            // Optionally reset the form
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send email. Please try again.');
        });
}