//-----------------------------
// https://javascript.info/promise-chaining
//------------------------------
  
var promise6 = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result);
  return result * 2; // <-- (1)

}) // <-- (2)
// .then…



/* ---------------------------
 * https://javascript.info/promise-basics
 *
 *
 * --------------------------
 */
// Using Promises for asynchronous code 
// https://javascript.info/promise-basics#example-loadscript

  /*
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error ` + src));

    document.head.append(script);
  }
  */

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

//let promise5 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");
let promise5 = loadScript("loadFile.js");


promise5.then(
  script => {
    alert(`${script.src} is loaded!`);
    getHtmlFile();
  },
  error => alert(`Error: ${error.message}`)
);

promise5.then(script => {
  alert('One more handler to do something else!');
  $("#scriptTarget").click(function(){
    setText();
  });
});



// ------------

/*
let promise4 = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise4.then(alert); // shows "done!" after 1 second
*/

// resolve runs the first function .then
/*
A Promise object serves as a link between the executor (the “producing code” or "singer) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using the methods .then and .catch.
*/

/*
let promise1 = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done!"
  setTimeout(() => resolve("2 seconds passed!!"), 2000);
});

promise1.then(
  result => alert(result), // shows 'done!" after 1 second
  error => alert(error) // doesn't run
);

let promise2 = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done!"
  setTimeout(() => reject(new Error("Whoops!")), 4000);
});

// resolve runs the first function .then
promise2.then(
  result => alert(result), // doesn't run
  error => alert(error) // Shows "error: Whoops!"
);

*/


console.log("Explore Promises"); 

/*
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
  console.log("Hello, World!"); 
  
});

*/





/*

// final tasks

function delay(ms) {
  // your code
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

console.log("Done");

*/
