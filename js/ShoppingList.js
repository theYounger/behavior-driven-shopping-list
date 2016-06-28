
function ShoppingList() {

  this.items = [];
  this.listReset = function() {
    this.items = [];
  };
  this.addItem = function(shopItem) {

    if(shopItem instanceof ShoppingListItem) {
      this.items.push(shopItem);
    } else {
      throw new Error('Addition error!');
    }

  };
  this.removeItem = function(shopItem) {

    if(shopItem === undefined) {
      this.items.pop();
      return;
    }

    if(!(shopItem instanceof ShoppingListItem)) {
      throw new Error('Removal error!');
    }

    if(shopItem !== undefined) {
      if(this.items.indexOf(shopItem) !== -1) {
        this.items.splice(this.items.indexOf(shopItem), 1);
      } else {
        throw new Error('Item not found!');
      }
    }
  };
  this.render = function() {
    var htmlList = this.items.map(function(ele) {
      return ele.render();
    }).join(' \n ');

    var htmlFull =`<ul>
  ${htmlList}
</ul>`;
    return htmlFull;
  };
}

module.exports = ShoppingList;
