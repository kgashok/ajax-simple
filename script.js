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

// Section 6.5
// Using get
/*

    Use jQuery.get
    The .get method is different from .load in a few
    important ways:
    .get is a global function while .load is a method. This 
    means that you would use .get to start a jQuery code block 
    but use .load as a chainable method inside a code block.
    Because of the last difference, it makes sense to use .load 
    to “AJAX in” HTML documents only. .get was created to “AJAX 
    in” all types of documents.
    .get manages GET server requests only while .load can manage
    both GET and POST requests.

Where we used .load as a chainable method inside a code block, 
.get started the code block in this example. The first 
parameter told us what content gets loaded onto the page, 
which is “articleName.html”.

The second parameter was a callback function that defined
where the content got loaded. The function took a parameter
called “data” which represented the content that got 
loaded onto the page.

The inside of the function loaded the content inside
the “textTarget” page element with the help 
of jQuery’s .html method.

The “data” parameter (which represented the content) was 
passed to the .html method so the method knew what to load. 
The function parameter can be anything you want, 
but naming it “data” is a common practice.
*/

$.get("articleName.html", function(data) {
  $("#getTextTarget").html(data);
});

// sample15/scripts.js
/*
  The first parameter for .getJSON was the JSON file with the  
  content we wanted to load onto the page. The second parameter
  was a callback function that loaded the data onto the page.

  That callback function took one parameter we’ve called player,
  which references the JSON file. Next, we used jQuery’s .each
  method to do what the for...in loop did before: look for
  properties in our JSON data.

  .each also took parameters: the first one was players parameter,
  which, again, pointed to our JSON data. The second parameter was
  another callback function that loaded the data onto the page,
  and inside particular page elements we created.
*/
$.getJSON("soccerplayers.json", function(players) {
  $.each(players, function(i) {
    var newDiv = $("<div></div>");
    $(newDiv).append(players[i].playerOne);
    $("#jsonTextTarget").append(newDiv);
  })
});


// Script loading
// Loading Scripts using Get function
$.getScript("loadFile.js", function() {
  getHtmlFile();
  $("#scriptTarget").click(function(){
    setText();
  });
});


// Differentiated by italic lines added to 
// jsonTextTarget element 
// .done part does the summary work 
//
// added the .fail method
$.getJSON("ladysoccer.json", function(players) {
  $.each(players, function(i) {
    var newDiv = $("<i><div></div></i>");
    $(newDiv).append(players[i].playerOne);
    $("#jsonTextTarget").append(newDiv);
  })
}).done(function(data) { 
  // http://bit.ly/objectLen 
  console.log ("Done part reached!"); 
  var summary = "Player count " + Object.keys(data).length;
  $("#jsonTextTarget").append("<b><div id=summary>" + summary + "</div></b>");  
}).fail(function(data) {
  // simulate this by added another extra } to the end of the file
  // at ladysoccer.json
  $("#jsonTextTarget").append("<b><i> The file did not load! </i></b>"); 
}).always(function(data) { 
  console.log("That is all, always!"); 
});


// the final .then method

$.getJSON("peoplesoccer.json").then(
  function(data) {
    $.each(data, function(i) {
      var newDiv = $("<div></div>");
      $(newDiv).append(data[i].playerOne);
      $("#thenTarget").append(newDiv);
    })
  }, function(){
    $("#thenTarget").html("The data failed to load.");
  },
  function(){
      $("#thenTarget").html("The data is loading...");
  }
);

