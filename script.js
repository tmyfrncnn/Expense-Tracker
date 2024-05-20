// Modal and dashboard elements
const modal = document.getElementById('modal');
const dashboard = document.getElementById('dashboard');
const usernameSpan = document.getElementById('username');

// Add Modal Elements
const toggleAddExpense = document.getElementById('toogleAddExpense');
const addExpenseModal = document.getElementById('addExpenseModal');

// Function to show modal
function showModal() {
  modal.style.display = 'block';
}

// Function to save username
function saveUsername() {
  const usernameInput = document.getElementById('usernameInput').value;
  if (usernameInput.trim() !== '') {
    // Update username
    usernameSpan.textContent = usernameInput;
    
    // Hide modal and show dashboard
    modal.style.display = 'none';
    dashboard.style.display = 'block';
  } else {
    alert('Please enter a valid name.');
  }
}

// Show modal when the page loads
window.onload = showModal;

// get modal, buttons that opens and closes the modal
var modal = document.getElementById("hidden");
var btn = document.getElementById("toogleAddExpense");
var close = document.getElementsByClassName("cancel");

// modal opens when user clicks the button
btn.onclick = function() {
  modal.style.display = "block";
}

// modal closes when user clicks the "cancel" button
close.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}