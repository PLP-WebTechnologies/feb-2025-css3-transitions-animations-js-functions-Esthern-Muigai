// Store user preference in localStorage
function saveUserPreference(theme) {
    localStorage.setItem('userTheme', theme);
    applyUserPreference();
}

// Retrieve user preference from localStorage
function applyUserPreference() {
    const theme = localStorage.getItem('userTheme') || 'light';
    document.body.className = theme;
}

// Button Animation on Click
document.getElementById('animateButton').addEventListener('click', function() {
    this.style.transform = 'scale(1.2)';
    setTimeout(() => this.style.transform = 'scale(1)', 300);
});

// Theme Selector Event
document.getElementById('themeSelector').addEventListener('change', function() {
    saveUserPreference(this.value);
});

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', applyUserPreference);
