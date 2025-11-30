let main = document.getElementById("main");
let Img = document.getElementById("Hanuman");
let cursor = document.getElementById("cursor");
let textDiv = document.getElementById("textDiv");

// Custom cursor follow
main.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});

// Show text on image hover
Img.addEventListener("mouseenter", function () {
    textDiv.style.opacity = 1;
});

// Hide text on image leave
Img.addEventListener("mouseleave", function () {
    textDiv.style.opacity = 0;
});
