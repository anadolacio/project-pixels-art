  // Button
  let buttonRandom = document.getElementById("button-random-color");
  
  buttonRandom.addEventListener("click", () => {
  let colorSelected = document.querySelectorAll(".color");
  let colors = ["black"];
  for (let i = 1; i < colorSelected.length; i += 1) {
  let redRandom = Math.floor(Math.random() * 255 + 1);
  let greenRandom = Math.floor(Math.random() * 255 + 1);
  let blueRandom = Math.floor(Math.random() * 255 + 1);
  
  if (redRandom !== (greenRandom !== blueRandom)) {
  colorSelected[i].style.backgroundColor = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
  colors.push(`rgb(${redRandom},${greenRandom},${blueRandom})`);
  }
  window.localStorage.setItem("colorPalette", JSON.stringify(colors));
  }
  });
   
function colorStorage () {
  let colorSaved = JSON.parse(window.localStorage.getItem("colorPalette"));
  let colorSelected = document.querySelectorAll(".color");
  if (colorSaved != null) {
     for (let index = 0; index < colorSelected.length; index += 1) {
      colorSelected[index].style.backgroundColor = colorSaved[index];
    }
  }
}
  // Board 

  function generateBoard () {
  let board = document.getElementById("pixel-board");
    for (let i = 0; i < 25; i += 1) {
       let boardPixel = document.createElement("div");
       boardPixel.className = "pixel";
       boardPixel.style.backgroundColor = "white";
       boardPixel.style.border = "solid 1px black";
       boardPixel.style.width = "40px";
       boardPixel.style.height = "40px";
       boardPixel.style.display = "inline-block"
       board.appendChild(boardPixel);
    }
   }

   function paintPixels () {
    let board = document.getElementById("pixel-board");
    let blackColor = document.getElementById("black");
    blackColor.className = "color selected";
    let colorSelected = document.querySelectorAll(".color");
  }
  

   

  
// Call functions
window.onload = function () {
  generateBoard();
  colorStorage();
  paintPixels();
}

