let inner = document.querySelector('.inner');
let h2 = document.querySelector('h2');
let button = document.querySelector('button');

 let grow = 0;
button.addEventListener('click', function() {
  
  let interval = setInterval(function() {
            grow++;
            h2.textContent = grow + "%";
            console.log(grow);
            inner.style.width = grow + "%";
} ,100);

 setTimeout(() => {
    
    clearInterval(interval);
    button.textContent = "Downloaded";
    button.style.backgroundColor = "green";
    button.style.pointerEvents = "none";
    button.style.opacity = "0.6";

 }, 10000);
});

