function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    // create new to do item
    $('#list').append(li);
    $('#input').children('input').val('');

    }


 //2. Crossing out an item from the list of items:
   function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut(){
    li.toggleClass("strike");
  });

 //3(i). Adding the delete button "X": 
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
    li.addClass('delete')
  }
 // 4. Reordering the items: 
   $('#list').sortable();

}
