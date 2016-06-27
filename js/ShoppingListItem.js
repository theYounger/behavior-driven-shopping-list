function ShoppingListItem(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = null;
  this.check = function() {
    this.is_done = true;
  };
  this.uncheck = function() {
    this.is_done = false;
  };
}

