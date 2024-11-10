// Hover Event Example
document.getElementById('hoverArea').addEventListener('mouseover', () => {
    console.log('Mouse is over the hover area');
});

document.getElementById('hoverArea').addEventListener('mouseout', () => {
    console.log('Mouse left the hover area');
});

// Keyboard Event Example
document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
});
