var forminput = document.getElementById('forminput');

var filter = document.getElementById('filter');
var listitem = document.getElementById('items');



filter.addEventListener('keyup', filterItem);



forminput.addEventListener('submit', additem);

function additem(e) {
    e.preventDefault();

    var newitem = document.getElementById('newitem').value;
    var description = document.getElementById('description').value;



    var newele = document.createElement('li');
    newele.className = 'list-group-item';
    newele.appendChild(document.createTextNode(newitem));
    var newele2 = document.createElement('div');
    newele2.className = 'fs-small'
    newele2.appendChild(document.createTextNode(description));

    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger float-right btn-sm delete ml-2';
    deletebtn.appendChild(document.createTextNode('X'));

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-success editbtn edit btn-sm float-right';
    editbtn.appendChild(document.createTextNode('Edit'));


    newele2.appendChild(deletebtn);
    newele2.appendChild(editbtn);
    newele.appendChild(newele2);

    listitem.appendChild(newele);
}

listitem.addEventListener('click', removeitem);


function removeitem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            var li = e.target.parentElement.parentElement;
            listitem.removeChild(li);
        }
    }
}

function filterItem(e) {

    var text = e.target.value.toLowerCase();

    var items = listitem.getElementsByTagName('li');



    Array.from(items).forEach(element => {

        if (element.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
            element.style.display = 'block';
        }
        else if (element.firstChild.nextSibling.textContent.toLowerCase().indexOf(text) != -1) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }

    });

}


