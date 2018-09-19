
https://javascript.info/promise-basics
console.log("Explore Promises"); 

let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
  console.log("Hello, World!"); 
  
});


let promise1 = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done!"
  setTimeout(() => resolve("2 seconds passed!!"), 2000);
});

// resolve runs the first function .then
/*
A Promise object serves as a link between the executor (the “producing code” or "singer) and the consuming functions (the “fans”), which will receive the result or error. Consuming functions can be registered (subscribed) using the methods .then and .catch.
*/
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




/*

// final tasks

function delay(ms) {
  // your code
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

console.log("Done");

*/