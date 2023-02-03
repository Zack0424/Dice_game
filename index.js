

function throw_dice() {
          var dice1 = Math.floor(Math.random()*6+1);
          var dice2 = Math.floor(Math.random()*6+1);
          var dice1_pic = "images/dice"+dice1+".png";
          var dice2_pic = "images/dice"+dice2+".png";
          document.querySelectorAll("img")[0].setAttribute('src',dice1_pic);
          document.querySelectorAll("img")[1].setAttribute('src',dice2_pic);


          if (dice1 > dice2){
          document.querySelector("#winnerp").textContent = 'Player 1 wins';
          } else if (dice2 > dice1){
                    document.querySelector("#winnerp").textContent = 'Player 2 wins';
          } else {
                    document.querySelector("#winnerp").textContent = 'Draw';
          }
}         