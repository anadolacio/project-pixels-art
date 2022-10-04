window.onload = function () {
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
};

storageColors();

// Storage

function storageColors() {
  let colorsSaved = JSON.parse(localStorage.getItem("colorPalette"));
  let colorSelected = document.getElementsByClassName("color");
    for (let i = 0; i < colorSelected.length; i += 1) {
    colorSelected[i].style.backgroundColor = colorsSaved[i];
    }

};
