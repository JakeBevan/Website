var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

var started = false;
var level = 0;



// $(document).keydown(function() {
// if (!started) {
//   $("h1").text("Level " + level);
//   nextSequence();
//   started = true;
// }
// });

$(".start").click(function() {
if (!started) {
  $("h1").text("Level " + level);
  setTimeout(function() {
    nextSequence();
  }, 600);
  started = true;
}
});


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor((Math.random()*4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}



$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});



function playSound(name){
  var audio = new Audio("Sounds/" + name + ".mp3");
  audio.play();
};

function animatePress(currentColour){

  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
  $("#" + currentColour).removeClass("pressed");
}, 200);

};

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (gamePattern.length === userClickedPattern.length) {
    setTimeout(function() {
      nextSequence();
 }, 1000);
}
  }
  else {
    playSound("wrong")
    $("body").addClass("game-over");
    setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
    $("h1").text("Game Over, Press the Button to Restart");

    startOver();
  }
}

function startOver(){
  level = 0;
 gamePattern = [];
 started = false;
}
