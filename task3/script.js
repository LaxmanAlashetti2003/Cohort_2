let fileInput = document.querySelector("#FileClick");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    fileInput.click();
});

fileInput.addEventListener("change", function(event){
    let file = event.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
    
});