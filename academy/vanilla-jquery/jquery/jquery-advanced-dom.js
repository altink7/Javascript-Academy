$(document).ready(function () {
    // Sortable List with Drag and Drop
    $('#sortableList ul').sortable(); // Requires jQuery UI for sortable functionality
    $('.draggable-item').css('cursor', 'move');

    // Filter List Items
    $('#filterInput').on('keyup', function () {
        const filter = $(this).val().toLowerCase();
        $('#filterableList li').each(function () {
            $(this).toggle($(this).text().toLowerCase().includes(filter));
        });
    });

    // Fade Toggle on Button Click
    $('#changeTextButton').on('click', function () {
        $('#title').fadeToggle(500);
    });

    // Toggle Class Example for Styling
    $('#addElementButton').on('click', function () {
        $(this).toggleClass('highlight');
    });
});
