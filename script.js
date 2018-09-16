/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

// sample08/scripts.js
(function(){
    var getPlayerInfo = new XMLHttpRequest();

    getPlayerInfo.open("GET", "soccerplayers.json");
    getPlayerInfo.send();

    getPlayerInfo.onreadystatechange = function() {
      if (getPlayerInfo.readyState === 4) {
        if (getPlayerInfo.status === 200) {
          console.log(getPlayerInfo.responseText);
          var players = JSON.parse(getPlayerInfo.responseText),
              text = document.getElementById("textTarget");
          for (var i in players) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = players[i].playerOne;
            text.appendChild(newDiv);
          }
        }
      }
    }
})();