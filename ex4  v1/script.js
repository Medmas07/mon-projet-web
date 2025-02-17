

document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("#colorList li");

    listItems.forEach(item => {
        item.addEventListener("click", function () {  
            
            this.style.backgroundColor = getRandomColor(); 

            let note = this.getAttribute("data-note"); 
            let audio = document.getElementById(note);
                audio.currentTime = 0; 
                audio.play();
        });
    });

    function getRandomColor() {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
});
