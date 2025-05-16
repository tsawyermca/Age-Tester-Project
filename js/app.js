function checkAge() {
    const userAge = document.getElementById('userAge').value;
    const result = document.getElementById('result');
    
    // Clear previous classes
    result.classList.remove('error');
    
    // Validate input
    if (userAge === '' || isNaN(userAge)) {
        result.textContent = 'Please enter a number.';
        result.classList.add('error');
        return;
    }
    
    const age = parseInt(userAge);
    
    if (age <= 0 || age >= 120) {
        result.textContent = 'Please enter a realistic age (1-119).';
        result.classList.add('error');
        return;
    }
    
    if (age < 18) {
        result.textContent = 'You are a minor.';
    } else if (age >= 18 && age <= 64) {
        result.textContent = 'You are an adult.';
    } else {
        result.textContent = 'You are a senior.';
    }
}

function reset() {
    document.getElementById('userAge').value = '';
    const result = document.getElementById('result');
    result.textContent = '';
    result.classList.remove('error');
}