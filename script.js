
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
   
  
   

   // Colors

   function changeFirstClass () {
    let colorSelected = document.querySelectorAll(".color");
    colorSelected[0].className += " selected";
      for (let i = 1; i < colorSelected.length; i += 1) {
        if (colorSelected[i] == " selected") {
        colorSelected[i].className = "color";
      }
    }
};


function pickColor (event) {
  let colorSelected = document.querySelectorAll(".color");
  for (let i = 0; i < colorSelected.length; i += 1) {
    if (colorSelected[i].className == "color selected" ) {
      colorSelected[i].className = "color";
    }
  }
  event.target.className += " selected";
};
let colorSelected = document.querySelectorAll(".color");
for (let i = 0; i < colorSelected.length; i += 1) {
      colorSelected[i].addEventListener("click", pickColor);
};


// // Paint

function paintBox (event) {
  if (event.target.classList.contains("pixel")) {
        const chosenColor = document.querySelector('.selected');
        const paint = getComputedStyle(chosenColor);
        event.target.style.backgroundColor = (paint.backgroundColor);
      }

      savePaintedBoard();
};

document.addEventListener("click", paintBox);


// Clear

    let buttonClear = document.querySelector("#clear-board");

    buttonClear.addEventListener("click", () => {
      let boardPixel = document.querySelectorAll(".pixel")
      for (let i = 0; i < boardPixel.length; i += 1) {
       boardPixel[i].style.backgroundColor = "white";
    }
  });


  //Board Saved

  function savePaintedBoard () {
    let boardPixel = document.querySelectorAll(".pixel")
    let finishedBoard = [];
    for (let i = 0; i < boardPixel.length; i += 1) {
     finishedBoard.push(boardPixel[i].style.backgroundColor);
    }
    window.localStorage.setItem("pixelBoard", JSON.stringify(finishedBoard));
  }

  function boardStorage () {
    let boardSaved = JSON.parse(window.localStorage.getItem("pixelBoard"));
    let boardPixel = document.querySelectorAll(".pixel");
    if (boardSaved != null) {
       for (let i = 0; i < boardPixel.length; i += 1) {
        boardPixel[i].style.backgroundColor = boardSaved[i];
      }
    }
  }

  // New board

  let buttonGenerateBoard = document.querySelector("#generate-board");
  buttonGenerateBoard.addEventListener("click",  () => {
     let matrixNumber = document.getElementById("board-size").value;
     if (matrixNumber == 0) {
      alert("Board inválido!"); 
     } else {
      let board = document.getElementById("pixel-board");
      for (let i = 0; i < ((matrixNumber * matrixNumber) - 25); i += 1) {
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
  });
  
  
// Call functions
window.onload = function () {
  generateBoard();
  colorStorage();
  changeFirstClass();
  boardStorage();

};




