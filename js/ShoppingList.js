var ShoppingListItem = require('./ShoppingList');

function ShoppingList() {
  this.items = [];
  this.resetList = function() {
    this.items = [];
  };
  this.addItem = function(shopItem) {

    if(shopItem instanceof ShoppingListItem) {
      this.items.push(shopItem);
    } else {
      throw 'Error!';
    }

  };
}