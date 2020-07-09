var randomNumber1= Math.floor(Math.random() *6) + 1;

var imageOfDice1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageOfDice1);


var randomNumber2 = Math.floor(Math.random() *6) +1;

var imageOfDice2= "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageOfDice2);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🔥Player 1 WINS!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="🔥🔥Player 2 WINS!"
}
else
{
    document.querySelector("h1").innerHTML="Draw!!!"
}