document.addEventListener("DOMContentLoaded", function () {
    const myDiv = document.getElementById("myDiv");
    const colorDropdown = document.getElementById("color");
    const backgroundColorDropdown = document.getElementById("backgroundColor");
    const paddingDropdown = document.getElementById("padding");
    const fontSizeDropdown = document.getElementById("fontSize");
    const fontWeightDropdown = document.getElementById("fontWeight");

    // Function to update div properties
    function updateDivProperties() {
        myDiv.style.color = colorDropdown.value;
        myDiv.style.backgroundColor = backgroundColorDropdown.value;
        myDiv.style.padding = paddingDropdown.value;
        myDiv.style.fontSize = fontSizeDropdown.value;
        myDiv.style.fontWeight = fontWeightDropdown.value;
    }

    // Add event listeners to dropdowns
    colorDropdown.addEventListener("change", updateDivProperties);
    backgroundColorDropdown.addEventListener("change", updateDivProperties);
    paddingDropdown.addEventListener("change", updateDivProperties);
    fontSizeDropdown.addEventListener("change", updateDivProperties);
    fontWeightDropdown.addEventListener("change", updateDivProperties);

    // Initialize div properties
    updateDivProperties();
});
