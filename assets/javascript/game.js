$(function () {
  // $('#GemButtons').on('click', function () {});

  var redGem = getRandomNumber(1, 12);
  var blueGem = getRandomNumber(1, 12);
  var greenGem = getRandomNumber(1, 12);
  var yellowGem = getRandomNumber(1, 12);
  var totalScore = 0;

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