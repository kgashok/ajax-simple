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


// .load: the easiest way to use AJAX with jQuery
// sample11/scripts.js
// Use the button click as an event to trigger
// the read from file 
$("#getHTMLFile0").click(function(){
  $("#buttonTarget").load("articleName.html");
});


// sample06/scripts.js
// Pass a parameter to loadFile and refer to it in getInfo.open()
function loadFile(file) {
  var getInfo = new XMLHttpRequest();

  getInfo.open("GET", file);
  getInfo.send();

  getInfo.onreadystatechange = function() {
    var text = document.getElementById("doubleButtonTarget");
    if (getInfo.readyState === 4) {
      if (getInfo.status === 200) {
        text.innerHTML = getInfo.responseText;
      } else {
        console.log('There was a problem with the request.');
      }
    }
  }
}

// Code that loads the HTML file on a button click
document.getElementById("getHTMLFile").onclick = function() {
  loadFile("articleName.html");
};

// Code that loads the HTML file on a button click
document.getElementById("getTextFile").onclick = function() {
  loadFile("articleName.txt");
};

// Section 6.4 
// Load in fragments with .load
$("#partialTextTarget").load("article.html #author");