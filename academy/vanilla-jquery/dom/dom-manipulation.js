// Example 1: Change Title Text
document.getElementById('changeTextButton').addEventListener('click', () => {
    const title = document.getElementById('title');
    title.textContent = 'Title Updated!';
});

// Example 2: Add New Paragraph
document.getElementById('addElementButton').addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added to the page.';
    document.body.appendChild(newParagraph);
});

// Example 3: Remove Last Paragraph
document.getElementById('removeElementButton').addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('p');
    if (paragraphs.length > 1) {
        paragraphs[paragraphs.length - 1].remove();
    }
});
