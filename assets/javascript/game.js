$(function () {
  var goal = getRandomNumber(19, 120);
  var redGem = getRandomNumber(1, 12);
  var blueGem = getRandomNumber(1, 12);
  var greenGem = getRandomNumber(1, 12);
  var yellowGem = getRandomNumber(1, 12);
  var totalScore = 0;
  var wins = 0;
  var losses = 0;

  function gameReset() {
    goal = getRandomNumber(19, 120);
    $("#Goal").text(goal);
    redGem = getRandomNumber(1, 12);
    blueGem = getRandomNumber(1, 12);
    greenGem = getRandomNumber(1, 12);
    yellowGem = getRandomNumber(1, 12);
    totalScore = 0;
    $("#TotalScore").text(totalScore);

  }
  function results() {
    if (totalScore === goal) {
      alert("You Win!");
      wins++;
      $("#wins").text(wins);
      gameReset();
    }

    else if (totalScore > goal) {
      alert("You Lose!");
      losses++;
      $("#losses").text(losses);
      gameReset();
    }
  }

  fillWins = document.querySelector('#wins').innerHTML = wins;
  fillLosses = document.querySelector('#losses').innerHTML = losses;

  $('#CompGem').one('click', function () {
    $('#Goal').text(goal);
  });

  $('#RedGem').on('click', function () {
    totalScore += redGem;
    $('#TotalScore').text(totalScore);
    results();
  });
  $('#BlueGem').on('click', function () {
    totalScore += blueGem;
    $('#TotalScore').text(totalScore);
    results();
  });
  $('#GreenGem').on('click', function () {
    totalScore += greenGem;
    $('#TotalScore').text(totalScore);
    results();
  });
  $('#YellowGem').on('click', function () {
    totalScore += yellowGem;
    $('#TotalScore').text(totalScore);
    results();
  });

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})
