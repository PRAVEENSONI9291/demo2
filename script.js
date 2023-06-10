var main = document.querySelector('#main');
var list= document.getElementById('items');
var title= document.querySelector('div .title');
var header= document.getElementById('header-title');


main.parentElement.style.backgroundColor="grey";
list.lastElementChild.textContent= "hello";
console.log(list.lastChild);


const node= document.createElement("li");
const textNode= document.createTextNode("I am newly added li item");

node.appendChild(textNode);


document.getElementById("items").appendChild(node);

list.firstElementChild.style.color= "blue";

console.log(list.firstChild);

console.log(title.nextSibling);

title.nextElementSibling[0].value= "type something";

console.log(list.previousSibling);
list.previousElementSibling.style.backgroundColor= "red";

const newdiv= document.createElement('div');
newdiv.className= "hello";
newdiv.id= "hello1";
newdiv.setAttribute("title", "head");
const divtxt= document.createTextNode("HEllo word");
console.log(newdiv);

newdiv.appendChild(divtxt);

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1');

container.insertBefore(newdiv, h1);
