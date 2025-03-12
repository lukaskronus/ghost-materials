// Disable right-click context menu and long press context menu on touch devices
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

// Prevent text selection
document.addEventListener('selectstart', event => {
    event.preventDefault();
});

// Block copy events
document.addEventListener('copy', event => {
    event.preventDefault();
});
