
function ShoppingList() {
  this.items = [];
  this.listReset = function() {
    this.items = [];
  };
  this.addItem = function(shopItem) {

    if(shopItem instanceof ShoppingListItem) {
      this.items.push(shopItem);
    } else {
      throw new Error('Addition error');
    }

  };
  this.removeItem = function(shopItem) {
    if(shopItem instanceof ShoppingListItem) {
      if(shopItem !== undefined) {
        if(this.items.indexOf(shopItem) !== -1) {
          this.items.splice(this.items.indexOf(shopItem), 1);
        } else {
          throw new Error('Removal error');
        }
      } else {
        this.items.pop();
      }
    } else {
      throw new Error('Removal error');
    }
  };

}
