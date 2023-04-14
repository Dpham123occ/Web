// Get counter element and increment button element
var counter = document.getElementById('counter');
var incrementBtn = document.getElementById('incrementBtn');

// Check if counter value exists in localStorage, if not, set to 0
if (!localStorage.getItem('counterValue')) {
    localStorage.setItem('counterValue', 0);
}

// Set initial counter value from localStorage
counter.textContent = localStorage.getItem('counterValue');

// Add click event listener to increment button
incrementBtn.addEventListener('click', function() {
    // Get current counter value from localStorage
    var currentValue = parseInt(localStorage.getItem('counterValue'));

    // Increment counter value
    currentValue++;

    // Update counter element and localStorage with new value
    counter.textContent = currentValue;
    localStorage.setItem('counterValue', currentValue);
});
