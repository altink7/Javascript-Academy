function runApplication() {
    let selectedColor = document.getElementById("h1-color").value;
    let h1Elements = document.getElementsByTagName("h1");

    console.log("Selected Color : " + selectedColor);

    for (let i = 0; i < h1Elements.length; i++) {
        let h1Element = h1Elements.item(i);

        toggleColor(selectedColor, h1Element);
    }
}

function toggleColor(selectedColor, h1Element) {
    h1Element.className = '';
    switch (selectedColor) {
        case "gelb":
            h1Element.className = 'yellow';
            break
        case "rot":
            h1Element.className = 'red';
            break;
        case "gruen":
            h1Element.className = 'green';
            break;
        default:
            h1Element.className = '';
    }
}

document.getElementById("h1-color")
    .addEventListener('change', () => runApplication());


runApplication();