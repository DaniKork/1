// bildes code

let images = ["airbaltic1.jfif", "airbaltic2.jpg", "airbaltic3.jpg"];
let currentIndex = 1;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("plane").src = images[currentIndex];
}