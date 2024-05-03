// Get modal and dashboard elements
const modal = document.getElementById('modal');
const dashboard = document.getElementById('dashboard');
const usernameSpan = document.getElementById('username');

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