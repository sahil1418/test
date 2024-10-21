// Select the button and audio element
const themeToggleBtn = document.getElementById('themeToggleBtn');
const backgroundAudio = document.getElementById('backgroundAudio');

// Add an event listener for the button click
themeToggleBtn.addEventListener('click', () => {
    // Toggle the light-theme class on the body
    document.body.classList.toggle('light-theme');

    // Toggle the class on the button for styling consistency
    themeToggleBtn.classList.toggle('light-theme');

    // Change the button text based on the current theme
    if (document.body.classList.contains('light-theme')) {
        themeToggleBtn.textContent = 'Switch to Dark Theme';
    } else {
        themeToggleBtn.textContent = 'Switch to Light Theme';
    }

    // Play or pause audio when the theme changes
    if (backgroundAudio.paused) {
        backgroundAudio.play();
    } else {
        backgroundAudio.pause();
    }
});
