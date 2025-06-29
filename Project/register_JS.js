const form = document.getElementById('register-form');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const strength = document.getElementById('strength');

form.addEventListener('submit', function (e) {
    let hasError = false;

    // Reset errors
    document.querySelectorAll('input, select').forEach(el => {
        el.classList.remove('error');
    });

    // Check required fields
    ['fullname', 'email', 'dob', 'programmes', 'qualification', 'password', 'confirm'].forEach(id => {
        const el = document.getElementById(id);
        if (!el.value.trim()) {
            el.classList.add('error');
            hasError = true;
        }
    });

    // Check email format
    const email = document.getElementById('email').value;
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('email').classList.add('error');
        hasError = true;
    }

    const requiredFields = form.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(field => {
    if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
        field.classList.add('error');
        if (!hasError) {
            field.scrollIntoView({ behavior: 'smooth', block: 'center' });
            hasError = true;
        }
    } 
    
    else {
        field.classList.remove('error');
    }
    });

    // Check passwords match
    if (password.value !== confirm.value) {
        password.classList.add('error');
        confirm.classList.add('error');
        alert("Passwords do not match!");
        hasError = true;
    }

    // Check terms checkbox
    const terms = document.getElementById('terms');
    if (!terms.checked) {
        alert("You must agree to the Terms and Conditions.");
        hasError = true;
    }

    if (hasError) {
        e.preventDefault();
        return false;
    }
});

// Password strength check
password.addEventListener('input', function () {
    const value = password.value;
    if (value.length < 6) {
        strength.textContent = 'Weak';
        strength.style.color = 'red';
    } 
    
    else if (/[A-Z]/.test(value) && /[0-9]/.test(value) && /[!@#$%^&*]/.test(value)) {
        strength.textContent = 'Strong';
        strength.style.color = 'green';
    } 
    
    else {
        strength.textContent = 'Medium';
        strength.style.color = 'orange';
    }
});