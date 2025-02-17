document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("#colorList li");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            item.style.backgroundColor = getRandomColor();
        });
    });

    function getRandomColor() {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
});
