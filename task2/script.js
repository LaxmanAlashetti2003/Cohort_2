let word = document.querySelector("h1");
window.addEventListener("keydown", function(dets){
    if (dets.key === " ") {
        word.textContent = "Space";
    }else{
        word.textContent = dets.key;
    }
    
} );

