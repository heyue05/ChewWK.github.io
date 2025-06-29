const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function (e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    successMsg.classList.add('show');

    contactForm.reset();
});