let Body = document.body;
let main = document.getElementById("main");
let Img = document.getElementById("Hanuman");
let cursor = document.getElementById("cursor");

main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    Img.style.left = dets.x + "px";
    Img.style.top = dets.y + "px";
});