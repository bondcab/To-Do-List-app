function newItem() {

    //1. adding a new item to the list of items/

    //creates li
    let li = $('<li></li>');

    //gets input value
    let inputValue = $('#input').val();

    //create text to go inside p element which will be added as child to li
    let text = $('<p></p>').text(inputValue).addClass('text');

    //adds the text to the li
    li.append(text);

    //conditionals
    if (inputValue === '') {
        alert("you must write something!");
    } else {
        let list = $('#list');
        list.append(li);
    }

    //event listener checks if there has been a double click on this newly created element then applies crossOut function 
    li.on('dblclick', function (event) {
        crossOut(this);
    })

    //2. cross out an item function
    //adds the class to apply css text-decoration: line-through. Element parameter changes to 'this' inside the event listener above to select the newly created li 
    function crossOut(element) {
        $(element).toggleClass('strike');
    }

    //3.(i) adding the delete button
    let crossOutButton = $('<button></button>').text('X').addClass('crossOutButton');
    li.append(crossOutButton);

    //event listner for clicking the x and applying the function below
    crossOutButton.on('click', deleteListItem);

    //3.(ii) function to add class delete
    function deleteListItem(){
        li.addClass('delete')
    }

    //.4 Code to reorder items
    $('#list').sortable();




}









