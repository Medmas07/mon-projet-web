document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const sizePicker = document.getElementById("sizePicker");
    const fontPicker = document.getElementById("fontPicker");
    const text = document.getElementById("text");

    function updateStyle() {
        text.style.color = colorPicker.value;
        text.style.fontSize = sizePicker.value + "px";
        text.style.fontFamily = fontPicker.value;
    }

    colorPicker.addEventListener("input", updateStyle);
    sizePicker.addEventListener("input", updateStyle);
    fontPicker.addEventListener("change", updateStyle);
});
