let currmode = "light";
let but = document.querySelector("#anuj");

but.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white"; 
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black"; 
    }
    console.log("Current mode:", currmode);
});


let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
const massage = document.querySelector("#massage");

const userscorepara = document.querySelector("#para1");
const compscorepara = document.querySelector("#para2");


const drawgame = () => {
    massage.innerText = "Game is a draw, play again!";
    massage.style.backgroundColor = "grey";
};


const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++; 
        userscorepara.innerText = userscore; 
        massage.innerText = `You win! ${userchoice} beats ${compchoice}`;
        massage.style.backgroundColor = "green";
    } else {
        compscore++; 
        compscorepara.innerText = compscore; 
        massage.innerText = `You lose! ${compchoice} beats ${userchoice}`;
        massage.style.backgroundColor = "red";
    }
};


const gencompchoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};


const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    console.log("Computer choice:", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;

        // Game Logic
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else if (userchoice === "scissor") {
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin, userchoice, compchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("User choice clicked:", userchoice);
        playgame(userchoice);
    });
});

