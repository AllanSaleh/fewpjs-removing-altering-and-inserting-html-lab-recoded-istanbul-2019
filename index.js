// Write your code here!
let main = document.querySelector('main#main');

main.remove();

let newHeader = document.querySelector('h1#victory');

let name = newHeader.nodeName = "Allan";

newHeader.innerHTML = `${name} is the champion`;