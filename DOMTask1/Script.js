let img = document.querySelector('img');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    if(button.textContent === 'Follow me'){
        button.textContent = 'Following';
        button.style.backgroundColor = 'green';
        img.src = 'https://i.pinimg.com/1200x/db/84/b0/db84b0d7dac076ef8d75b37249703892.jpg';
        h1.textContent = 'Tom Holland';
        h3.textContent = 'British Actor';
    }});