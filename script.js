 window.onload =  function () {

    let buttonRandom = document.querySelector("#button-random-color");

    buttonRandom.addEventListener("click", function() {

        let colorSelected = document.querySelectorAll(".color");

            for (let i = 1; i < colorSelected.length; i += 1) {
                let redRandom = Math.floor(Math.random() * 255 + 1);
                let greenRandom = Math.floor(Math.random() * 255 + 1);
                let blueRandom = Math.floor(Math.random() * 255 + 1);

                if (redRandom !== (greenRandom !== blueRandom)) {
                    colorSelected[i].style.backgroundColor = `rgb(${redRandom},${greenRandom},${blueRandom})`;
                } 
            }
   });

};
 


