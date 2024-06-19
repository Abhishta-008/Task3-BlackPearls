// JavaScript for Interactive Features

// Carousel initialization
$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000 // Change slide every 2 seconds
    });
});

// Accordion - Bootstrap handles this automatically via data attributes

// Additional interactive behavior can be added as needed
// JavaScript for Form Validation

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    // Validate Name
    const nameInput = document.getElementById('inputName');
    const nameHelp = document.getElementById('nameHelp');
    if (nameInput.value.trim() === "") {
        isValid = false;
        nameHelp.textContent = "Name is required.";
    } else {
        nameHelp.textContent = "";
    }
    
    // Validate Email
    const emailInput = document.getElementById('inputEmail');
    const emailHelp = document.getElementById('emailHelp');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        emailHelp.textContent = "Please enter a valid email address.";
    } else {
        emailHelp.textContent = "";
    }
    
    // Validate Message
    const messageInput = document.getElementById('inputMessage');
    const messageHelp = document.getElementById('messageHelp');
    if (messageInput.value.trim() === "") {
        isValid = false;
        messageHelp.textContent = "Message is required.";
    } else {
        messageHelp.textContent = "";
    }
    
    if (isValid) {
        // Proceed with form submission (e.g., send data to the server)
        alert('Form submitted successfully!');
    }
});
// JavaScript for Fetching API Data

const apiContent = document.getElementById('apiContent');

fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'card mb-3';
            postElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                </div>
            `;
            apiContent.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching API data:', error);
        apiContent.innerHTML = '<p class="text-danger">Failed to load data.</p>';
    });
<noscript>
    <div class="alert alert-warning" role="alert">
        It seems like JavaScript is disabled in your browser. Some features may not work as expected.
    </div>

</noscript>