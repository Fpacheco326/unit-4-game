$(function () {


  var compGem = getRandomNumber(19, 120);
  var goal = 0;
  var redGem = getRandomNumber(1, 12);
  var blueGem = getRandomNumber(1, 12);
  var greenGem = getRandomNumber(1, 12);
  var yellowGem = getRandomNumber(1, 12);
  var totalScore = 0;
  var wins = 0;
  var losses = 0;



  function gameReset() {
    compGem = getRandomNumber(19, 120);
    $("#compGem").text(compGem);
    redGem = getRandomNumber(1, 12);
    blueGem = getRandomNumber(1, 12);
    greenGem = getRandomNumber(1, 12);
    yellowGem = getRandomNumber(1, 12);
    totalScore = 0;
    $("#TotalScore").text(totalScore);

  }
  function wins() {
    if (totalScore === compGem) {

      alert("You Win!");
      wins++;
      $("#wins").text(wins);
      gameReset();
    }

    if (totalScore > compGem) {
      alert("You Lose!");
      losses++;
      $("#losses").text(losses);
      gameReset();
    }
  }


  fillWins = document.querySelector('#wins').innerHTML = wins;
  fillLosses = document.querySelector('#losses').innerHTML = losses;
  console.log(wins)


  $('#CompGem').one('click', function () {
    goal += compGem;
    $('#Goal').text(goal);

  });

  $('#RedGem').on('click', function () {
    totalScore += redGem;
    $('#TotalScore').text(totalScore);

  });
  $('#BlueGem').on('click', function () {
    totalScore += blueGem;
    $('#TotalScore').text(totalScore);

  });
  $('#GreenGem').on('click', function () {
    totalScore += greenGem;
    $('#TotalScore').text(totalScore);

  });
  $('#YellowGem').on('click', function () {
    totalScore += yellowGem;
    $('#TotalScore').text(totalScore);
  });

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




})
