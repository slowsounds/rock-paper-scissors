// var body = document.getElementsByTagName("body")[0];

// var button = document.createElement("button");
// button.innerHTML = "Rock";

// var button = document.createElement("button");
// button.innerHTML = "Paper";

// var button = document.createElement("button");
// button.innerHTML = "Scissors";

// function buttonAction(button){
//     return body.appendChild(button);
// }
// // button.addEventListener ("click", function() {
// //     alert("did something");
// //   });

// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>My First Webpage which is not completely Poo</title>
</head>
<body>
    <h1>Dumb Game</h1>

    <input type="button"; value="Rock" />
    <input type="button"; value="Paper" />
    <input type="button"; value="Scissors" />

<script src="rock-paper-scissors.js">  

</script>  

</body>
</html>




let value;

document.querySelector('#buttons')
  .addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
      let value = target.innerHTML
  
    //   document.querySelector('#output').value += value
    }
  });



// const rockbutton = document.getElementById("rockbutton")
// rockbutton.addEventListener("click", e => {
//   playerSelectionButton = e
//   console.log("Player selection is " + playerSelectionButton)
//   console.log("Rock")
//   return playerSelectionButton;
// })

// const paperButton = document.getElementById("paperButton")
// paperButton.addEventListener("click", e => {
//   playerSelectionButton = e
//   console.log("Player selection is " + playerSelectionButton)
//   console.log("Paper")
// })

// const scissorsButton = document.getElementById("scissorsButton")
// scissorsButton.addEventListener("click", e => {
//   console.log("Scissors")
//   playerSelectionButton = e
//   console.log("Player selection is " + playerSelectionButton)
// })



function storeRockVar(e){
    e = "rock"
    x = e
    console.log("player selection is " + x)
    return x
}
