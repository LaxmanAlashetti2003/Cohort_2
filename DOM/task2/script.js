let arr = [
  {
    teamName: "Chennai Super Kings",
    captain: "MS Dhoni",
    team: "https://i.pinimg.com/736x/4b/0e/8c/4b0e8c7b50b0e1981a8f064310160c72.jpg",
    backgroundColor: "yellow"
  },
  {
    teamName: "Mumbai Indians",
    captain: "Hardik Pandya",
    team: "https://i.pinimg.com/1200x/4a/92/61/4a9261948cd6cb8745d9fee957fc8605.jpg",
    backgroundColor: "blue"
  },
  {
    teamName: "Royal Challengers Bangalore",
    captain: "Faf du Plessis",
    team: "https://i.pinimg.com/736x/6c/10/38/6c10385a2e3f2c5ac14f1cafea8210e4.jpg",
    backgroundColor: "red"
  },
  {
    teamName: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",
    team: "https://i.pinimg.com/1200x/f3/62/8c/f3628cc66ad730730e2eb88ce6d96735.jpg",
    backgroundColor: "#9d4edd"
  },
  {
    teamName: "Rajasthan Royals",
    captain: "Sanju Samson",
    team: "https://i.pinimg.com/736x/31/c0/ec/31c0eca5efc13f212b55e04ac0c0a418.jpg",
    backgroundColor: "pink"
  }
];



let box = document.getElementById('box');
let button = document.getElementById('Btn');
let body = document.body;
let img = document.querySelector('img');


button.addEventListener('click', function() {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let winner = arr[randomIndex];

    body.style.backgroundColor = winner.backgroundColor;
    img.src = winner.team;

    button.textContent = `Winner: ${winner.teamName} - Captain: ${winner.captain}`;
});