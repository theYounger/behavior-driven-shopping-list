var shopping_cart = new ShoppingList();

var rendered = shopping_cart.render();

document.getElementById('content').innerHTML = rendered;

function add_to_shopping_list() {
  var title = document.getElementByName('title').value;
  var description = document.getElementByName('description').value;
  var new_shopping_list_item = new ShoppingListItem(title, description);
  shopping_cart.addItem(new_shopping_list_item);
}

var rerendered = shopping_cart.render();

document.getElementById('content').innerHTML = rerendered;