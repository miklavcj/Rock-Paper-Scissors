const btnr = document.querySelector(".btnr");
const btnp = document.querySelector(".btnp");
const btns = document.querySelector(".btns");

let result = document.querySelector("#result");
let pScore = document.querySelector("#pScore");
let cScore = document.querySelector("#cScore");

let playerScore = 0;
let compScore = 0;


const compOptions = ["r","p","s"];

function compPick() {
  let random = Math.floor(Math.random() * 4) ;
  return compOptions[random];
}


btnr.onclick = function() {

  if (compPick() == "s") {
		result.textContent = "You win!"
		playerScore++;
		pScore.textContent = playerScore;
  } else if (compPick() == "p") {
		result.textContent = "You lose!"
		compScore++;
			cScore.textContent = compScore;
  } else {
    result.textContent = "It's a tie."
  }
};

btnp.onclick = function() {
  if (compPick() == "r") {
   result.textContent = "You win!"
		playerScore++;
		pScore.textContent = playerScore;
  } else if (compPick() == "s") {
    result.textContent = "You lose!"
		compScore++;
			cScore.textContent = compScore;
  } else {
    result.textContent = "It's a tie."
  }
};


btns.onclick = function() {
  if (compPick() == "p") {
  
  result.textContent = "You win!"
		playerScore++;
		pScore.textContent = playerScore;
  } else if (compPick() == "r") {
    result.textContent = "You lose!"
		compScore++;
		cScore.textContent = compScore;
  } else {
    result.textContent = "It's a tie."
	}
};




