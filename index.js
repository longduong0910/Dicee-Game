var randomNumber1 = (Math.floor(Math.random() * 6) + 1);

var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

var randomImageSource1 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

var randomImageSource2 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2)
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
else if (randomNumber1 < randomNumber2)
  document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
else 
  document.querySelector("h1").innerHTML = "Draw!";