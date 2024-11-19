let heading = document.querySelector(".heading");
let chance = document.querySelector(".chance");
let span = document.querySelector("span");
let transbox = document.querySelector(".transbox");
let player1input = document.querySelector(".player1input");
let player1btn = document.querySelector(".player1btn");
let player2input = document.querySelector(".player2input");
let player2btn = document.querySelector(".player2btn");
let player2result = document.querySelector(".player2result");
let player3input = document.querySelector(".player3input");
let player3btn = document.querySelector(".player3btn");
let player3result = document.querySelector(".player3result");
let player4input = document.querySelector(".player4input");
let player4btn = document.querySelector(".player4btn");
let player4result = document.querySelector(".player4result");
let error = document.querySelector(".error");
// let congrats = document.querySelector(".congrats");
let player1number;
let player2output;
let player3output;
let player4output;

console.log(player2output);
let count = 5;

// -----------------Player One Input--------------

player1btn.addEventListener("click", function () {
  if (player1input.value == "") {
    error.style.color = "red";
    error.innerHTML = "Please give a number";
  } else {
    if (Number(player1input.value)) {
      if (Number(player1input.value) >= 1 && Number(player1input.value) <= 10) {
        player1number = player1input.value;
        error.innerHTML = "";
        heading.innerHTML = "Player-2";
        displaycontroll("p2bp1n");
        chance.style.display = "block";
        span.innerHTML = count;
      } else {
        error.style.color = "red";
        error.innerHTML = "Please give a number between 1 to 10";
      }
    } else {
      error.style.color = "red";
      error.innerHTML = "The input should be a number";
    }
  }
});

// -----------------Player Two Input----------------

player2btn.addEventListener("click", function () {
  if (count >= 1) {
    if (player2input.value == "") {
      error.style.color = "red";
      error.innerHTML = "Please give a number";
    } else {
      if (Number(player2input.value)) {
        error.innerHTML = "";
        count--;
        span.innerHTML = count;
        if (player1number == player2input.value) {
          heading.innerHTML = "Player-3";
          player2output = "PL1-Vs-PL2 : Player 2 Winner";
          count = 5;
          span.innerHTML = count;
          displaycontroll("p3bp2n");
        } else if (count == 0) {
          player2output = "PL1-Vs-PL2 : Player 2 Loser";
          heading.innerHTML = "Player-3";
          count = 5;
          span.innerHTML = count;
          displaycontroll("p3bp2n");
        }
      } else {
        error.style.color = "red";
        error.innerHTML = "Please give a number";
      }
    }
  }
  // else {
  //   console.log("game is over");
  // }
});
// -----------------Player Three Input----------------

player3btn.addEventListener("click", function () {
  if (count >= 1) {
    if (player3input.value == "") {
      error.style.color = "red";
      error.innerHTML = "Please give a number";
    } else {
      if (Number(player3input.value)) {
        error.innerHTML = "";
        count--;
        span.innerHTML = count;
        if (player1number == player3input.value) {
          heading.innerHTML = "Player-4";
          player3output = "PL1-Vs-PL3 : Player 3 Winner";
          count = 5;
          span.innerHTML = count;
          displaycontroll("p4bp3n");
        } else if (count == 0) {
          player3output = "PL1-Vs-PL3 : Player 3 Loser";
          heading.innerHTML = "Player-4";
          count = 5;
          span.innerHTML = count;
          displaycontroll("p4bp3n");
        }
      } else {
        error.style.color = "red";
        error.innerHTML = "Please give a number";
      }
    }
  }
});

// -----------------Player Four Input----------------

player4btn.addEventListener("click", function () {
  if (count >= 1) {
    if (player4input.value == "") {
      error.style.color = "red";
      error.innerHTML = "Please give a number";
    } else {
      if (Number(player4input.value)) {
        error.innerHTML = "";
        count--;
        span.innerHTML = count;
        if (player1number == player4input.value) {
          heading.innerHTML = "Game Result";
          player4output = "PL1-Vs-PL4 : Player 4 Winner";
          chance.style.display = "none";
          player2result.innerHTML = player2output;
          player3result.innerHTML = player3output;
          player4result.innerHTML = player4output;
          transbox.style.background = "LightSkyBlue";
          displaycontroll("all");
        } else if (count == 0) {
          player4output = "PL1-Vs-PL3 : Player 4 Loser";
          heading.innerHTML = "Game Result";
          player2result.innerHTML = player2output;
          player3result.innerHTML = player3output;
          player4result.innerHTML = player4output;
          chance.style.display = "none";
          transbox.style.background = "LightSkyBlue";
          displaycontroll("all");
        }
      } else {
        error.style.color = "red";
        error.innerHTML = "Please give a number";
      }
    }
  }
});

// --------Input & Button Display control Function------

function displaycontroll(type) {
  if (type == "p2bp1n") {
    // here plyer 2 block player 1 none display
    // number peye gele 1st input display none hoye jabe
    player1input.style.display = "none";
    player1btn.style.display = "none";

    // heading will change and 2nd player input field appeared
    player2input.style.display = "inline-block";
    player2btn.style.display = "inline-block";
  } else if (type == "p3bp2n") {
    player3input.style.display = "inline-block";
    player3btn.style.display = "inline-block";
    player2input.style.display = "none";
    player2btn.style.display = "none";
  } else if (type == "p4bp3n") {
    player4input.style.display = "inline-block";
    player4btn.style.display = "inline-block";
    player3input.style.display = "none";
    player3btn.style.display = "none";
  } else if (type == "all") {
    player1input.style.display = "none";
    player1btn.style.display = "none";
    player2input.style.display = "none";
    player2btn.style.display = "none";
    player3input.style.display = "none";
    player3btn.style.display = "none";
    player4input.style.display = "none";
    player4btn.style.display = "none";
  }
}
