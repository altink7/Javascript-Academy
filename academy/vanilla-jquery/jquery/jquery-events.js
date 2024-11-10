// Example 1: Click Event
$('#myButton').click(function () {
    alert('Button clicked!');
});

// Example 2: Hover Event
$('.hoverable').hover(
    function () {
        $(this).css('background-color', 'gray');
    },
    function () {
        $(this).css('background-color', 'white');
    }
);

// Example 3: Input Change Event
$('#textInput').on('change', function () {
    console.log('New input:', $(this).val());
});

// Task: Add a double-click event on an element with ID `doubleClickArea` to change its color.
