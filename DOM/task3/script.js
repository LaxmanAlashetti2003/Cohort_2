let main = document.getElementById('main');
let button = document.getElementById('Btn');

const quotes = [
  "Believe",
  "Focus",
  "Achieve",
  "Create",
  "Grow",
  "Persist",
  "Rise",
  "Dream",
  "Inspire",
  "Win",
  "Courage",
  "Strength",
  "Motivate",
  "Explore",
  "Shine",
  "Conquer",
  "Dedicate",
  "Learn",
  "Progress",
  "Discipline"
];

button.addEventListener('click', function() {

    let topPosition = Math.floor(Math.random() * 100);
    let leftPosition = Math.floor(Math.random() * 100);
    let rotate = Math.floor(Math.random() * 360);

     let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    let h1 = document.createElement('h1');
    let randomIndex = Math.floor(Math.random() * quotes.length);
    h1.textContent = quotes[randomIndex];
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;
    h1.style.position = 'absolute';
    h1.style.top = `${topPosition}%`;
    h1.style.left = `${leftPosition}%`;
    h1.style.rotate = `${rotate}deg`;

    main.appendChild(h1);
});
