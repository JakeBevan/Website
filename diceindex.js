function Play() {

var randomNumber1 = Math.ceil((Math.random()) * 6);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.ceil((Math.random()) * 6);

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
    document.querySelector(".title").innerText = "Draw!";
}
  else if (randomNumber1 > randomNumber2) {
    document.querySelector(".title").innerText = "🚩  Player 1 Wins!";
  }

  else {
    document.querySelector(".title").innerText = "Player 2 Wins!  🚩";
  }

}
