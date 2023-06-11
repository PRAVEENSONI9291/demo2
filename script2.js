var forminput = document.getElementById('forminput');



forminput.addEventListener('submit', additem);

function additem(e) {
    e.preventDefault();

    var newitem = document.getElementById('newitem').value;

    var newele = document.createElement('li');
    newele.className = 'list-group-item';
    newele.appendChild(document.createTextNode(newitem));


    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger float-right btn-sm delete ml-2';
    deletebtn.appendChild(document.createTextNode('X'));

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-success editbtn edit btn-sm float-right';
    editbtn.appendChild(document.createTextNode('Edit'));


    newele.appendChild(deletebtn);
    newele.appendChild(editbtn);



    var listitem = document.getElementById('items');

    listitem.appendChild(newele);





}

var listitem = document.getElementById('items');


listitem.addEventListener('click', removeitem);


function removeitem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            var li = e.target.parentElement;
            listitem.removeChild(li);
        }
    }
}


