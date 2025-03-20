// Navigation bar toggle
function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    const menuToggle = document.querySelector('.menu-toggle');
    menuItems.classList.toggle('active');
    menuToggle.classList.toggle('active');

    if (menuItems.classList.contains('active')) {
        menuItems.style.display = 'flex';
        menuItems.style.opacity = '1';
        menuItems.style.transform = 'translateY(0)';
    } else {
        menuItems.style.opacity = '0';
        menuItems.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            menuItems.style.display = 'none';
        }, 300);
    }
}

// Mobile menu toggle
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Sending form data');
    
    fetch('backend/contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new FormData(this)
    })
    .then(response => {
        console.log('Form processed');
        window.location.href = 'submitting.html';
    });
});





// Form validation
function validateForm() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('mail').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!fname || !lname || !email || !phone || !message) {
        alert('Please fill in all fields');
        return false;
    }
    return true;
}
