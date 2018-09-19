// sample16/loadFile.js
function getHtmlFile() {

  $("#scriptTarget").load("articleName.html");
};

function setText() {

  $("#scriptTarget").css({
    "color": "darkorange",
    "font-weight": "bold"
  });

};