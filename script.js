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


// From Section 6 - Ajax and jQuery 

$.ajax({
  url: "articleName.html",
  success: isLoaded,
  statusCode: {
    200: function() {
      console.log("Everything is loaded!!!");
    }
  }
}).done(function(data) {
  $("#textTargetFile").html(data);
});

function isLoaded() {
  $("#isLoadedTarget").html("The articleName.html file has loaded...check the console for a message returned by the statusCode property!!!");
}