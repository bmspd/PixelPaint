let color = "black"
let mousedown = false;
let currentCircle = document.getElementById("current-circle");
drawGrid();
fillCircles();





function fillCircles() {
    let circles = document.querySelectorAll(".color-circle");
    circles.forEach((circle) => {
        circle.style.backgroundColor = circle.id;
        circle.addEventListener("click", (event) => {
            color = circle.id;
            currentCircle.style.backgroundColor = color;
        })
    })
}
function drawGrid() {
    let container = document.getElementById("canvas-container");
    for (let i = 0; i < 2400; i++) {
        let pixelBox = document.createElement("div");
        pixelBox.className += 'pixel';
        pixelBox.addEventListener("mouseenter", (event) => {
            if (mousedown)
            {
                pixelBox.style.backgroundColor = color;
                pixelBox.style.borderColor = color;
            }
        })
        pixelBox.addEventListener("click", (event) => {
            pixelBox.style.backgroundColor = color;
            pixelBox.style.borderColor = color;
        })
        container.appendChild(pixelBox);
    }
    
}

document.addEventListener("mousedown", function(e) {
    mousedown = true;
    e.stopPropagation();
})
document.addEventListener("mouseup", function(e) {
    mousedown = false;
    e.stopPropagation();
})