let img = document.querySelector("#img");
let love = document.querySelector("#love");

img.addEventListener("dblclick", function() {
  love.style.opacity = "0.9";
  love.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
 

  setTimeout(function() {
    love.style.opacity = "0";
    love.style.transform = "translate(-50%, -50%) scale(1) rotate(-60deg)";
  }, 800);
}); 