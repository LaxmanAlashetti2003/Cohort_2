let box = document.getElementById('box');
let button = document.getElementById('Btn');

button.addEventListener('click', function() {

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
});