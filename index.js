// Write your code here!
let main = document.querySelector('main#main');

main.remove();

let newHeader = document.querySelector('h1#victory');

newHeader.nodeName = 'h1';

newHeader.innerHTML = `${newHeader.nodeName} is the champion`;