var newItem;
var newList;

describe('ShoppingListItem', function() {

  beforeEach(function() {
    newItem = new ShoppingListItem('Donald Trump', 'Republican Nominee');
    expect(newItem).to.be.an.instanceof(ShoppingListItem);
  });

  it('should be a function', function() {
    expect(ShoppingListItem).to.exist;
    expect(ShoppingListItem).to.be.an('function');
  });

  it('should have property "name"', function() {
    expect(newItem).to.have.property('name');
    expect(newItem.name).to.equal('Donald Trump');
  });

  it('should have property "description"', function() {
    expect(newItem).to.have.property('description');
    expect(newItem.description).to.equal('Republican Nominee');
  });

  it('should have property "is_done"', function() {
    expect(newItem).to.have.property('is_done');
  });

  describe('ShoppingListItem Methods', function() {

    it('should have a method "check"', function() {
      expect(newItem).to.have.property('check');
      expect(newItem.check).to.be.an('function');
      newItem.check();
      expect(newItem.is_done).to.equal(true);
    });

    it('should have a method "uncheck"', function() {
      expect(newItem).to.have.property('uncheck');
      expect(newItem.uncheck).to.be.an('function');
      newItem.uncheck();
      expect(newItem.is_done).to.equal(false);
    });

  });

  // it('should have a method "render"', function() {
  //   expect(newList.tohave.property('uncheck'));
  //   expect(newList.render).to.be.an('function');
  //   newList.render();
  //   expe
  // });

});

describe('ShoppingList', function() {

  beforeEach(function() {
    newList = new ShoppingList();
    expect(newList).to.be.an.instanceof(ShoppingList);
  });

  it('should be a function', function() {
    expect(ShoppingList).to.exist;
    expect(ShoppingList).to.be.an('function');
  });

  it('should have property "items"', function() {
    expect(newList).to.have.property('items');
  });

  describe('ShoppingList Methods', function() {

    it('should be a function', function() {
      expect(newList.listReset).to.exist;
      expect(newList.listReset).to.be.an('function');
      newList.listReset();
      expect(newList.listReset).to.equal([]);
    });

    it('should be a function', function() {
      expect(newList.addItem).to.exist;
      expect(newList.addItem).to.be.an('function');
      newList.listReset();
      newList.addItem(shopItem);
      if(shopItem instanceof newListItem) {
        expect(newList.items[newList.items.length - 1] === shopItem);
      } else {
        expect(newList.addItem(shopItem)).to.equal('Error!');
      }
    });

  });
});