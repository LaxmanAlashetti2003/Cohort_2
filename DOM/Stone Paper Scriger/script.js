

let userChoice = "";
const iconStyles = ["fa-hand-back-fist", "fa-hand", "fa-hand-scissors"]
const options = ["stone", "paper", "scissor"];

const changeUserChoice = (choice) => {
    userChoice = choice;
    const iconStyle = iconStyles[options.indexOf(userChoice)];
    const userChoiceIcon = document.querySelector("#user span");
    userChoiceIcon.setAttribute("class", `fa-solid ${iconStyle}`);
}

const userWin = (computeChoice, userChoice) => {
    if ((computeChoice === "stone" && userChoice === "paper") ||
        (computeChoice === "paper" && userChoice === "scissor") ||
        (computeChoice === "scissor" && userChoice === "stone")) {
        return true;
    }
    else {
        return false;
    }
}

const getRandomChoice = () => {
    return options[Math.round(Math.random() * 2)];
}

const onStart = () => {
    if (userChoice === "") {
        alert("Please select your choice below.");
        return;
    }
    //loader logic
    const loader = document.getElementById('loader');
    loader.style.display = "block";

    //choice logic
    let computerChoice = getRandomChoice();

    while (computerChoice === userChoice) {
        console.log(computerChoice);
        computerChoice = getRandomChoice();
    }

    const computerCardIcon = document.querySelector("#computer span");

    const computeIconStyle = iconStyles[options.indexOf(computerChoice)];

    const isUserWin = userWin(computerChoice, userChoice);

    const result = document.getElementById("heading");

    setTimeout(() => {
        loader.style.display = "none";
        computerCardIcon.setAttribute("class", `fa-solid ${computeIconStyle}`);
        if (isUserWin) {
            result.innerHTML = "😁 You Won 🏆"
        }
        else {
            result.innerHTML = "😔 You Lost 💔"
        }
    }, 2000);
}