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
  localStorage.setItem("colorPalette", JSON.stringify(colors));
  }
  });

  // Board 

  function generateBoard () {
    let board = document.getElementById("pixel-board");
    for (let i = 0; i < 25; i += 1) {
      let boardPixel = document.createElement("div");
      boardPixel.className = "pixel";
      boardPixel.style.backgroundColor = "white";
      boardPixel.style.border = "solid 1px black";
      board.appendChild(boardPixel);
    }
  }
  

  generateBoard();


