let userScore = 0;
let computerScore = 0;
let user1Score = 0;
let user2Score = 0;
let multiMove = "";
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const single_radio = document.getElementById("single");
const multi_radio = document.getElementById("multi");

mainSingle();


multi_radio.onclick = function() {
    rock_div.removeEventListener('click',singleR);
    paper_div.removeEventListener('click', singleP);
    scissors_div.removeEventListener('click', singleS);
    document.getElementById('user1-label').innerText = 'player1';
    document.getElementById('user2-label').innerText = 'player2';
    mainMulti();
};

single_radio.onclick = function() {
    rock_div.removeEventListener('click',multiR);
    paper_div.removeEventListener('click', multiP);
    scissors_div.removeEventListener('click', multiS);
    document.getElementById('user1-label').innerText = 'user';
    document.getElementById('user2-label').innerText = 'comp';
    mainSingle();
};

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNo = Math.floor(Math.random()*3);
    return choices[randomNo];
}

function convertLetter(letter) {
    switch(letter) {
        case 'r':
            return('Rock');
        case 'p':
            return('Paper');
        case 's':
            return('Scissors');
    }
}

function winSingle(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertLetter(user)} beats ${convertLetter(computer)}. You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'),500);
}

function loseSingle(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertLetter(user)} beats ${convertLetter(computer)}. You lost...`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'),500);
}

function drawSingle(user) {
    result_p.innerHTML = `You both picked ${convertLetter(user)}. Draw!`;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(() => document.getElementById(user).classList.remove('grey-glow'),500);
}

function win1Multi(user1,user2) {
    user1Score++;
    userScore_span.innerHTML = user1Score;
    result_p.innerHTML = `${convertLetter(user1)} beats ${convertLetter(user2)}. player1 wins!`;
    document.getElementById(user1).classList.add('green-glow');
    setTimeout(() => document.getElementById(user1).classList.remove('green-glow'),500);
    document.getElementById(user2).classList.add('red-glow');
    setTimeout(() => document.getElementById(user2).classList.remove('red-glow'),500);
}

function win2Multi(user1,user2) {
    user2Score++;
    computerScore_span.innerHTML = user2Score;
    result_p.innerHTML = `${convertLetter(user2)} beats ${convertLetter(user1)}. player2 wins!`;
    document.getElementById(user2).classList.add('green-glow');
    setTimeout(() => document.getElementById(user2).classList.remove('green-glow'),500);
    document.getElementById(user1).classList.add('red-glow');
    setTimeout(() => document.getElementById(user1).classList.remove('red-glow'),500);
}

function drawMulti(user1,user2) {
    result_p.innerHTML = `You both picked ${convertLetter(user2)}! It's a draw!`;
    document.getElementById(user2).classList.add('grey-glow');
    setTimeout(() => document.getElementById(user2).classList.remove('grey-glow'),500);
}

function gameSingle(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            winSingle(userChoice,computerChoice);
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            loseSingle(userChoice,computerChoice);
            break;

        case 'rr':
        case 'pp':
        case 'ss':
            drawSingle(userChoice,computerChoice);
            break;
    }
}

function gameMulti(user1,user2){
    multiMove = "";
    switch(user1+user2){
        case 'rs':
        case 'pr':
        case 'sp':
            win1Multi(user1,user2);
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            win2Multi(user1,user2);
            break;

        case 'rr':
        case 'pp':
        case 'ss':
            drawMulti(user1,user2);
            break;
    }
}

function mainSingle() {
    rock_div.addEventListener('click', singleR);
    paper_div.addEventListener('click', singleP);
    scissors_div.addEventListener('click', singleS);
}

function mainMulti() {
    rock_div.addEventListener('click', multiR);
    paper_div.addEventListener('click', multiP);
    scissors_div.addEventListener('click', multiS);
}

function singleR() {
    gameSingle('r')
}

function singleP() {
    gameSingle('p')
}

function singleS() {
    gameSingle('s')
}

function multiR() {
    if (multiMove  === "") {
        multiMove = 'r'
    } else {
        gameMulti(multiMove,'r')
    }

}

function multiS() {
    if (multiMove  === "") {
        multiMove = 's'
    } else {
        gameMulti(multiMove,'s')
    }

}

function multiP() {
    if (multiMove  === "") {
        multiMove = 'p'
    } else {
        gameMulti(multiMove,'p')
    }

}


