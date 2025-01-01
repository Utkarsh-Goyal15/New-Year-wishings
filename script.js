
const form = document.getElementById("data");
const bg = document.getElementById("bg");
const wishDiv = document.createElement("div");
const image = document.getElementById("image");
wishDiv.id = "form"
wishDiv.className = "Animation background"

function newYear() {
    let x = document.getElementById("name");
    if (x.value === "") {
        alert("Please enter your name");
        return;
    }

    let wishes = `Happy new year to ${x.value} and Family <br> At midnight, a new year starts, With dreams and hopes in our hearts. We say goodbye to the old year, And welcome the new one with cheer.<br> New stories and adventures await, With each day we'll celebrate. Let's laugh, learn, and hold dear, The moments in this bright new year.<br>Happy New Year to you! 🎉`
    wishDiv.innerHTML = wishes
    bg.appendChild(wishDiv);
    image.style.position = "relative";
    wishDiv.style.left = "0";
    wishDiv.style.height = "45vh";
    form.remove();
}
