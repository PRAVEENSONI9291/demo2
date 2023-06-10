// var item= document.getElementsByClassName('item5');


// item[0].style.backgroundColor= 'green';

// var li= document.getElementsByTagName('li');
// console.log(li);

// li[4].innerText= "I am changed by dom";


var item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor= "green";

var item3 = document.querySelector('.list-group-item:nth-child(3)');
item3.style.display= "none";

var item22= document.querySelectorAll('li');
item22[1].style.color= "#90EE90";

var odditem= document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odditem.length;i++)
{
    odditem[i].style.backgroundColor="#00FF00"
}

