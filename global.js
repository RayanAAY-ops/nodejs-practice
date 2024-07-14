/* Global Object
Like the window object, of the browser

It has methods like setTimeout()

The presence of the global object if implied, without calling the global object.

for exemple you don’t have to call global.setTimeout(), do setTimeout() directly.
*/
/*setTimeout(() => {
console.log("alert");
}, 10);
*/


// Run continuously
/*
const int = setInterval(() => {
    console.log("in the interval")
}, 1000);
*/


console.log(__dirname)
console.log(__filename)